/**
 * API Response Type Definitions
 * 
 * Defines utility types for API responses, error handling,
 * and data fetching throughout the application.
 */

/**
 * Generic API response wrapper
 * 
 * Standardized response format for all API endpoints.
 */
export interface ApiResponse<T = unknown> {
  /** Whether the request was successful */
  success: boolean;
  
  /** Response data (if successful) */
  data?: T;
  
  /** Error message (if unsuccessful) */
  error?: string;
  
  /** Detailed error information */
  errors?: ApiError[];
  
  /** Response metadata */
  meta?: ApiResponseMeta;
}

/**
 * API error details
 */
export interface ApiError {
  /** Error code */
  code: string;
  
  /** Human-readable error message */
  message: string;
  
  /** Field name (for validation errors) */
  field?: string;
  
  /** Additional error details */
  details?: Record<string, unknown>;
}

/**
 * API response metadata
 */
export interface ApiResponseMeta {
  /** Request timestamp */
  timestamp: string;
  
  /** Request ID for tracking */
  requestId?: string;
  
  /** API version */
  version?: string;
  
  /** Pagination info (if applicable) */
  pagination?: PaginationMeta;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  /** Current page number */
  currentPage: number;
  
  /** Total number of pages */
  totalPages: number;
  
  /** Items per page */
  pageSize: number;
  
  /** Total number of items */
  totalItems: number;
  
  /** Whether there is a next page */
  hasNextPage: boolean;
  
  /** Whether there is a previous page */
  hasPreviousPage: boolean;
}

/**
 * Paginated API response
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  /** Pagination metadata */
  meta: ApiResponseMeta & {
    pagination: PaginationMeta;
  };
}

/**
 * API request status
 */
export type ApiRequestStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * API request state for UI components
 */
export interface ApiRequestState<T = unknown> {
  /** Current request status */
  status: ApiRequestStatus;
  
  /** Response data (if successful) */
  data?: T;
  
  /** Error message (if failed) */
  error?: string;
  
  /** Whether the request is currently loading */
  isLoading: boolean;
  
  /** Whether the request was successful */
  isSuccess: boolean;
  
  /** Whether the request failed */
  isError: boolean;
}

/**
 * Content Management System (CMS) response types
 */

/**
 * CMS entry metadata
 */
export interface CMSEntryMeta {
  /** Entry ID in the CMS */
  id: string;
  
  /** Created timestamp */
  createdAt: Date;
  
  /** Last updated timestamp */
  updatedAt: Date;
  
  /** Content version */
  version?: number;
  
  /** Published status */
  published: boolean;
}

/**
 * CMS collection response
 */
export interface CMSCollectionResponse<T> {
  /** Collection items */
  items: T[];
  
  /** Total number of items */
  total: number;
  
  /** Number of items skipped */
  skip: number;
  
  /** Number of items returned */
  limit: number;
}

/**
 * Search query parameters
 */
export interface SearchParams {
  /** Search query string */
  query: string;
  
  /** Fields to search in */
  fields?: string[];
  
  /** Maximum number of results */
  limit?: number;
  
  /** Number of results to skip */
  skip?: number;
  
  /** Sort field and direction */
  sort?: {
    field: string;
    direction: 'asc' | 'desc';
  };
}

/**
 * Filter parameters for data queries
 */
export interface FilterParams {
  /** Category filter */
  category?: string;
  
  /** Tags filter */
  tags?: string[];
  
  /** Date range filter */
  dateRange?: {
    start: Date;
    end: Date;
  };
  
  /** Featured items only */
  featured?: boolean;
  
  /** Published items only */
  published?: boolean;
}

/**
 * Sort options
 */
export type SortOption = 
  | 'date-desc'
  | 'date-asc'
  | 'title-asc'
  | 'title-desc'
  | 'featured';

/**
 * Query parameters for content fetching
 */
export interface ContentQueryParams {
  /** Filter parameters */
  filter?: FilterParams;
  
  /** Sort option */
  sort?: SortOption;
  
  /** Pagination */
  page?: number;
  
  /** Items per page */
  limit?: number;
  
  /** Search query */
  search?: string;
}
