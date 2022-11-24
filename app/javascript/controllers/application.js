import { Application } from "@hotwired/stimulus"
import { Turbo, cable } from "@hotwired/turbo-rails"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
