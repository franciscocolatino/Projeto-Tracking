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
    const [label, labels, data] = await linechartService.reqLine()
    const ctx = this.canvasContext();

    const lineChartConfig = {
        type: 'line',
        data: {
          labels:  labels,
          datasets: [{
            label: label,
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
    };
    
    new Chart(ctx, lineChartConfig);
  }
}
