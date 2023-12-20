import * as stylex from "@stylexjs/stylex";

export const utilitis = stylex.create({
  link: {
    textDecoration: {
      default: "none",
      ":hover": "underline",
      ":focus": "underline",
      ":active": "underline",
    },
    fontWeight: "bold",
    color: "inherit",
  },

  aspect_1: { aspectRatio: 1 },
  aspect_16_9: { aspectRatio: 16 / 9 },
  aspect_21_9: { aspectRatio: 21 / 9 },
  aspect_3_4: { aspectRatio: 3 / 4 },
  aspect_4_3: { aspectRatio: 4 / 3 },
  aspect_9_16: { aspectRatio: 9 / 16 },
  aspect_auto: { aspectRatio: "auto" },

  visible: { visibility: "visible" },
  invisible: { visibility: "hidden" },
  collapse: { visibility: "collapse" },

  static: { position: "static" },
  fixed: { position: "fixed" },
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  sticky: { position: "sticky" },

  inset_0: { inset: 0 },
  inset_6: { inset: "1.5rem" },
  inset_px: { insetInline: 1 },
  inset_py: { insetBlock: 1 },

  bottom_0: { bottom: 0 },
  bottom_1: { bottom: 1 },
  bottom_full: { bottom: "100%" },

  left_0: { insetInlineStart: 0 },
  left_1: { insetInlineStart: 1 },
  left_full: { insetInlineStart: "100%" },

  right_0: { insetInlineEnd: 0 },
  right_1: { insetInlineEnd: 1 },
  right_full: { insetInlineEnd: "100%" },

  top_0: { top: 0 },
  top_1: { top: 1 },
  top_full: { top: "100%" },

  isolate: { isolation: "isolate" },

  z_minus10: { zIndex: -10 },
  z_minus1: { zIndex: -1 },
  z_0: { zIndex: 0 },
  z_1: { zIndex: 1 },
  z_10: { zIndex: 10 },
  z_20: { zIndex: 20 },
  z_30: { zIndex: 30 },
  z_40: { zIndex: 40 },
  z_50: { zIndex: 50 },

  order_1: { order: 1 },
  order_2: { order: 2 },
  order_3: { order: 3 },
  order_4: { order: 4 },
  order_first: { order: -9999 },
  order_last: { order: 9999 },
  order_none: { order: 0 },

  col_span_1: { gridColumn: "span 1 / span 1" },
  col_span_2: { gridColumn: "span 2 / span 2" },
  col_span_3: { gridColumn: "span 3 / span 3" },
  col_span_4: { gridColumn: "span 4 / span 4" },
  col_span_5: { gridColumn: "span 5 / span 5" },
  col_span_6: { gridColumn: "span 6 / span 6" },
  col_span_7: { gridColumn: "span 7 / span 7" },
  col_span_full: { gridColumn: "1 / -1" },

  col_start_1: { gridColumnStart: "1" },
  col_start_2: { gridColumnStart: "2" },
  col_start_3: { gridColumnStart: "3" },
  col_start_4: { gridColumnStart: "4" },
  col_start_5: { gridColumnStart: "5" },
  col_start_6: { gridColumnStart: "6" },

  col_end_1: { gridColumnEnd: "1" },
  col_end_2: { gridColumnEnd: "2" },
  col_end_3: { gridColumnEnd: "3" },
  col_end_4: { gridColumnEnd: "4" },
  col_end_5: { gridColumnEnd: "5" },
  col_end_6: { gridColumnEnd: "6" },

  row_span_1: { gridRow: "span 1 / span 1" },
  row_span_2: { gridRow: "span 2 / span 2" },
  row_span_3: { gridRow: "span 3 / span 3" },
  row_span_4: { gridRow: "span 4 / span 4" },
  row_span_5: { gridRow: "span 5 / span 5" },
  row_span_6: { gridRow: "span 6 / span 6" },
  row_span_full: { gridRow: "1 / -1" },

  row_start_1: { gridRowStart: "1" },
  row_start_2: { gridRowStart: "2" },
  row_start_3: { gridRowStart: "3" },
  row_start_4: { gridRowStart: "4" },
  row_start_5: { gridRowStart: "5" },
  row_start_6: { gridRowStart: "6" },

  row_end_1: { gridRowEnd: "1" },
  row_end_2: { gridRowEnd: "2" },
  row_end_3: { gridRowEnd: "3" },
  row_end_4: { gridRowEnd: "4" },
  row_end_5: { gridRowEnd: "5" },
  row_end_6: { gridRowEnd: "6" },

  float_right: { float: "right" },
  float_left: { float: "left" },
  float_none: { float: "none" },

  clear_left: { clear: "left" },
  clear_right: { clear: "right" },
  clear_both: { clear: "both" },
  clear_none: { clear: "none" },

  m_0: { margin: 0 },
  m_1: { margin: 1 },
  m_2: { margin: 2 },
  m_4: { margin: 4 },
  m_8: { margin: 8 },
  m_12: { margin: 12 },
  m_16: { margin: 16 },
  m_20: { margin: 20 },
  m_24: { margin: 24 },

  mx_0: { marginInline: 0 },
  mx_1: { marginInline: 1 },
  mx_2: { marginInline: 2 },
  mx_4: { marginInline: 4 },
  mx_8: { marginInline: 8 },
  mx_12: { marginInline: 12 },
  mx_16: { marginInline: 16 },
  mx_20: { marginInline: 20 },
  mx_24: { marginInline: 24 },

  my_0: { marginBlock: 0 },
  my_1: { marginBlock: 1 },
  my_2: { marginBlock: 2 },
  my_4: { marginBlock: 4 },
  my_8: { marginBlock: 8 },
  my_12: { marginBlock: 12 },
  my_16: { marginBlock: 16 },
  my_20: { marginBlock: 20 },
  my_24: { marginBlock: 24 },

  mt_0: { marginTop: 0 },
  mt_1: { marginTop: 1 },
  mt_2: { marginTop: 2 },
  mt_4: { marginTop: 4 },
  mt_8: { marginTop: 8 },
  mt_12: { marginTop: 12 },
  mt_16: { marginTop: 16 },
  mt_20: { marginTop: 20 },
  mt_24: { marginTop: 24 },

  mr_0: { marginInlineEnd: 0 },
  mr_1: { marginInlineEnd: 1 },
  mr_2: { marginInlineEnd: 2 },
  mr_4: { marginInlineEnd: 4 },
  mr_8: { marginInlineEnd: 8 },
  mr_12: { marginInlineEnd: 12 },
  mr_16: { marginInlineEnd: 16 },
  mr_20: { marginInlineEnd: 20 },
  mr_24: { marginInlineEnd: 24 },

  mb_0: { marginBlockEnd: 0 },
  mb_1: { marginBlockEnd: 1 },
  mb_2: { marginBlockEnd: 2 },
  mb_4: { marginBlockEnd: 4 },
  mb_8: { marginBlockEnd: 8 },
  mb_12: { marginBlockEnd: 12 },
  mb_16: { marginBlockEnd: 16 },
  mb_20: { marginBlockEnd: 20 },
  mb_24: { marginBlockEnd: 24 },

  ml_0: { marginInlineStart: 0 },
  ml_1: { marginInlineStart: 1 },
  ml_2: { marginInlineStart: 2 },
  ml_4: { marginInlineStart: 4 },
  ml_8: { marginInlineStart: 8 },
  ml_12: { marginInlineStart: 12 },
  ml_16: { marginInlineStart: 16 },
  ml_20: { marginInlineStart: 20 },
  ml_24: { marginInlineStart: 24 },

  p_0: { padding: 0 },
  p_1: { padding: 1 },
  p_2: { padding: 2 },
  p_4: { padding: 4 },
  p_8: { padding: 8 },
  p_12: { padding: 12 },
  p_16: { padding: 16 },
  p_20: { padding: 20 },
  p_24: { padding: 24 },

  px_0: { paddingInline: 0 },
  px_1: { paddingInline: 1 },
  px_2: { paddingInline: 2 },
  px_4: { paddingInline: 4 },
  px_8: { paddingInline: 8 },
  px_12: { paddingInline: 12 },
  px_16: { paddingInline: 16 },
  px_20: { paddingInline: 20 },
  px_24: { paddingInline: 24 },

  py_0: { paddingBlock: 0 },
  py_1: { paddingBlock: 1 },
  py_2: { paddingBlock: 2 },
  py_4: { paddingBlock: 4 },
  py_8: { paddingBlock: 8 },
  py_12: { paddingBlock: 12 },
  py_16: { paddingBlock: 16 },
  py_20: { paddingBlock: 20 },
  py_24: { paddingBlock: 24 },

  pt_0: { paddingTop: 0 },
  pt_1: { paddingTop: 1 },
  pt_2: { paddingTop: 2 },
  pt_4: { paddingTop: 4 },
  pt_8: { paddingTop: 8 },
  pt_12: { paddingTop: 12 },
  pt_16: { paddingTop: 16 },
  pt_20: { paddingTop: 20 },
  pt_24: { paddingTop: 24 },

  pr_0: { paddingInlineEnd: 0 },
  pr_1: { paddingInlineEnd: 1 },
  pr_2: { paddingInlineEnd: 2 },
  pr_4: { paddingInlineEnd: 4 },
  pr_8: { paddingInlineEnd: 8 },
  pr_12: { paddingInlineEnd: 12 },
  pr_16: { paddingInlineEnd: 16 },
  pr_20: { paddingInlineEnd: 20 },
  pr_24: { paddingInlineEnd: 24 },

  pb_0: { paddingBlockEnd: 0 },
  pb_1: { paddingBlockEnd: 1 },
  pb_2: { paddingBlockEnd: 2 },
  pb_4: { paddingBlockEnd: 4 },
  pb_8: { paddingBlockEnd: 8 },
  pb_12: { paddingBlockEnd: 12 },
  pb_16: { paddingBlockEnd: 16 },
  pb_20: { paddingBlockEnd: 20 },
  pb_24: { paddingBlockEnd: 24 },

  pl_0: { paddingInlineStart: 0 },
  pl_1: { paddingInlineStart: 1 },
  pl_2: { paddingInlineStart: 2 },
  pl_4: { paddingInlineStart: 4 },
  pl_8: { paddingInlineStart: 8 },
  pl_12: { paddingInlineStart: 12 },
  pl_16: { paddingInlineStart: 16 },
  pl_20: { paddingInlineStart: 20 },
  pl_24: { paddingInlineStart: 24 },

  box_border: { boxSizing: "border-box" },
  box_content: { boxSizing: "content-box" },

  /* eslint-disable @stylexjs/valid-styles */
  line_clamp_1: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
  },

  line_clamp_2: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  },

  line_clamp_3: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
  },

  line_clamp_4: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 4,
  },

  line_clamp_none: {
    overflow: null,
    display: null,
    WebkitBoxOrient: null,
    WebkitLineClamp: null,
  },

  /* eslint-enable @stylexjs/valid-styles */

  block: { display: "block" },
  inline_block: { display: "inline-block" },
  inline: { display: "inline" },
  flex: { display: "flex" },
  inline_flex: { display: "inline-flex" },
  grid: { display: "grid" },
  inline_grid: { display: "inline-grid" },
  table: { display: "table" },
  // eslint-disable-next-line @stylexjs/valid-styles
  table_caption: { display: "table-caption" },
  table_cell: { display: "table-cell" },
  table_column: { display: "table-column" },
  table_column_group: { display: "table-column-group" },
  table_footer_group: { display: "table-footer-group" },
  table_header_group: { display: "table-header-group" },
  table_row_group: { display: "table-row-group" },
  table_row: { display: "table-row" },
  // eslint-disable-next-line @stylexjs/valid-styles
  flow_root: { display: "flow-root" },
  contents: { display: "contents" },
  hidden: { display: "none" },

  h_0: { height: 0 },
  h_1: { height: "0.25rem" },
  h_2: { height: "0.5rem" },
  h_half: { height: "50%" },
  h_full: { height: "100%" },
  h_20: { height: "5rem" },
  h_24: { height: "6rem" },
  h_28: { height: "7rem" },
  h_32: { height: "8rem" },
  h_36: { height: "9rem" },
  h_40: { height: "10rem" },
  h_44: { height: "11rem" },
  h_48: { height: "12rem" },
  h_52: { height: "13rem" },
  h_56: { height: "14rem" },
  h_60: { height: "15rem" },

  max_h_0: { maxHeight: 0 },
  max_h_1: { maxHeight: "0.25rem" },
  max_h_2: { maxHeight: "0.5rem" },
  max_h_half: { maxHeight: "50%" },
  max_h_full: { maxHeight: "100%" },
  max_h_20: { maxHeight: "5rem" },
  max_h_24: { maxHeight: "6rem" },
  max_h_28: { maxHeight: "7rem" },
  max_h_32: { maxHeight: "8rem" },
  max_h_36: { maxHeight: "9rem" },
  max_h_40: { maxHeight: "10rem" },
  max_h_44: { maxHeight: "11rem" },
  max_h_48: { maxHeight: "12rem" },
  max_h_52: { maxHeight: "13rem" },
  max_h_56: { maxHeight: "14rem" },
  max_h_60: { maxHeight: "15rem" },

  min_h_0: { minHeight: 0 },
  min_h_1: { minHeight: "0.25rem" },
  min_h_2: { minHeight: "0.5rem" },
  min_h_half: { minHeight: "50%" },
  min_h_full: { minHeight: "100%" },
  min_h_20: { minHeight: "5rem" },
  min_h_24: { minHeight: "6rem" },
  min_h_28: { minHeight: "7rem" },
  min_h_32: { minHeight: "8rem" },
  min_h_36: { minHeight: "9rem" },
  min_h_40: { minHeight: "10rem" },
  min_h_44: { minHeight: "11rem" },
  min_h_48: { minHeight: "12rem" },
  min_h_52: { minHeight: "13rem" },
  min_h_56: { minHeight: "14rem" },
  min_h_60: { minHeight: "15rem" },

  w_0: { width: 0 },
  w_1: { width: "0.25rem" },
  w_2: { width: "0.5rem" },
  w_half: { width: "50%" },
  w_full: { width: "100%" },
  w_20: { width: "5rem" },
  w_24: { width: "6rem" },
  w_28: { width: "7rem" },
  w_32: { width: "8rem" },
  w_36: { width: "9rem" },
  w_40: { width: "10rem" },
  w_44: { width: "11rem" },
  w_48: { width: "12rem" },
  w_52: { width: "13rem" },
  w_56: { width: "14rem" },
  w_60: { width: "15rem" },

  max_w_0: { maxWidth: 0 },
  max_w_1: { maxWidth: "0.25rem" },
  max_w_2: { maxWidth: "0.5rem" },
  max_w_half: { maxWidth: "50%" },
  max_w_full: { maxWidth: "100%" },
  max_w_20: { maxWidth: "5rem" },
  max_w_24: { maxWidth: "6rem" },
  max_w_28: { maxWidth: "7rem" },
  max_w_32: { maxWidth: "8rem" },
  max_w_36: { maxWidth: "9rem" },
  max_w_40: { maxWidth: "10rem" },
  max_w_44: { maxWidth: "11rem" },
  max_w_48: { maxWidth: "12rem" },
  max_w_52: { maxWidth: "13rem" },
  max_w_56: { maxWidth: "14rem" },
  max_w_60: { maxWidth: "15rem" },

  min_w_0: { minWidth: 0 },
  min_w_1: { minWidth: "0.25rem" },
  min_w_2: { minWidth: "0.5rem" },
  min_w_half: { minWidth: "50%" },
  min_w_full: { minWidth: "100%" },
  min_w_20: { minWidth: "5rem" },
  min_w_24: { minWidth: "6rem" },
  min_w_28: { minWidth: "7rem" },
  min_w_32: { minWidth: "8rem" },
  min_w_36: { minWidth: "9rem" },
  min_w_40: { minWidth: "10rem" },
  min_w_44: { minWidth: "11rem" },
  min_w_48: { minWidth: "12rem" },
  min_w_52: { minWidth: "13rem" },
  min_w_56: { minWidth: "14rem" },
  min_w_60: { minWidth: "15rem" },

  flex_row: { flexDirection: "row" },
  flex_row_reverse: { flexDirection: "row-reverse" },
  flex_col: { flexDirection: "column" },
  flex_col_reverse: { flexDirection: "column-reverse" },

  flex_wrap: { flexWrap: "wrap" },

  items_start: { alignItems: "flex-start" },
  items_end: { alignItems: "flex-end" },
  items_center: { alignItems: "center" },
  items_baseline: { alignItems: "baseline" },
  items_stretch: { alignItems: "stretch" },

  justify_start: { justifyContent: "flex-start" },
  justify_end: { justifyContent: "flex-end" },
  justify_center: { justifyContent: "center" },
  justify_between: { justifyContent: "space-between" },
  justify_around: { justifyContent: "space-around" },
  justify_evenly: { justifyContent: "space-evenly" },

  flex_1: { flexGrow: 1, flexShrink: 1, flexBasis: 0 },
  flex_auto: { flexGrow: 1, flexShrink: 1, flexBasis: "auto" },
  flex_initial: { flexGrow: 0, flexShrink: 1, flexBasis: "auto" },
  flex_none: { flexGrow: null, flexShrink: null, flexBasis: null },

  shrink_0: { flexShrink: 0 },
  shrink: { flexShrink: 1 },
  shrink_2: { flexShrink: 2 },

  grow_0: { flexGrow: 0 },
  grow: { flexGrow: 1 },
  grow_2: { flexGrow: 2 },

  basis_0: { flexBasis: 0 },
  basis_auto: { flexBasis: "auto" },
  basis_full: { flexBasis: "100%" },
  basis_fourth: { flexBasis: "0.25rem" },
  basis_half: { flexBasis: "50%" },
  basis_third: { flexBasis: "0.333333%" },
  basis_two_thirds: { flexBasis: "0.666667%" },

  origin_bottom: { transformOrigin: "bottom" },
  origin_bottom_left: { transformOrigin: "bottom left" },
  origin_bottom_right: { transformOrigin: "bottom right" },
  origin_center: { transformOrigin: "center" },
  origin_center_x: { transformOrigin: "center left" },
  origin_center_y: { transformOrigin: "top center" },
  origin_left: { transformOrigin: "left" },
  origin_right: { transformOrigin: "right" },
  origin_top: { transformOrigin: "top" },
  origin_top_left: { transformOrigin: "top left" },
  origin_top_right: { transformOrigin: "top right" },

  cursor_auto: { cursor: "auto" },
  cursor_default: { cursor: "default" },
  cursor_ew_resize: { cursor: "ew-resize" },
  cursor_none: { cursor: "none" },
  cursor_not_allowed: { cursor: "not-allowed" },
  cursor_pointer: { cursor: "pointer" },
  cursor_progress: { cursor: "progress" },
  cursor_zoom_in: { cursor: "zoom-in" },
  cursor_zoom_out: { cursor: "zoom-out" },
  cursor_grab: { cursor: "grab" },
  cursor_grabbing: { cursor: "grabbing" },
  cursor_help: { cursor: "help" },
  cursor_move: { cursor: "move" },
  cursor_text: { cursor: "text" },
  cursor_wait: { cursor: "wait" },

  touch_auto: { touchAction: "auto" },
  touch_none: { touchAction: "none" },
  touch_pan_x: { touchAction: "pan-x" },
  touch_manipulation: { touchAction: "manipulation" },

  resize_none: { resize: "none" },
  resize_y: { resize: "vertical" },
  resize_x: { resize: "horizontal" },

  snap_x: { scrollSnapType: "x mandatory" },
  // eslint-disable-next-line @stylexjs/valid-styles
  snap_x_proximity: { scrollSnapType: "x proximity" },

  snap_start: { scrollSnapAlign: "start" },
  snap_end: { scrollSnapAlign: "end" },
  snap_center: { scrollSnapAlign: "center" },
  // eslint-disable-next-line @stylexjs/valid-styles
  snap_normal: { scrollSnapStop: "normal" },
  // eslint-disable-next-line @stylexjs/valid-styles
  snap_always: { scrollSnapStop: "always" },

  list_inside: { listStylePosition: "inside" },
  list_outside: { listStylePosition: "outside" },
  list_upper_roman: { listStyleType: "upper-roman" },
  list_decimal: { listStyleType: "decimal" },
  list_disc: { listStyleType: "disc" },
  list_none: { listStyleType: "none" },

  font_size_4rem: { fontSize: "4rem" },
  font_size_3rem: { fontSize: "3rem" },
  font_size_2rem: { fontSize: "2rem" },
  font_size_1rem: { fontSize: "1rem" },

  // NOTE: Allow font weight to be strings as well.
  thin: { fontWeight: 100 },
  extralight: { fontWeight: 200 },
  light: { fontWeight: 300 },
  normal: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semibold: { fontWeight: 600 },
  bold: { fontWeight: 700 },
  extrabold: { fontWeight: 800 },
  black: { fontWeight: 900 },

  c_black: { color: "#000" },
  c_white: { color: "#fff" },
  c_gray_100: { color: "#f7fafc" },
  c_gray_200: { color: "#edf2f7" },
  c_gray_300: { color: "#e2e8f0" },
  c_gray_400: { color: "#cbd5e0" },
  c_gray_500: { color: "#a0aec0" },
  c_gray_600: { color: "#718096" },
  c_gray_700: { color: "#4a5568" },
  c_gray_800: { color: "#2d3748" },
  c_gray_900: { color: "#1a202c" },
  c_red_100: { color: "#fff5f5" },
  c_red_200: { color: "#fed7d7" },
  c_red_300: { color: "#feb2b2" },
  c_red_400: { color: "#fc8181" },
  c_red_500: { color: "#f56565" },
  c_red_600: { color: "#e53e3e" },
  c_red_700: { color: "#c53030" },
  c_red_800: { color: "#9b2c2c" },
  c_red_900: { color: "#742a2a" },
  c_orange_100: { color: "#fffaf0" },
  c_orange_200: { color: "#feebc8" },
  c_orange_300: { color: "#fbd38d" },
  c_orange_400: { color: "#f6ad55" },
  c_orange_500: { color: "#ed8936" },
  c_orange_600: { color: "#dd6b20" },
  c_orange_700: { color: "#c05621" },
  c_orange_800: { color: "#9c4221" },
  c_orange_900: { color: "#7b341e" },
  c_yellow_100: { color: "#fffff0" },
  c_yellow_200: { color: "#fefcbf" },
  c_yellow_300: { color: "#faf089" },
  c_yellow_400: { color: "#f6e05e" },
  c_yellow_500: { color: "#ecc94b" },
  c_yellow_600: { color: "#d69e2e" },
  c_yellow_700: { color: "#b7791f" },
  c_yellow_800: { color: "#975a16" },
  c_yellow_900: { color: "#744210" },
  c_green_100: { color: "#f0fff4" },
  c_green_200: { color: "#c6f6d5" },
  c_green_300: { color: "#9ae6b4" },
  c_green_400: { color: "#68d391" },
  c_green_500: { color: "#48bb78" },
  c_green_600: { color: "#38a169" },
  c_green_700: { color: "#2f855a" },
  c_green_800: { color: "#276749" },
  c_green_900: { color: "#22543d" },
  c_teal_100: { color: "#e6fffa" },
  c_teal_200: { color: "#b2f5ea" },
  c_teal_300: { color: "#81e6d9" },
  c_teal_400: { color: "#4fd1c5" },
  c_teal_500: { color: "#38b2ac" },
  c_teal_600: { color: "#319795" },
  c_teal_700: { color: "#2c7a7b" },
  c_teal_800: { color: "#285e61" },
  c_teal_900: { color: "#234e52" },
  c_blue_100: { color: "#ebf8ff" },
  c_blue_200: { color: "#bee3f8" },
  c_blue_300: { color: "#90cdf4" },
  c_blue_400: { color: "#63b3ed" },
  c_blue_500: { color: "#4299e1" },
  c_blue_600: { color: "#3182ce" },
  c_blue_700: { color: "#2b6cb0" },
  c_blue_800: { color: "#2c5282" },
  c_blue_900: { color: "#2a4365" },
  c_indigo_100: { color: "#ebf4ff" },
  c_indigo_200: { color: "#c3dafe" },
  c_indigo_300: { color: "#a3bffa" },
  c_indigo_400: { color: "#7f9cf5" },
  c_indigo_500: { color: "#667eea" },
  c_indigo_600: { color: "#5a67d8" },
  c_indigo_700: { color: "#4c51bf" },
  c_indigo_800: { color: "#434190" },
  c_indigo_900: { color: "#3c366b" },
  c_purple_100: { color: "#faf5ff" },
  c_purple_200: { color: "#e9d8fd" },
  c_purple_300: { color: "#d6bcfa" },
  c_purple_400: { color: "#b794f4" },
  c_purple_500: { color: "#9f7aea" },
  c_purple_600: { color: "#805ad5" },
  c_purple_700: { color: "#6b46c1" },
  c_purple_800: { color: "#553c9a" },
  c_purple_900: { color: "#44337a" },
  c_pink_100: { color: "#fff5f7" },
  c_pink_200: { color: "#fed7e2" },
  c_pink_300: { color: "#fbb6ce" },
  c_pink_400: { color: "#f687b3" },
  c_pink_500: { color: "#ed64a6" },
  c_pink_600: { color: "#d53f8c" },
  c_pink_700: { color: "#b83280" },
  c_pink_800: { color: "#97266d" },
  c_pink_900: { color: "#702459" },
});
