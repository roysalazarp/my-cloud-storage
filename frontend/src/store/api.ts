import { createAction } from "@reduxjs/toolkit";
import { DocumentNode } from '@apollo/client';

export interface ApiCallPayload {
  gqlDocument: DocumentNode,
  variables?: any
  reducerToCallOnSuccess?: string,
  reducerToCallOnError?: string
}

export const apiCall = createAction<ApiCallPayload>("api/apiCall")
