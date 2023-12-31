/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRelation, Merge } from "../core/ModelUtils"

import type { ExtendedStoreDTO } from "./ExtendedStoreDTO"

export interface AdminExtendedStoresRes {
  /**
   * Store details.
   */
  store: SetRelation<ExtendedStoreDTO, "currencies" | "default_currency">
}
