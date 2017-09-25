//@flow

import type { imgAction } from "features/uploadButtonDisplay/UploadResetActions"

export const acceptImages = (accepted: Array<Object>): imgAction => {
  return {
    type: "DROP_IMAGES",
    payload: accepted,
  }
}
