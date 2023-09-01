import { Controller } from "@hotwired/stimulus"

import { Chart, registerables } from "chart.js";
import linechartService from "../services/linechart_service";
Chart.register(...registerables);

// Connects to data-controller="linechart"
export default class extends Controller {
  static targets = ['myChart'];
  canvasContext() {
      return this.myChartTarget.getContext('2d');
  }
  async connect() {
    const [label, data] = await linechartService.reqLine()
    const ctx = this.canvasContext();

    const lineChartConfig = {
        type: 'line',
        data: {
          labels:  ['a', 'b'],
          datasets: [{
            label: label,
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
    };
    
    new Chart(ctx, lineChartConfig);
  }
}
