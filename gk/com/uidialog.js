requirejs.config({
  context: 'gk',
  paths: {
    'jquery-ui': 'lib/jquery-ui/jquery-ui-1.10.4.custom'
  }
});

// define module (component)
define(['jquery-ui', 'css!lib/jquery-ui/css/start/jquery-ui-1.10.4.custom.css'], function () {
  return {
    template: '<div id="{{id}}"><content></content></div>',
    script: function () {
      'use strict';

      var self = this,
        $oriEle = self.$originEle,
        $ele = self.$ele,
        defaults = {
          autoOpen: $oriEle.attr('autoOpen') === 'true',
          draggable: $oriEle.attr('draggable') === 'false' ? false : true,
          modal: $oriEle.attr('modal') === 'true',
          resizable: $oriEle.attr('resizable') === 'false' ? false : true
        };

      $.extend(true, defaults, {
        height: $oriEle.attr('height'),
        maxHeight: $oriEle.attr('maxHeight'),
        maxWidth: $oriEle.attr('maxWidth'),
        minHeight: $oriEle.attr('minHeight'),
        minWidth: $oriEle.attr('minWidth'),
        title: $oriEle.attr('title'),
        width: $oriEle.attr('width')
      });

      this.init = function () {
        var closable = $oriEle.attr('closable') === 'false' ? false : true;
        if (!closable) {
          defaults.closeOnEscape = false,
          defaults.open = function () {
            $('.ui-dialog-titlebar-close', $ele.parent()).hide();
          };
        }

        $ele.dialog(defaults);
      };

      this.buttons = function (obj) {
        if (obj) {
          return $ele.dialog('option', 'buttons', obj);
        } else {
          return $ele.dialog('option', 'buttons');
        }
      };

      this.open = function () {
        return $ele.dialog('open');
      };

      this.close = function () {
        return $ele.dialog('close');
      };

      this.title = function (newTitle) {
        if (newTitle) {
          return $ele.dialog('option', 'title', newTitle);
        } else {
          return $ele.dialog('option', 'title');
        }
      };
    }
  };
});
