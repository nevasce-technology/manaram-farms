export const COL_DURATION = 1.05;
export const COL_STAGGER = 0.09;
export const COLUMN_COUNT = 5;
export const LIFT_TOTAL_DURATION = (COLUMN_COUNT - 1) * COL_STAGGER + COL_DURATION;

export const REVEAL_SCALE_START = 0.72;

/** Start credential rail content while hero zoom is still running. */
export const RAIL_CONTENT_REVEAL_DELAY = LIFT_TOTAL_DURATION * 0.32;
