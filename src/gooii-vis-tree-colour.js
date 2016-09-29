(function () {
  'use strict';

  angular.module('gooii.vis',[]);
}());

(function() {

  'use strict';

  angular.module('gooii.vis').factory('gooii.vis.treecolour', treeColour);

  function treeColour() {
    var factory = {};
    var colorFn = d3.scaleOrdinal(d3.schemeCategory20c);
    factory.basic = function(node) {
      if(node.children) {
        // console.log('Tree Colour for parent',node, colorFn(node.data.id));
        return colorFn(node.data.id);
      }
      else {
        var color = colorFn(node.parent.data.id);
        var d3col = d3.color(color);
        var c = (node.x0 - node.parent.x0) / (node.parent.x1 - node.parent.x0);
        // console.log('Tree Colour for leaf',node, color, d3col, c);
        return d3col.darker(c);
      }
    }

    return factory;
  }
})();
