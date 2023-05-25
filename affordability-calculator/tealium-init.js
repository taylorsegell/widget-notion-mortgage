(function(){
  "use strict";
  const routeData = window.appVars && window.appVars.routeData;
  window.utag_data = {
    page_name : "", // Contains a user-friendly name for the page.
    page_section : "", // Contains a user-friendly page section, e.g. 'configuration section'.
    page_category : routeData.category, // Contains a user-friendly page category, e.g. 'appliance page'.
    page_subcategory : routeData.subCategory, // Contains a user-friendly page subcategory, e.g. 'refrigerator page'.
    page_type : "page" // Contains a user-friendly page type, e.g. 'cart page'.
  };

  let a=window && window.appVars && window.appVars.tealium && window.appVars.tealium.enabled && window.appVars.tealium.endpoint;
  const b=document;
  const c='script';
  const d=b.createElement(c);
  d.src=a;
  d.type='text/java'+c;
  d.async=window.appVars.tealium.async;
  a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);


})(document, window);
