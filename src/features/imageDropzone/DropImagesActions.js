//@flow

//Drop Images action creator that will then be dispatched when users drop images in Dropimage zone

import type { imgAction } from "features/uploadButtonDisplay/UploadResetActions"

export const acceptImages = (accepted: Array<Object>): imgAction => {
  return {
    type: "DROP_IMAGES",
    payload: accepted,
  }
}
