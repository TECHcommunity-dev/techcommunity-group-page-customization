// Will render for topic-above-suggested plugin outlet
export default {

    setupComponent(args, component) {
         // Setup our component title
        component.set('Topic_id',settings.Topic_id);

        // Setup our component with the topics from the array
        component.set('Topic_slug', settings.Topic_slug);
    }
}