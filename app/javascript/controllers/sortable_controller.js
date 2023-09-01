import { Controller } from "@hotwired/stimulus"

import Sortable from 'sortablejs';

// Connects to data-controller="sortable"
export default class extends Controller {
  connect() {
    Sortable.create(this.element , {
      onEnd: this.onEnd.bind(this),
      group: 'shared'

    })
  }
  onEnd(event) {
    const toId = event.to.getAttribute('id')
    const li = event.to.querySelector('li[draggable="false"] a')

    const taskData = {
      order: event.newIndex,
      kanban_column_id: toId
    };
    fetch(`/tasks/${li.id}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ task: taskData })
    })

  }
}
