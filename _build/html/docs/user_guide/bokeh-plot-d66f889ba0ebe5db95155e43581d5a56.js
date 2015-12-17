
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

  var elt = document.getElementById("890c3d12-81e7-4e24-b8d8-9f089bc13b4c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '890c3d12-81e7-4e24-b8d8-9f089bc13b4c' but no matching script tag was found. ")
    return false;
  }

  
  var websocket_url = null;

  // Docs will be set for the static case
  var docs_json = {"f8a740f2-adad-4a51-b490-72957394f6f9": {"roots": {"references": [{"type": "LinearAxis", "id": "bc45b01d-519b-4ce1-8c6f-d48a6caded90", "attributes": {"axis_line_width": {"value": 1}, "minor_tick_in": 0, "major_tick_line_dash": [], "major_tick_line_alpha": {"value": 1.0}, "axis_label_text_font_style": "normal", "tags": [], "location": "auto", "major_label_text_align": "center", "minor_tick_line_width": {"value": 1}, "major_tick_line_dash_offset": 0, "major_tick_line_color": {"value": "black"}, "minor_tick_line_alpha": {"value": 1.0}, "axis_line_join": "miter", "y_range_name": "default", "major_label_orientation": "horizontal", "axis_line_alpha": {"value": 1.0}, "axis_label_text_color": {"value": "#444444"}, "axis_label_text_baseline": "alphabetic", "axis_line_color": {"value": "black"}, "major_label_text_font": "helvetica", "minor_tick_out": 4, "x_range_name": "default", "major_label_text_baseline": "alphabetic", "major_tick_in": 2, "major_label_text_font_style": "normal", "formatter": {"type": "BasicTickFormatter", "id": "6775830c-1d0c-435d-bd66-ff677bc708e2"}, "axis_label_text_align": "center", "ticker": {"type": "BasicTicker", "id": "c594e9d6-ee81-4c94-a600-59ab9c750a65"}, "major_label_standoff": 5, "name": null, "major_tick_line_cap": "butt", "minor_tick_line_cap": "butt", "minor_tick_line_join": "miter", "minor_tick_line_dash": [], "visible": true, "major_label_text_alpha": {"value": 1.0}, "axis_line_cap": "butt", "level": "overlay", "major_tick_out": 6, "axis_line_dash": [], "axis_label": "", "major_tick_line_width": {"value": 1}, "major_label_text_font_size": {"value": "10pt"}, "bounds": "auto", "axis_label_text_alpha": {"value": 1.0}, "major_tick_line_join": "miter", "axis_line_dash_offset": 0, "axis_label_text_font": "helvetica", "axis_label_text_font_size": {"value": "16pt"}, "minor_tick_line_dash_offset": 0, "major_label_text_color": {"value": "#444444"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "11d002fa-e46b-4494-a16b-242a7b5c6bad"}, "axis_label_standoff": 5, "minor_tick_line_color": {"value": "black"}}}, {"type": "Plot", "subtype": "Figure", "id": "11d002fa-e46b-4494-a16b-242a7b5c6bad", "attributes": {"lod_timeout": 500, "min_border_top": 50, "y_range": {"type": "DataRange1d", "id": "645edbbf-59b0-411e-a3fe-12e5f2473d42"}, "min_border_left": 50, "plot_height": 400, "lod_threshold": 2000, "tags": [], "above": [], "outline_line_join": "miter", "outline_line_width": {"value": 1}, "lod_interval": 300, "min_border_right": 50, "title": "Mouse over the dots", "title_text_align": "center", "min_border_bottom": 50, "logo": "normal", "right": [], "min_border": 40, "h_symmetry": true, "title_text_font_style": "normal", "extra_x_ranges": {}, "x_mapper_type": "auto", "plot_width": 400, "y_mapper_type": "auto", "disabled": false, "background_fill_color": {"value": "#ffffff"}, "title_text_baseline": "alphabetic", "tools": [{"type": "HoverTool", "id": "fd4931a1-8f04-47cf-af4f-13f664d63734"}], "title_text_color": {"value": "#444444"}, "outline_line_cap": "butt", "webgl": false, "renderers": [{"type": "LinearAxis", "id": "bc45b01d-519b-4ce1-8c6f-d48a6caded90"}, {"type": "Grid", "id": "2254e766-5e7c-46db-b89c-c67a81ebb851"}, {"type": "LinearAxis", "id": "4139fcfd-cdb8-4c17-b1b2-2a169591516a"}, {"type": "Grid", "id": "828dce32-e247-41f7-8aa4-87de5a598dfc"}, {"type": "GlyphRenderer", "id": "7799cc68-0b92-4ba9-9997-a73a05c45722"}], "title_text_font_size": {"value": "20pt"}, "name": null, "title_text_alpha": {"value": 1.0}, "background_fill_alpha": {"value": 1.0}, "outline_line_dash_offset": 0, "responsive": false, "lod_factor": 10, "below": [{"type": "LinearAxis", "id": "bc45b01d-519b-4ce1-8c6f-d48a6caded90"}], "tool_events": {"type": "ToolEvents", "id": "95eac901-29a8-41ae-88b3-c2d34179e911"}, "extra_y_ranges": {}, "toolbar_location": "above", "left": [{"type": "LinearAxis", "id": "4139fcfd-cdb8-4c17-b1b2-2a169591516a"}], "outline_line_alpha": {"value": 1.0}, "border_fill_alpha": {"value": 1.0}, "title_text_font": "helvetica", "outline_line_color": {"value": "#aaaaaa"}, "outline_line_dash": [], "v_symmetry": false, "x_range": {"type": "DataRange1d", "id": "64057d3b-e8ff-4672-886b-5e2dbf1a8845"}, "border_fill_color": {"value": "#ffffff"}}}, {"type": "ColumnDataSource", "id": "bd70c8c1-b8b4-4462-a87d-5b9ce95d0cee", "attributes": {"name": null, "data": {"desc": ["A", "b", "C", "d", "E"], "x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7], "imgs": ["http://bokeh.pydata.org/static/snake.jpg", "http://bokeh.pydata.org/static/snake2.png", "http://bokeh.pydata.org/static/snake3D.png", "http://bokeh.pydata.org/static/snake4_TheRevenge.png", "http://bokeh.pydata.org/static/snakebite.jpg"]}, "tags": [], "column_names": ["desc", "x", "y", "imgs"], "selected": {"2d": {"indices": []}, "0d": {"indices": [], "flag": false}, "1d": {"indices": []}}, "callback": null}}, {"type": "Circle", "id": "2941cba8-2a18-4eb4-9ba9-a0e21d9f7f48", "attributes": {"line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "angle": {"value": 0.0, "units": "rad"}, "radius": null, "line_dash": [], "line_cap": "butt", "radius_dimension": "x", "size": {"value": 20, "units": "screen"}, "y": {"field": "y"}, "name": null, "fill_alpha": {"value": 1.0}, "tags": [], "line_join": "miter", "x": {"field": "x"}, "fill_color": {"value": "#1f77b4"}, "visible": true, "line_dash_offset": 0, "line_width": {"value": 1}}}, {"type": "DataRange1d", "id": "64057d3b-e8ff-4672-886b-5e2dbf1a8845", "attributes": {"name": null, "range_padding": 0.1, "names": [], "renderers": [], "tags": [], "end": null, "callback": null, "start": null}}, {"type": "BasicTicker", "id": "c594e9d6-ee81-4c94-a600-59ab9c750a65", "attributes": {"desired_num_ticks": 6, "name": null, "mantissas": [1, 2, 5], "tags": [], "base": 10.0, "min_interval": 0.0, "num_minor_ticks": 5, "max_interval": null}}, {"type": "BasicTicker", "id": "1cad3200-ba32-4744-abd6-58ef2dabe30f", "attributes": {"desired_num_ticks": 6, "name": null, "mantissas": [1, 2, 5], "tags": [], "base": 10.0, "min_interval": 0.0, "num_minor_ticks": 5, "max_interval": null}}, {"type": "Grid", "id": "828dce32-e247-41f7-8aa4-87de5a598dfc", "attributes": {"x_range_name": "default", "grid_line_color": {"value": "#cccccc"}, "grid_line_dash": [], "minor_grid_line_dash": [], "ticker": {"type": "BasicTicker", "id": "1cad3200-ba32-4744-abd6-58ef2dabe30f"}, "minor_grid_line_color": {"value": null}, "name": null, "minor_grid_line_dash_offset": 0, "plot": {"type": "Plot", "subtype": "Figure", "id": "11d002fa-e46b-4494-a16b-242a7b5c6bad"}, "minor_grid_line_cap": "butt", "minor_grid_line_width": {"value": 1}, "grid_line_join": "miter", "level": "underlay", "band_fill_color": {"value": null}, "bounds": "auto", "grid_line_alpha": {"value": 1.0}, "minor_grid_line_join": "miter", "tags": [], "band_fill_alpha": {"value": 0}, "grid_line_width": {"value": 1}, "grid_line_dash_offset": 0, "y_range_name": "default", "minor_grid_line_alpha": {"value": 1.0}, "dimension": 1, "grid_line_cap": "butt"}}, {"type": "BasicTickFormatter", "id": "24310249-ef97-4399-83d4-57f8efec09fe", "attributes": {"name": null, "use_scientific": true, "tags": [], "power_limit_low": -3, "precision": "auto", "power_limit_high": 5}}, {"type": "GlyphRenderer", "id": "7799cc68-0b92-4ba9-9997-a73a05c45722", "attributes": {"name": null, "x_range_name": "default", "tags": [], "y_range_name": "default", "hover_glyph": null, "glyph": {"type": "Circle", "id": "2941cba8-2a18-4eb4-9ba9-a0e21d9f7f48"}, "level": "glyph", "selection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "bd70c8c1-b8b4-4462-a87d-5b9ce95d0cee"}, "nonselection_glyph": {"type": "Circle", "id": "0110b1e3-a69f-4763-ac60-a7e3f392df9a"}}}, {"type": "LinearAxis", "id": "4139fcfd-cdb8-4c17-b1b2-2a169591516a", "attributes": {"axis_line_width": {"value": 1}, "minor_tick_in": 0, "major_tick_line_dash": [], "major_tick_line_alpha": {"value": 1.0}, "axis_label_text_font_style": "normal", "tags": [], "location": "auto", "major_label_text_align": "center", "minor_tick_line_width": {"value": 1}, "major_tick_line_dash_offset": 0, "major_tick_line_color": {"value": "black"}, "minor_tick_line_alpha": {"value": 1.0}, "axis_line_join": "miter", "y_range_name": "default", "major_label_orientation": "horizontal", "axis_line_alpha": {"value": 1.0}, "axis_label_text_color": {"value": "#444444"}, "axis_label_text_baseline": "alphabetic", "axis_line_color": {"value": "black"}, "major_label_text_font": "helvetica", "minor_tick_out": 4, "x_range_name": "default", "major_label_text_baseline": "alphabetic", "major_tick_in": 2, "major_label_text_font_style": "normal", "formatter": {"type": "BasicTickFormatter", "id": "24310249-ef97-4399-83d4-57f8efec09fe"}, "axis_label_text_align": "center", "ticker": {"type": "BasicTicker", "id": "1cad3200-ba32-4744-abd6-58ef2dabe30f"}, "major_label_standoff": 5, "name": null, "major_tick_line_cap": "butt", "minor_tick_line_cap": "butt", "minor_tick_line_join": "miter", "minor_tick_line_dash": [], "visible": true, "major_label_text_alpha": {"value": 1.0}, "axis_line_cap": "butt", "level": "overlay", "major_tick_out": 6, "axis_line_dash": [], "axis_label": "", "major_tick_line_width": {"value": 1}, "major_label_text_font_size": {"value": "10pt"}, "bounds": "auto", "axis_label_text_alpha": {"value": 1.0}, "major_tick_line_join": "miter", "axis_line_dash_offset": 0, "axis_label_text_font": "helvetica", "axis_label_text_font_size": {"value": "16pt"}, "minor_tick_line_dash_offset": 0, "major_label_text_color": {"value": "#444444"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "11d002fa-e46b-4494-a16b-242a7b5c6bad"}, "axis_label_standoff": 5, "minor_tick_line_color": {"value": "black"}}}, {"type": "Circle", "id": "0110b1e3-a69f-4763-ac60-a7e3f392df9a", "attributes": {"line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "angle": {"value": 0.0, "units": "rad"}, "radius": null, "line_dash": [], "line_cap": "butt", "radius_dimension": "x", "size": {"value": 20, "units": "screen"}, "y": {"field": "y"}, "name": null, "fill_alpha": {"value": 0.1}, "tags": [], "line_join": "miter", "x": {"field": "x"}, "fill_color": {"value": "#1f77b4"}, "visible": true, "line_dash_offset": 0, "line_width": {"value": 1}}}, {"type": "BasicTickFormatter", "id": "6775830c-1d0c-435d-bd66-ff677bc708e2", "attributes": {"name": null, "use_scientific": true, "tags": [], "power_limit_low": -3, "precision": "auto", "power_limit_high": 5}}, {"type": "ToolEvents", "id": "95eac901-29a8-41ae-88b3-c2d34179e911", "attributes": {"name": null, "tags": [], "geometries": []}}, {"type": "HoverTool", "id": "fd4931a1-8f04-47cf-af4f-13f664d63734", "attributes": {"name": null, "point_policy": "snap_to_data", "tags": [], "line_policy": "prev", "renderers": [], "plot": {"type": "Plot", "subtype": "Figure", "id": "11d002fa-e46b-4494-a16b-242a7b5c6bad"}, "names": [], "mode": "mouse", "tooltips": "\n        <div>\n            <div>\n                <img\n                    src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                    style=\"float: left; margin: 0px 15px 15px 0px;\"\n                    border=\"2\"\n                ></img>\n            </div>\n            <div>\n                <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n                <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n            </div>\n            <div>\n                <span style=\"font-size: 15px;\">Location</span>\n                <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n            </div>\n        </div>\n        ", "callback": null, "always_active": true}}, {"type": "Grid", "id": "2254e766-5e7c-46db-b89c-c67a81ebb851", "attributes": {"x_range_name": "default", "grid_line_color": {"value": "#cccccc"}, "grid_line_dash": [], "minor_grid_line_dash": [], "ticker": {"type": "BasicTicker", "id": "c594e9d6-ee81-4c94-a600-59ab9c750a65"}, "minor_grid_line_color": {"value": null}, "name": null, "minor_grid_line_dash_offset": 0, "plot": {"type": "Plot", "subtype": "Figure", "id": "11d002fa-e46b-4494-a16b-242a7b5c6bad"}, "minor_grid_line_cap": "butt", "minor_grid_line_width": {"value": 1}, "grid_line_join": "miter", "level": "underlay", "band_fill_color": {"value": null}, "bounds": "auto", "grid_line_alpha": {"value": 1.0}, "minor_grid_line_join": "miter", "tags": [], "band_fill_alpha": {"value": 0}, "grid_line_width": {"value": 1}, "grid_line_dash_offset": 0, "y_range_name": "default", "minor_grid_line_alpha": {"value": 1.0}, "dimension": 0, "grid_line_cap": "butt"}}, {"type": "DataRange1d", "id": "645edbbf-59b0-411e-a3fe-12e5f2473d42", "attributes": {"name": null, "range_padding": 0.1, "names": [], "renderers": [], "tags": [], "end": null, "callback": null, "start": null}}], "root_ids": ["11d002fa-e46b-4494-a16b-242a7b5c6bad"]}, "title": "Bokeh Application", "version": "0.10.0dev1"}};

  var render_items = [{ 'elementid' : "890c3d12-81e7-4e24-b8d8-9f089bc13b4c",
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