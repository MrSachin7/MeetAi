import { createLoader, parseAsInteger, parseAsString } from "nuqs/server";

import { DEAFULT_PAGE } from "@/constants";

export const filtersSearchParams = {
  search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  page: parseAsInteger
    .withDefault(DEAFULT_PAGE)
    .withOptions({ clearOnDefault: true }),
};

export const loadSeachParams = createLoader(filtersSearchParams);
