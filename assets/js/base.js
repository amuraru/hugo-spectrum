/*
 *
 * Copyright 2020 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it. If you have received this file from a source other than Adobe,
 * then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 *
 */
(function($) {
  'use strict';
  var LanguageSelector = {
    init: function() {
      $(document).ready(function() {
        $(document).on('change', '#coral-language-selector', function(e) {
          location.href = $(this).val();
          return false;
        });
      });
    },
  };

  LanguageSelector.init();

}(jQuery));
