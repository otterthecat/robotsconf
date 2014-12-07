var UI = require('ui');
var ajax = require('ajax');

// object to store urls/services
var actions = [
  'your/url/here',
  'another/url/here'
];

// create menu
var menu = new UI.Menu({
  sections: [{
    title: 'First section',
    items: [{
      title: 'Wake',
      subtitle: 'turns eyes on'
    }, {
      title: 'Sleep',
      subtitle: 'turns eyes off'
    }]
  }]
});

// assign event and call service
menu.on('select', function(e) {
  ajax(
    {
      url: actions[e.itemIndex],
      type: 'json'
    },
    function(data) {
      // Success!
      console.log('Successfully commanded hat!');
    },
    function(error) {
      // Failure!
      console.log('Failed commanding robot. We\'re doomed. ' + error);
    }
  );

  console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
  console.log('The item is titled "' + e.item.title + '"');
});

// render menu
menu.show();