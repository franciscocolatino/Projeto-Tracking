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
  onStart(event) {
    console.log(event.oldIndex)
  }
  onEnd(event) {
    console.log(event.to)
    //console.log(event.from)
    //console.log(event.oldIndex)
    //console.log(event.newIndex)
    const destinationList = event.to; // Element representing the destination list
    const destinationListId = destinationList.getAttribute('id');
    console.log(destinationListId)

  }
}
