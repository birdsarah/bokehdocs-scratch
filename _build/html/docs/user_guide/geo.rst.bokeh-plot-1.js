
(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = js_urls.length;
    for (i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-0.10.0dev1.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-0.10.0dev1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.10.0dev1.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.10.0dev1.min.css");
          window._bokeh_onload_callbacks.forEach(function(callback){callback()});
          delete window._bokeh_onload_callbacks
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };

  var elt = document.getElementById("f3230d3b-b6bd-4ba6-a4b8-cfc3c549c357");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f3230d3b-b6bd-4ba6-a4b8-cfc3c549c357' but no matching script tag was found. ")
    return false;
  }

  
  var websocket_url = null;

  // Docs will be set for the static case
  var docs_json = {"5aec0eb8-08b3-4379-91df-b7dfdb31bb05": {"roots": {"references": [{"type": "BoxSelectTool", "id": "9f7fe948-1124-4fd9-b809-c37166e0aa2b", "attributes": {"name": null, "select_every_mousemove": false, "plot": {"type": "GMapPlot", "id": "907eed03-e3cf-4bf0-8819-c18f62e50491"}, "renderers": [], "tags": [], "names": [], "callback": null, "dimensions": ["width", "height"]}}, {"type": "ColumnDataSource", "id": "1b5ba46f-d4fa-4e44-91dc-313faa08e663", "attributes": {"name": null, "data": {"lat": [30.29, 30.2, 30.29], "lon": [-97.7, -97.74, -97.78]}, "tags": [], "column_names": ["lat", "lon"], "selected": {"2d": {"indices": []}, "0d": {"indices": [], "flag": false}, "1d": {"indices": []}}, "callback": null}}, {"type": "Circle", "id": "7a54029b-147e-4616-abf1-9b93870b5cd3", "attributes": {"line_alpha": {"value": 1.0}, "line_color": {"value": null}, "angle": {"value": 0.0, "units": "rad"}, "radius": null, "line_dash": [], "line_cap": "butt", "radius_dimension": "x", "size": {"value": 15, "units": "screen"}, "y": {"field": "lat"}, "name": null, "fill_alpha": {"value": 0.8}, "tags": [], "line_join": "miter", "x": {"field": "lon"}, "fill_color": {"value": "blue"}, "visible": true, "line_dash_offset": 0, "line_width": {"value": 1}}}, {"type": "GlyphRenderer", "id": "de715b53-df10-4eb6-b807-35bd9fe939d6", "attributes": {"name": null, "x_range_name": "default", "tags": [], "y_range_name": "default", "hover_glyph": null, "glyph": {"type": "Circle", "id": "7a54029b-147e-4616-abf1-9b93870b5cd3"}, "level": "glyph", "selection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "1b5ba46f-d4fa-4e44-91dc-313faa08e663"}, "nonselection_glyph": null}}, {"type": "ToolEvents", "id": "5b1f792a-739b-4253-8f2c-397cec7f87ac", "attributes": {"name": null, "tags": [], "geometries": []}}, {"type": "WheelZoomTool", "id": "735c2818-4335-44e1-8f0c-629f76c65b7c", "attributes": {"name": null, "tags": [], "plot": {"type": "GMapPlot", "id": "907eed03-e3cf-4bf0-8819-c18f62e50491"}, "dimensions": ["width", "height"]}}, {"type": "PanTool", "id": "886633b5-04a0-4499-8d7b-9171d66531c2", "attributes": {"name": null, "tags": [], "plot": {"type": "GMapPlot", "id": "907eed03-e3cf-4bf0-8819-c18f62e50491"}, "dimensions": ["width", "height"]}}, {"type": "GMapPlot", "id": "907eed03-e3cf-4bf0-8819-c18f62e50491", "attributes": {"lod_timeout": 500, "min_border_top": 50, "y_range": {"type": "DataRange1d", "id": "7a5ff131-f10b-4995-8def-ef7fb380506f"}, "min_border_left": 50, "plot_height": 600, "lod_threshold": 2000, "tags": [], "above": [], "map_options": {"lng": -97.73, "lat": 30.29, "map_type": "roadmap", "zoom": 11}, "outline_line_join": "miter", "outline_line_width": {"value": 1}, "lod_interval": 300, "min_border_right": 50, "title": "Austin", "title_text_align": "center", "min_border_bottom": 50, "logo": "normal", "right": [], "min_border": 40, "h_symmetry": true, "title_text_font_style": "normal", "extra_x_ranges": {}, "x_mapper_type": "auto", "plot_width": 600, "y_mapper_type": "auto", "disabled": false, "background_fill_color": {"value": "#ffffff"}, "title_text_baseline": "alphabetic", "tools": [{"type": "PanTool", "id": "886633b5-04a0-4499-8d7b-9171d66531c2"}, {"type": "WheelZoomTool", "id": "735c2818-4335-44e1-8f0c-629f76c65b7c"}, {"type": "BoxSelectTool", "id": "9f7fe948-1124-4fd9-b809-c37166e0aa2b"}], "title_text_color": {"value": "#444444"}, "outline_line_cap": "butt", "webgl": false, "renderers": [{"type": "GlyphRenderer", "id": "de715b53-df10-4eb6-b807-35bd9fe939d6"}], "title_text_font_size": {"value": "20pt"}, "name": null, "title_text_alpha": {"value": 1.0}, "background_fill_alpha": {"value": 1.0}, "outline_line_dash_offset": 0, "responsive": false, "lod_factor": 10, "below": [], "tool_events": {"type": "ToolEvents", "id": "5b1f792a-739b-4253-8f2c-397cec7f87ac"}, "extra_y_ranges": {}, "toolbar_location": "above", "left": [], "outline_line_alpha": {"value": 1.0}, "border_fill_alpha": {"value": 1.0}, "title_text_font": "helvetica", "outline_line_color": {"value": "#aaaaaa"}, "outline_line_dash": [], "v_symmetry": false, "x_range": {"type": "DataRange1d", "id": "880a4840-73f9-402c-87b7-2b9bc3166d8e"}, "border_fill_color": {"value": "#ffffff"}}}, {"type": "DataRange1d", "id": "880a4840-73f9-402c-87b7-2b9bc3166d8e", "attributes": {"name": null, "range_padding": 0.1, "names": [], "renderers": [], "tags": [], "end": null, "callback": null, "start": null}}, {"type": "DataRange1d", "id": "7a5ff131-f10b-4995-8def-ef7fb380506f", "attributes": {"name": null, "range_padding": 0.1, "names": [], "renderers": [], "tags": [], "end": null, "callback": null, "start": null}}], "root_ids": ["907eed03-e3cf-4bf0-8819-c18f62e50491"]}, "title": "Bokeh Application", "version": "0.10.0dev1"}};

  var render_items = [{ 'elementid' : "f3230d3b-b6bd-4ba6-a4b8-cfc3c549c357",
                        'sessionid' : "" }];

  if (typeof(window._bokeh_is_loading) !== undefined && window._bokeh_is_loading == 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.embed_items(docs_json, render_items, websocket_url);
  } else {
    load_libs(['https://cdn.pydata.org/bokeh/dev/bokeh-0.10.0dev1.min.js', 'https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.10.0dev1.min.js'], function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date());
      Bokeh.embed.embed_items(docs_json, render_items, websocket_url);
    });
  }

}(this));