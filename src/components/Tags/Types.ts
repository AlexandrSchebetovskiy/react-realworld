export interface TagsResponse {
  tags: string[]
}
export interface TagsState {
  tags: string[]
  isLoading: boolean
  error: any
}