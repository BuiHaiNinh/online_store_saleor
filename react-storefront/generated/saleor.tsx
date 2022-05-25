// THIS FILE IS GENERATED WITH `npm run generate`
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  JSONString: any;
  /**
   * Metadata is a map of key-value pairs, both keys and values are `String`.
   *
   * Example:
   * ```
   * {
   *     "key1": "value1",
   *     "key2": "value2"
   * }
   * ```
   */
  Metadata: any;
  /**
   * Positive Decimal scalar implementation.
   *
   * Should be used in places where value must be positive.
   */
  PositiveDecimal: any;
  UUID: any;
  /** Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec. */
  Upload: any;
  WeightScalar: any;
  /** _Any value scalar as defined by Federation spec. */
  _Any: any;
};

/** Create a new address for the customer. Requires one of the following permissions: AUTHENTICATED_USER. */
export type AccountAddressCreate = {
  __typename?: 'AccountAddressCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was created. */
  user?: Maybe<User>;
};

/** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressDelete = {
  __typename?: 'AccountAddressDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>;
};

/** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressUpdate = {
  __typename?: 'AccountAddressUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user object for which the address was edited. */
  user?: Maybe<User>;
};

/** Remove user account. Requires one of the following permissions: AUTHENTICATED_USER. */
export type AccountDelete = {
  __typename?: 'AccountDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AccountError = {
  __typename?: 'AccountError';
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum AccountErrorCode {
  AccountNotConfirmed = 'ACCOUNT_NOT_CONFIRMED',
  ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
  ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
  ChannelInactive = 'CHANNEL_INACTIVE',
  DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
  DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
  DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
  DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
  DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidPassword = 'INVALID_PASSWORD',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
  NotFound = 'NOT_FOUND',
  OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
  PasswordTooCommon = 'PASSWORD_TOO_COMMON',
  PasswordTooShort = 'PASSWORD_TOO_SHORT',
  PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AccountInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']>;
};

/** Register a new user. */
export type AccountRegister = {
  __typename?: 'AccountRegister';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};

export type AccountRegisterInput = {
  /** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
  channel?: InputMaybe<Scalars['String']>;
  /** The email address of the user. */
  email: Scalars['String'];
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User public metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Password. */
  password: Scalars['String'];
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: InputMaybe<Scalars['String']>;
};

/** Sends an email with the account removal link for the logged-in user. Requires one of the following permissions: AUTHENTICATED_USER. */
export type AccountRequestDeletion = {
  __typename?: 'AccountRequestDeletion';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Sets a default address for the authenticated user. Requires one of the following permissions: AUTHENTICATED_USER. */
export type AccountSetDefaultAddress = {
  __typename?: 'AccountSetDefaultAddress';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/** Updates the account of the logged-in user. Requires one of the following permissions: AUTHENTICATED_USER. */
export type AccountUpdate = {
  __typename?: 'AccountUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

/** Represents user address data. */
export type Address = Node & {
  __typename?: 'Address';
  city: Scalars['String'];
  cityArea: Scalars['String'];
  companyName: Scalars['String'];
  /** Shop's default country. */
  country: CountryDisplay;
  countryArea: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  /** Address is user's default billing address. */
  isDefaultBillingAddress?: Maybe<Scalars['Boolean']>;
  /** Address is user's default shipping address. */
  isDefaultShippingAddress?: Maybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
};

/** Creates user address. Requires one of the following permissions: MANAGE_USERS. */
export type AddressCreate = {
  __typename?: 'AddressCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was created. */
  user?: Maybe<User>;
};

/** Deletes an address. Requires one of the following permissions: MANAGE_USERS. */
export type AddressDelete = {
  __typename?: 'AddressDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>;
};

export type AddressInput = {
  /** City. */
  city?: InputMaybe<Scalars['String']>;
  /** District. */
  cityArea?: InputMaybe<Scalars['String']>;
  /** Company or organization. */
  companyName?: InputMaybe<Scalars['String']>;
  /** Country. */
  country?: InputMaybe<CountryCode>;
  /** State or province. */
  countryArea?: InputMaybe<Scalars['String']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Phone number. */
  phone?: InputMaybe<Scalars['String']>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars['String']>;
  /** Address. */
  streetAddress1?: InputMaybe<Scalars['String']>;
  /** Address. */
  streetAddress2?: InputMaybe<Scalars['String']>;
};

/** Sets a default address for the given user. Requires one of the following permissions: MANAGE_USERS. */
export type AddressSetDefault = {
  __typename?: 'AddressSetDefault';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/** An enumeration. */
export enum AddressTypeEnum {
  Billing = 'BILLING',
  Shipping = 'SHIPPING'
}

/** Updates an address. Requires one of the following permissions: MANAGE_USERS. */
export type AddressUpdate = {
  __typename?: 'AddressUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user object for which the address was edited. */
  user?: Maybe<User>;
};

export type AddressValidationData = {
  __typename?: 'AddressValidationData';
  addressFormat: Scalars['String'];
  addressLatinFormat: Scalars['String'];
  allowedFields: Array<Scalars['String']>;
  cityAreaChoices: Array<ChoiceValue>;
  cityAreaType: Scalars['String'];
  cityChoices: Array<ChoiceValue>;
  cityType: Scalars['String'];
  countryAreaChoices: Array<ChoiceValue>;
  countryAreaType: Scalars['String'];
  countryCode: Scalars['String'];
  countryName: Scalars['String'];
  postalCodeExamples: Array<Scalars['String']>;
  postalCodeMatchers: Array<Scalars['String']>;
  postalCodePrefix: Scalars['String'];
  postalCodeType: Scalars['String'];
  requiredFields: Array<Scalars['String']>;
  upperFields: Array<Scalars['String']>;
};

/** Represents allocation. */
export type Allocation = Node & {
  __typename?: 'Allocation';
  id: Scalars['ID'];
  /** Quantity allocated for orders. Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS. */
  quantity: Scalars['Int'];
  /** The warehouse were items were allocated. Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS. */
  warehouse: Warehouse;
};

/** Represents app data. */
export type App = Node & ObjectWithMetadata & {
  __typename?: 'App';
  /** Description of this app. */
  aboutApp?: Maybe<Scalars['String']>;
  /** JWT token used to authenticate by thridparty app. */
  accessToken?: Maybe<Scalars['String']>;
  /** Url to iframe with the app. */
  appUrl?: Maybe<Scalars['String']>;
  /** Url to iframe with the configuration for the app. */
  configurationUrl?: Maybe<Scalars['String']>;
  /** The date and time when the app was created. */
  created?: Maybe<Scalars['DateTime']>;
  /** Description of the data privacy defined for this app. */
  dataPrivacy?: Maybe<Scalars['String']>;
  /** Url to details about the privacy policy on the app owner page. */
  dataPrivacyUrl?: Maybe<Scalars['String']>;
  /** Added in Saleor 3.1. App's dashboard extensions. Note: this feature is in a preview state and can be subject to changes at later point. */
  extensions: Array<AppExtension>;
  /** Homepage of the app. */
  homepageUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Determine if app will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** Name of the app. */
  name?: Maybe<Scalars['String']>;
  /** List of the app's permissions. */
  permissions?: Maybe<Array<Permission>>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** Support page for the app. */
  supportUrl?: Maybe<Scalars['String']>;
  /** Last 4 characters of the tokens. */
  tokens?: Maybe<Array<AppToken>>;
  /** Type of the app. */
  type?: Maybe<AppTypeEnum>;
  /** Version number of the app. */
  version?: Maybe<Scalars['String']>;
  /** List of webhooks assigned to this app. */
  webhooks?: Maybe<Array<Webhook>>;
};


/** Represents app data. */
export type AppMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents app data. */
export type AppMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents app data. */
export type AppPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents app data. */
export type AppPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Activate the app. Requires one of the following permissions: MANAGE_APPS. */
export type AppActivate = {
  __typename?: 'AppActivate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

export type AppCountableConnection = {
  __typename?: 'AppCountableConnection';
  edges: Array<AppCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type AppCountableEdge = {
  __typename?: 'AppCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: App;
};

/** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppCreate = {
  __typename?: 'AppCreate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']>;
  errors: Array<AppError>;
};

/** Deactivate the app. Requires one of the following permissions: MANAGE_APPS. */
export type AppDeactivate = {
  __typename?: 'AppDeactivate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/** Deletes an app. Requires one of the following permissions: MANAGE_APPS. */
export type AppDelete = {
  __typename?: 'AppDelete';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/** Delete failed installation. Requires one of the following permissions: MANAGE_APPS. */
export type AppDeleteFailedInstallation = {
  __typename?: 'AppDeleteFailedInstallation';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export type AppError = {
  __typename?: 'AppError';
  /** The error code. */
  code: AppErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
};

/** An enumeration. */
export enum AppErrorCode {
  Forbidden = 'FORBIDDEN',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidManifestFormat = 'INVALID_MANIFEST_FORMAT',
  InvalidPermission = 'INVALID_PERMISSION',
  InvalidStatus = 'INVALID_STATUS',
  InvalidUrlFormat = 'INVALID_URL_FORMAT',
  ManifestUrlCantConnect = 'MANIFEST_URL_CANT_CONNECT',
  NotFound = 'NOT_FOUND',
  OutOfScopeApp = 'OUT_OF_SCOPE_APP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Represents app data. */
export type AppExtension = Node & {
  __typename?: 'AppExtension';
  /** JWT token used to authenticate by thridparty app extension. */
  accessToken?: Maybe<Scalars['String']>;
  app: App;
  id: Scalars['ID'];
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String'];
  /** Place where given extension will be mounted. */
  mount: AppExtensionMountEnum;
  /** List of the app extension's permissions. */
  permissions: Array<Permission>;
  /** Type of way how app extension will be opened. */
  target: AppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String'];
};

export type AppExtensionCountableConnection = {
  __typename?: 'AppExtensionCountableConnection';
  edges: Array<AppExtensionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type AppExtensionCountableEdge = {
  __typename?: 'AppExtensionCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AppExtension;
};

export type AppExtensionFilterInput = {
  mount?: InputMaybe<Array<AppExtensionMountEnum>>;
  target?: InputMaybe<AppExtensionTargetEnum>;
};

/** All places where app extension can be mounted. */
export enum AppExtensionMountEnum {
  NavigationCatalog = 'NAVIGATION_CATALOG',
  NavigationCustomers = 'NAVIGATION_CUSTOMERS',
  NavigationDiscounts = 'NAVIGATION_DISCOUNTS',
  NavigationOrders = 'NAVIGATION_ORDERS',
  NavigationPages = 'NAVIGATION_PAGES',
  NavigationTranslations = 'NAVIGATION_TRANSLATIONS',
  ProductDetailsMoreActions = 'PRODUCT_DETAILS_MORE_ACTIONS',
  ProductOverviewCreate = 'PRODUCT_OVERVIEW_CREATE',
  ProductOverviewMoreActions = 'PRODUCT_OVERVIEW_MORE_ACTIONS'
}

/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 *
 */
export enum AppExtensionTargetEnum {
  AppPage = 'APP_PAGE',
  Popup = 'POPUP'
}

/** Fetch and validate manifest. Requires one of the following permissions: MANAGE_APPS. */
export type AppFetchManifest = {
  __typename?: 'AppFetchManifest';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  manifest?: Maybe<Manifest>;
};

export type AppFilterInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AppTypeEnum>;
};

export type AppInput = {
  /** Name of the app. */
  name?: InputMaybe<Scalars['String']>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<PermissionEnum>>;
};

/** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppInstall = {
  __typename?: 'AppInstall';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export type AppInstallInput = {
  /** Determine if app will be set active or not. */
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']>;
  /** Name of the app to install. */
  appName?: InputMaybe<Scalars['String']>;
  /** Url to app's manifest in JSON format. */
  manifestUrl?: InputMaybe<Scalars['String']>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<PermissionEnum>>;
};

/** Represents ongoing installation of app. */
export type AppInstallation = Job & Node & {
  __typename?: 'AppInstallation';
  appName: Scalars['String'];
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  manifestUrl: Scalars['String'];
  /** Job message. */
  message?: Maybe<Scalars['String']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
};

export type AppManifestExtension = {
  __typename?: 'AppManifestExtension';
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String'];
  /** Place where given extension will be mounted. */
  mount: AppExtensionMountEnum;
  /** List of the app extension's permissions. */
  permissions: Array<Permission>;
  /** Type of way how app extension will be opened. */
  target: AppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String'];
};

/** Retry failed installation of new app. Requires one of the following permissions: MANAGE_APPS. */
export type AppRetryInstall = {
  __typename?: 'AppRetryInstall';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export enum AppSortField {
  /** Sort apps by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort apps by name. */
  Name = 'NAME'
}

export type AppSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort apps by the selected field. */
  field: AppSortField;
};

/** Represents token data. */
export type AppToken = Node & {
  __typename?: 'AppToken';
  /** Last 4 characters of the token. */
  authToken?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Name of the authenticated token. */
  name?: Maybe<Scalars['String']>;
};

/** Creates a new token. Requires one of the following permissions: MANAGE_APPS. */
export type AppTokenCreate = {
  __typename?: 'AppTokenCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']>;
  errors: Array<AppError>;
};

/** Deletes an authentication token assigned to app. Requires one of the following permissions: MANAGE_APPS. */
export type AppTokenDelete = {
  __typename?: 'AppTokenDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  errors: Array<AppError>;
};

export type AppTokenInput = {
  /** ID of app. */
  app: Scalars['ID'];
  /** Name of the token. */
  name?: InputMaybe<Scalars['String']>;
};

/** Verify provided app token. */
export type AppTokenVerify = {
  __typename?: 'AppTokenVerify';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  /** Determine if token is valid or not. */
  valid: Scalars['Boolean'];
};

/** Enum determining type of your App. */
export enum AppTypeEnum {
  /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
  Local = 'LOCAL',
  /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
  Thirdparty = 'THIRDPARTY'
}

/** Updates an existing app. Requires one of the following permissions: MANAGE_APPS. */
export type AppUpdate = {
  __typename?: 'AppUpdate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/** An enumeration. */
export enum AreaUnitsEnum {
  SqCm = 'SQ_CM',
  SqFt = 'SQ_FT',
  SqInch = 'SQ_INCH',
  SqKm = 'SQ_KM',
  SqM = 'SQ_M',
  SqYd = 'SQ_YD'
}

/** Assigns storefront's navigation menus. Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS. */
export type AssignNavigation = {
  __typename?: 'AssignNavigation';
  errors: Array<MenuError>;
  /** Assigned navigation menu. */
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

/** Added in Saleor 3.1. Represents assigned attribute to variant with variant selection attached. */
export type AssignedVariantAttribute = {
  __typename?: 'AssignedVariantAttribute';
  /** Attribute assigned to variant. */
  attribute: Attribute;
  /** Determines, whether assigned attribute is allowed for variant selection. Supported variant types for variant selection are: ['dropdown', 'boolean', 'swatch', 'numeric'] */
  variantSelection: Scalars['Boolean'];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type Attribute = Node & ObjectWithMetadata & {
  __typename?: 'Attribute';
  /** Whether the attribute can be displayed in the admin product list. Requires one of the following permissions: PagePermissions.MANAGE_PAGES, PageTypePermissions.MANAGE_PAGE_TYPES_AND_ATTRIBUTES, ProductPermissions.MANAGE_PRODUCTS, ProductTypePermissions.MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  availableInGrid: Scalars['Boolean'];
  /** List of attribute's values. */
  choices?: Maybe<AttributeValueCountableConnection>;
  /** The entity type which can be used as a reference. */
  entityType?: Maybe<AttributeEntityTypeEnum>;
  /** Whether the attribute can be filtered in dashboard. Requires one of the following permissions: PagePermissions.MANAGE_PAGES, PageTypePermissions.MANAGE_PAGE_TYPES_AND_ATTRIBUTES, ProductPermissions.MANAGE_PRODUCTS, ProductTypePermissions.MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  filterableInDashboard: Scalars['Boolean'];
  /** Whether the attribute can be filtered in storefront. Requires one of the following permissions: PagePermissions.MANAGE_PAGES, PageTypePermissions.MANAGE_PAGE_TYPES_AND_ATTRIBUTES, ProductPermissions.MANAGE_PRODUCTS, ProductTypePermissions.MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  filterableInStorefront: Scalars['Boolean'];
  id: Scalars['ID'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** Name of an attribute displayed in the interface. */
  name?: Maybe<Scalars['String']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  productTypes: ProductTypeCountableConnection;
  productVariantTypes: ProductTypeCountableConnection;
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>;
  /** The position of the attribute in the storefront navigation (0 by default). Requires one of the following permissions: PagePermissions.MANAGE_PAGES, PageTypePermissions.MANAGE_PAGE_TYPES_AND_ATTRIBUTES, ProductPermissions.MANAGE_PRODUCTS, ProductTypePermissions.MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  storefrontSearchPosition: Scalars['Int'];
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<AttributeTranslation>;
  /** The attribute type. */
  type?: Maybe<AttributeTypeEnum>;
  /** The unit of attribute values. */
  unit?: Maybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. Requires one of the following permissions: PagePermissions.MANAGE_PAGES, PageTypePermissions.MANAGE_PAGE_TYPES_AND_ATTRIBUTES, ProductPermissions.MANAGE_PRODUCTS, ProductTypePermissions.MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  valueRequired: Scalars['Boolean'];
  /** Whether the attribute should be visible or not in storefront. Requires one of the following permissions: PagePermissions.MANAGE_PAGES, PageTypePermissions.MANAGE_PAGE_TYPES_AND_ATTRIBUTES, ProductPermissions.MANAGE_PRODUCTS, ProductTypePermissions.MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  visibleInStorefront: Scalars['Boolean'];
  /** Flag indicating that attribute has predefined choices. */
  withChoices: Scalars['Boolean'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeChoicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttributeValueFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<AttributeChoicesSortingInput>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldArgs = {
  key: Scalars['String'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductVariantTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Deletes attributes. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
export type AttributeBulkDelete = {
  __typename?: 'AttributeBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<AttributeError>;
};

export enum AttributeChoicesSortField {
  /** Sort attribute choice by name. */
  Name = 'NAME',
  /** Sort attribute choice by slug. */
  Slug = 'SLUG'
}

export type AttributeChoicesSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort attribute choices by the selected field. */
  field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
  __typename?: 'AttributeCountableConnection';
  edges: Array<AttributeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeCountableEdge = {
  __typename?: 'AttributeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Attribute;
};

/** Creates an attribute. */
export type AttributeCreate = {
  __typename?: 'AttributeCreate';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeCreateInput = {
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: InputMaybe<Scalars['Boolean']>;
  /** The entity type which can be used as a reference. */
  entityType?: InputMaybe<AttributeEntityTypeEnum>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: InputMaybe<AttributeInputTypeEnum>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars['Boolean']>;
  /** Name of an attribute displayed in the interface. */
  name: Scalars['String'];
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars['String']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: InputMaybe<Scalars['Int']>;
  /** The attribute type. */
  type: AttributeTypeEnum;
  /** The unit of attribute values. */
  unit?: InputMaybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars['Boolean']>;
  /** List of attribute's values. */
  values?: InputMaybe<Array<AttributeValueCreateInput>>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
};

/** Deletes an attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type AttributeDelete = {
  __typename?: 'AttributeDelete';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

/** An enumeration. */
export enum AttributeEntityTypeEnum {
  Page = 'PAGE',
  Product = 'PRODUCT'
}

export type AttributeError = {
  __typename?: 'AttributeError';
  /** The error code. */
  code: AttributeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum AttributeErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AttributeFilterInput = {
  availableInGrid?: InputMaybe<Scalars['Boolean']>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  inCategory?: InputMaybe<Scalars['ID']>;
  inCollection?: InputMaybe<Scalars['ID']>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AttributeTypeEnum>;
  valueRequired?: InputMaybe<Scalars['Boolean']>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
};

export type AttributeInput = {
  /** The boolean value of the attribute. */
  boolean?: InputMaybe<Scalars['Boolean']>;
  /** The date range that the returned values should be in. In case of date/time attributes, the UTC midnight of the given date is used. */
  date?: InputMaybe<DateRangeInput>;
  /** The date/time range that the returned values should be in. */
  dateTime?: InputMaybe<DateTimeRangeInput>;
  /** Internal representation of an attribute name. */
  slug: Scalars['String'];
  /** Internal representation of a value (unique per attribute). */
  values?: InputMaybe<Array<Scalars['String']>>;
  /** The range that the returned values should be in. */
  valuesRange?: InputMaybe<IntRangeInput>;
};

/** An enumeration. */
export enum AttributeInputTypeEnum {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Dropdown = 'DROPDOWN',
  File = 'FILE',
  Multiselect = 'MULTISELECT',
  Numeric = 'NUMERIC',
  Reference = 'REFERENCE',
  RichText = 'RICH_TEXT',
  Swatch = 'SWATCH'
}

/** Reorder the values of an attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type AttributeReorderValues = {
  __typename?: 'AttributeReorderValues';
  /** Attribute from which values are reordered. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export enum AttributeSortField {
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  AvailableInGrid = 'AVAILABLE_IN_GRID',
  /** Sort attributes by the filterable in dashboard flag */
  FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
  /** Sort attributes by the filterable in storefront flag */
  FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
  /** Sort attributes by the variant only flag */
  IsVariantOnly = 'IS_VARIANT_ONLY',
  /** Sort attributes by name */
  Name = 'NAME',
  /** Sort attributes by slug */
  Slug = 'SLUG',
  /** Sort attributes by their position in storefront */
  StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
  /** Sort attributes by the value required flag */
  ValueRequired = 'VALUE_REQUIRED',
  /** Sort attributes by visibility in the storefront */
  VisibleInStorefront = 'VISIBLE_IN_STOREFRONT'
}

export type AttributeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort attributes by the selected field. */
  field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
  __typename?: 'AttributeTranslatableContent';
  /**
   * Custom attribute of a product.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attribute?: Maybe<Attribute>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<AttributeTranslation>;
};


export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for an attribute. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type AttributeTranslate = {
  __typename?: 'AttributeTranslate';
  attribute?: Maybe<Attribute>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type AttributeTranslation = Node & {
  __typename?: 'AttributeTranslation';
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
};

/** An enumeration. */
export enum AttributeTypeEnum {
  PageType = 'PAGE_TYPE',
  ProductType = 'PRODUCT_TYPE'
}

/** Updates attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type AttributeUpdate = {
  __typename?: 'AttributeUpdate';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeUpdateInput = {
  /** New values to be created for this attribute. */
  addValues?: InputMaybe<Array<AttributeValueUpdateInput>>;
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: InputMaybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars['Boolean']>;
  /** Name of an attribute displayed in the interface. */
  name?: InputMaybe<Scalars['String']>;
  /** IDs of values to be removed from this attribute. */
  removeValues?: InputMaybe<Array<Scalars['ID']>>;
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars['String']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: InputMaybe<Scalars['Int']>;
  /** The unit of attribute values. */
  unit?: InputMaybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars['Boolean']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
};

/** Represents a value of an attribute. */
export type AttributeValue = Node & {
  __typename?: 'AttributeValue';
  /** Represents the boolean value of the attribute value. */
  boolean?: Maybe<Scalars['Boolean']>;
  /** Represents the date value of the attribute value. */
  date?: Maybe<Scalars['Date']>;
  /** Represents the date/time value of the attribute value. */
  dateTime?: Maybe<Scalars['DateTime']>;
  /** Represents file URL and content type (if attribute value is a file). */
  file?: Maybe<File>;
  id: Scalars['ID'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** Name of a value displayed in the interface. */
  name?: Maybe<Scalars['String']>;
  /** The ID of the attribute reference. */
  reference?: Maybe<Scalars['ID']>;
  /** Represents the text (JSON) of the attribute value. */
  richText?: Maybe<Scalars['JSONString']>;
  /** Internal representation of a value (unique per attribute). */
  slug?: Maybe<Scalars['String']>;
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: Maybe<Scalars['String']>;
};


/** Represents a value of an attribute. */
export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Deletes values of attributes. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
export type AttributeValueBulkDelete = {
  __typename?: 'AttributeValueBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<AttributeError>;
};

export type AttributeValueCountableConnection = {
  __typename?: 'AttributeValueCountableConnection';
  edges: Array<AttributeValueCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeValueCountableEdge = {
  __typename?: 'AttributeValueCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AttributeValue;
};

/** Creates a value for an attribute. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type AttributeValueCreate = {
  __typename?: 'AttributeValueCreate';
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueCreateInput = {
  /** File content type. */
  contentType?: InputMaybe<Scalars['String']>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: InputMaybe<Scalars['String']>;
  /** Name of a value displayed in the interface. */
  name: Scalars['String'];
  /** Represents the text (JSON) of the attribute value. */
  richText?: InputMaybe<Scalars['JSONString']>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: InputMaybe<Scalars['String']>;
};

/** Deletes a value of an attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type AttributeValueDelete = {
  __typename?: 'AttributeValueDelete';
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type AttributeValueInput = {
  /** Represents the boolean value of the attribute value. */
  boolean?: InputMaybe<Scalars['Boolean']>;
  /** File content type. */
  contentType?: InputMaybe<Scalars['String']>;
  /** Represents the date value of the attribute value. */
  date?: InputMaybe<Scalars['Date']>;
  /** Represents the date/time value of the attribute value. */
  dateTime?: InputMaybe<Scalars['DateTime']>;
  /** URL of the file attribute. Every time, a new value is created. */
  file?: InputMaybe<Scalars['String']>;
  /** ID of the selected attribute. */
  id?: InputMaybe<Scalars['ID']>;
  /** List of entity IDs that will be used as references. */
  references?: InputMaybe<Array<Scalars['ID']>>;
  /** Text content in JSON format. */
  richText?: InputMaybe<Scalars['JSONString']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type AttributeValueTranslatableContent = Node & {
  __typename?: 'AttributeValueTranslatableContent';
  /**
   * Represents a value of an attribute.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attributeValue?: Maybe<AttributeValue>;
  id: Scalars['ID'];
  name: Scalars['String'];
  richText?: Maybe<Scalars['JSONString']>;
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>;
};


export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for an attribute value. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type AttributeValueTranslate = {
  __typename?: 'AttributeValueTranslate';
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type AttributeValueTranslation = Node & {
  __typename?: 'AttributeValueTranslation';
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
  richText?: Maybe<Scalars['JSONString']>;
};

export type AttributeValueTranslationInput = {
  name?: InputMaybe<Scalars['String']>;
  richText?: InputMaybe<Scalars['JSONString']>;
};

/** Updates value of an attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type AttributeValueUpdate = {
  __typename?: 'AttributeValueUpdate';
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueUpdateInput = {
  /** File content type. */
  contentType?: InputMaybe<Scalars['String']>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: InputMaybe<Scalars['String']>;
  /** Name of a value displayed in the interface. */
  name?: InputMaybe<Scalars['String']>;
  /** Represents the text (JSON) of the attribute value. */
  richText?: InputMaybe<Scalars['JSONString']>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: InputMaybe<Scalars['String']>;
};

export type BulkAttributeValueInput = {
  /** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
  boolean?: InputMaybe<Scalars['Boolean']>;
  /** ID of the selected attribute. */
  id?: InputMaybe<Scalars['ID']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type BulkProductError = {
  __typename?: 'BulkProductError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of channel IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']>>;
};

export type BulkStockError = {
  __typename?: 'BulkStockError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
};

export type CardInput = {
  /** Payment method nonce, a token returned by the appropriate provider's SDK. */
  code: Scalars['String'];
  /** Card security code. */
  cvc?: InputMaybe<Scalars['String']>;
  /** Information about currency and amount. */
  money: MoneyInput;
};

export type CatalogueInput = {
  /** Categories related to the discount. */
  categories?: InputMaybe<Array<Scalars['ID']>>;
  /** Collections related to the discount. */
  collections?: InputMaybe<Array<Scalars['ID']>>;
  /** Products related to the discount. */
  products?: InputMaybe<Array<Scalars['ID']>>;
  /** Added in Saleor 3.1. Product variant related to the discount. */
  variants?: InputMaybe<Array<Scalars['ID']>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type Category = Node & ObjectWithMetadata & {
  __typename?: 'Category';
  /** List of ancestors of the category. */
  ancestors?: Maybe<CategoryCountableConnection>;
  backgroundImage?: Maybe<Image>;
  /** List of children of the category. */
  children?: Maybe<CategoryCountableConnection>;
  description?: Maybe<Scalars['JSONString']>;
  /**
   * Description of the category (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  level: Scalars['Int'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  parent?: Maybe<Category>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** List of products in the category. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  products?: Maybe<ProductCountableConnection>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<CategoryTranslation>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryBackgroundImageArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Deletes categories. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CategoryBulkDelete = {
  __typename?: 'CategoryBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryCountableConnection = {
  __typename?: 'CategoryCountableConnection';
  edges: Array<CategoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryCountableEdge = {
  __typename?: 'CategoryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Category;
};

/** Creates a new category. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CategoryCreate = {
  __typename?: 'CategoryCreate';
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryCreated = {
  __typename?: 'CategoryCreated';
  /** Added in Saleor 3.2. Look up a category. Note: this feature is in a preview state and can be subject to changes at later point. */
  category?: Maybe<Category>;
};

/** Deletes a category. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CategoryDelete = {
  __typename?: 'CategoryDelete';
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryDeleted = {
  __typename?: 'CategoryDeleted';
  /** Added in Saleor 3.2. Look up a category. Note: this feature is in a preview state and can be subject to changes at later point. */
  category?: Maybe<Category>;
};

export type CategoryFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
};

export type CategoryInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']>;
  /** Alt text for a product media. */
  backgroundImageAlt?: InputMaybe<Scalars['String']>;
  /** Category description (JSON). */
  description?: InputMaybe<Scalars['JSONString']>;
  /** Category name. */
  name?: InputMaybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Category slug. */
  slug?: InputMaybe<Scalars['String']>;
};

export enum CategorySortField {
  /** Sort categories by name. */
  Name = 'NAME',
  /** Sort categories by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /** Sort categories by subcategory count. */
  SubcategoryCount = 'SUBCATEGORY_COUNT'
}

export type CategorySortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort categories by the selected field. */
  field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
  __typename?: 'CategoryTranslatableContent';
  /**
   * Represents a single category of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  category?: Maybe<Category>;
  description?: Maybe<Scalars['JSONString']>;
  /**
   * Description of the category (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<CategoryTranslation>;
};


export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for a category. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type CategoryTranslate = {
  __typename?: 'CategoryTranslate';
  category?: Maybe<Category>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type CategoryTranslation = Node & {
  __typename?: 'CategoryTranslation';
  description?: Maybe<Scalars['JSONString']>;
  /**
   * Translated description of the product (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
};

/** Updates a category. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CategoryUpdate = {
  __typename?: 'CategoryUpdate';
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryUpdated = {
  __typename?: 'CategoryUpdated';
  /** Added in Saleor 3.2. Look up a category. Note: this feature is in a preview state and can be subject to changes at later point. */
  category?: Maybe<Category>;
};

/** Represents channel. */
export type Channel = Node & {
  __typename?: 'Channel';
  currencyCode: Scalars['String'];
  /** Added in Saleor 3.1. Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided. */
  defaultCountry: CountryDisplay;
  /** Whether a channel has associated orders. Requires one of the following permissions: MANAGE_CHANNELS. */
  hasOrders: Scalars['Boolean'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

/** Activate a channel. Requires one of the following permissions: MANAGE_CHANNELS. */
export type ChannelActivate = {
  __typename?: 'ChannelActivate';
  /** Activated channel. */
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

/** Creates new channel. Requires one of the following permissions: MANAGE_CHANNELS. */
export type ChannelCreate = {
  __typename?: 'ChannelCreate';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelCreateInput = {
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: InputMaybe<Array<Scalars['ID']>>;
  /** Currency of the channel. */
  currencyCode: Scalars['String'];
  /** Added in Saleor 3.1. Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided. */
  defaultCountry: CountryCode;
  /** isActive flag. */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Name of the channel. */
  name: Scalars['String'];
  /** Slug of the channel. */
  slug: Scalars['String'];
};

export type ChannelCreated = {
  __typename?: 'ChannelCreated';
  /** Added in Saleor 3.2. Look up a channel. Note: this feature is in a preview state and can be subject to changes at later point. */
  channel?: Maybe<Channel>;
};

/** Deactivate a channel. Requires one of the following permissions: MANAGE_CHANNELS. */
export type ChannelDeactivate = {
  __typename?: 'ChannelDeactivate';
  /** Deactivated channel. */
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

/** Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed. Requires one of the following permissions: MANAGE_CHANNELS. */
export type ChannelDelete = {
  __typename?: 'ChannelDelete';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelDeleteInput = {
  /** ID of channel to migrate orders from origin channel. */
  channelId: Scalars['ID'];
};

export type ChannelDeleted = {
  __typename?: 'ChannelDeleted';
  /** Added in Saleor 3.2. Look up a channel. Note: this feature is in a preview state and can be subject to changes at later point. */
  channel?: Maybe<Channel>;
};

export type ChannelError = {
  __typename?: 'ChannelError';
  /** The error code. */
  code: ChannelErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of shipping zone IDs which causes the error. */
  shippingZones?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum ChannelErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  ChannelsCurrencyMustBeTheSame = 'CHANNELS_CURRENCY_MUST_BE_THE_SAME',
  ChannelWithOrders = 'CHANNEL_WITH_ORDERS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ChannelStatusChanged = {
  __typename?: 'ChannelStatusChanged';
  /** Added in Saleor 3.2. Look up a channel. Note: this feature is in a preview state and can be subject to changes at later point. */
  channel?: Maybe<Channel>;
};

/** Update a channel. Requires one of the following permissions: MANAGE_CHANNELS. */
export type ChannelUpdate = {
  __typename?: 'ChannelUpdate';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelUpdateInput = {
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: InputMaybe<Array<Scalars['ID']>>;
  /** Added in Saleor 3.1. Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided. */
  defaultCountry?: InputMaybe<CountryCode>;
  /** isActive flag. */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Name of the channel. */
  name?: InputMaybe<Scalars['String']>;
  /** List of shipping zones to unassign from the channel. */
  removeShippingZones?: InputMaybe<Array<Scalars['ID']>>;
  /** Slug of the channel. */
  slug?: InputMaybe<Scalars['String']>;
};

export type ChannelUpdated = {
  __typename?: 'ChannelUpdated';
  /** Added in Saleor 3.2. Look up a channel. Note: this feature is in a preview state and can be subject to changes at later point. */
  channel?: Maybe<Channel>;
};

/** Checkout object. */
export type Checkout = Node & ObjectWithMetadata & {
  __typename?: 'Checkout';
  /** Added in Saleor 3.1. Collection points that can be used for this order. Note: this feature is in a preview state and can be subject to changes at later point. */
  availableCollectionPoints: Array<Warehouse>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /**
   * Shipping methods that can be used with this checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `shippingMethods` instead.
   */
  availableShippingMethods: Array<ShippingMethod>;
  billingAddress?: Maybe<Address>;
  channel: Channel;
  created: Scalars['DateTime'];
  /** Added in Saleor 3.1. The delivery method selected for this checkout. Note: this feature is in a preview state and can be subject to changes at later point. */
  deliveryMethod?: Maybe<DeliveryMethod>;
  discount?: Maybe<Money>;
  discountName?: Maybe<Scalars['String']>;
  /** Email of a customer. */
  email?: Maybe<Scalars['String']>;
  /** List of gift cards associated with this checkout. */
  giftCards: Array<GiftCard>;
  id: Scalars['ID'];
  /** Returns True, if checkout requires shipping. */
  isShippingRequired: Scalars['Boolean'];
  /** Checkout language code. */
  languageCode: LanguageCodeEnum;
  lastChange: Scalars['DateTime'];
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLine>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  note: Scalars['String'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** The number of items purchased. */
  quantity: Scalars['Int'];
  shippingAddress?: Maybe<Address>;
  /**
   * The shipping method related with checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  shippingMethod?: Maybe<ShippingMethod>;
  /** Shipping methods that can be used with this checkout. */
  shippingMethods: Array<ShippingMethod>;
  /** The price of the shipping, with all the taxes included. */
  shippingPrice: TaxedMoney;
  /** Added in Saleor 3.1. Date when oldest stock reservation for this checkout  expires or null if no stock is reserved. */
  stockReservationExpires?: Maybe<Scalars['DateTime']>;
  /** The price of the checkout before shipping, with taxes included. */
  subtotalPrice: TaxedMoney;
  /** The checkout's token. */
  token: Scalars['UUID'];
  /** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
  totalPrice: TaxedMoney;
  translatedDiscountName?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  voucherCode?: Maybe<Scalars['String']>;
};


/** Checkout object. */
export type CheckoutMetafieldArgs = {
  key: Scalars['String'];
};


/** Checkout object. */
export type CheckoutMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Checkout object. */
export type CheckoutPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Checkout object. */
export type CheckoutPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Adds a gift card or a voucher to a checkout. */
export type CheckoutAddPromoCode = {
  __typename?: 'CheckoutAddPromoCode';
  /** The checkout with the added gift card or voucher. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Update billing address in the existing checkout. */
export type CheckoutBillingAddressUpdate = {
  __typename?: 'CheckoutBillingAddressUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
export type CheckoutComplete = {
  __typename?: 'CheckoutComplete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  /** Confirmation data used to process additional authorization steps. */
  confirmationData?: Maybe<Scalars['JSONString']>;
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  confirmationNeeded: Scalars['Boolean'];
  errors: Array<CheckoutError>;
  /** Placed order. */
  order?: Maybe<Order>;
};

export type CheckoutCountableConnection = {
  __typename?: 'CheckoutCountableConnection';
  edges: Array<CheckoutCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutCountableEdge = {
  __typename?: 'CheckoutCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Checkout;
};

/** Create a new checkout. */
export type CheckoutCreate = {
  __typename?: 'CheckoutCreate';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  /**
   * Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `true`.
   */
  created?: Maybe<Scalars['Boolean']>;
  errors: Array<CheckoutError>;
};

export type CheckoutCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Slug of a channel in which to create a checkout. */
  channel?: InputMaybe<Scalars['String']>;
  /** The customer's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** Checkout language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLineInput>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: InputMaybe<AddressInput>;
};

export type CheckoutCreated = {
  __typename?: 'CheckoutCreated';
  /** Added in Saleor 3.2. Look up a Checkout. Note: this feature is in a preview state and can be subject to changes at later point. */
  checkout?: Maybe<Checkout>;
};

/** Sets the customer as the owner of the checkout. Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER. */
export type CheckoutCustomerAttach = {
  __typename?: 'CheckoutCustomerAttach';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Removes the user assigned as the owner of the checkout. Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER. */
export type CheckoutCustomerDetach = {
  __typename?: 'CheckoutCustomerDetach';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Added in Saleor 3.1. Updates the delivery method (shipping method or pick up point) of the checkout. Note: this feature is in a preview state and can be subject to changes at later point. */
export type CheckoutDeliveryMethodUpdate = {
  __typename?: 'CheckoutDeliveryMethodUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

/** Updates email address in the existing checkout object. */
export type CheckoutEmailUpdate = {
  __typename?: 'CheckoutEmailUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutError = {
  __typename?: 'CheckoutError';
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: CheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** List of line Ids which cause the error. */
  lines?: Maybe<Array<Scalars['ID']>>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of varint IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum CheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelInactive = 'CHANNEL_INACTIVE',
  CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
  DeliveryMethodNotApplicable = 'DELIVERY_METHOD_NOT_APPLICABLE',
  EmailNotSet = 'EMAIL_NOT_SET',
  GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
  NotFound = 'NOT_FOUND',
  NoLines = 'NO_LINES',
  PaymentError = 'PAYMENT_ERROR',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
  TaxError = 'TAX_ERROR',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
  Unique = 'UNIQUE',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
  ZeroQuantity = 'ZERO_QUANTITY'
}

export type CheckoutFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
};

/** Update language code in the existing checkout. */
export type CheckoutLanguageCodeUpdate = {
  __typename?: 'CheckoutLanguageCodeUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Represents an item in the checkout. */
export type CheckoutLine = Node & {
  __typename?: 'CheckoutLine';
  id: Scalars['ID'];
  quantity: Scalars['Int'];
  /** Indicates whether the item need to be delivered. */
  requiresShipping: Scalars['Boolean'];
  /** The sum of the checkout line price, taxes and discounts. */
  totalPrice: TaxedMoney;
  variant: ProductVariant;
};

export type CheckoutLineCountableConnection = {
  __typename?: 'CheckoutLineCountableConnection';
  edges: Array<CheckoutLineCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutLineCountableEdge = {
  __typename?: 'CheckoutLineCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CheckoutLine;
};

/** Deletes a CheckoutLine. */
export type CheckoutLineDelete = {
  __typename?: 'CheckoutLineDelete';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutLineInput = {
  /** Added in Saleor 3.1. Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used. Note: this feature is in a preview state and can be subject to changes at later point. */
  price?: InputMaybe<Scalars['PositiveDecimal']>;
  /** The number of items purchased. */
  quantity: Scalars['Int'];
  /** ID of the product variant. */
  variantId: Scalars['ID'];
};

export type CheckoutLineUpdateInput = {
  /** Added in Saleor 3.1. Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used. Note: this feature is in a preview state and can be subject to changes at later point. */
  price?: InputMaybe<Scalars['PositiveDecimal']>;
  /** The number of items purchased. Optional for apps, required for any other users. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** ID of the product variant. */
  variantId: Scalars['ID'];
};

/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
export type CheckoutLinesAdd = {
  __typename?: 'CheckoutLinesAdd';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Deletes checkout lines. */
export type CheckoutLinesDelete = {
  __typename?: 'CheckoutLinesDelete';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

/** Updates checkout line in the existing checkout. */
export type CheckoutLinesUpdate = {
  __typename?: 'CheckoutLinesUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Create a new payment for given checkout. */
export type CheckoutPaymentCreate = {
  __typename?: 'CheckoutPaymentCreate';
  /** Related checkout object. */
  checkout?: Maybe<Checkout>;
  errors: Array<PaymentError>;
  /** A newly created payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** Remove a gift card or a voucher from a checkout. */
export type CheckoutRemovePromoCode = {
  __typename?: 'CheckoutRemovePromoCode';
  /** The checkout with the removed gift card or voucher. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Update shipping address in the existing checkout. */
export type CheckoutShippingAddressUpdate = {
  __typename?: 'CheckoutShippingAddressUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Updates the shipping method of the checkout. */
export type CheckoutShippingMethodUpdate = {
  __typename?: 'CheckoutShippingMethodUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export enum CheckoutSortField {
  /** Sort checkouts by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort checkouts by customer. */
  Customer = 'CUSTOMER',
  /** Sort checkouts by payment. */
  Payment = 'PAYMENT'
}

export type CheckoutSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort checkouts by the selected field. */
  field: CheckoutSortField;
};

export type CheckoutUpdated = {
  __typename?: 'CheckoutUpdated';
  /** Added in Saleor 3.2. Look up a Checkout. Note: this feature is in a preview state and can be subject to changes at later point. */
  checkout?: Maybe<Checkout>;
};

export type ChoiceValue = {
  __typename?: 'ChoiceValue';
  raw?: Maybe<Scalars['String']>;
  verbose?: Maybe<Scalars['String']>;
};

/** Represents a collection of products. */
export type Collection = Node & ObjectWithMetadata & {
  __typename?: 'Collection';
  backgroundImage?: Maybe<Image>;
  /** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
  channel?: Maybe<Scalars['String']>;
  /** List of channels in which the collection is available. Requires one of the following permissions: MANAGE_PRODUCTS. */
  channelListings?: Maybe<Array<CollectionChannelListing>>;
  description?: Maybe<Scalars['JSONString']>;
  /**
   * Description of the collection (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** List of products in this collection. */
  products?: Maybe<ProductCountableConnection>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<CollectionTranslation>;
};


/** Represents a collection of products. */
export type CollectionBackgroundImageArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


/** Represents a collection of products. */
export type CollectionMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a collection of products. */
export type CollectionMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a collection of products. */
export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductOrder>;
};


/** Represents a collection of products. */
export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Adds products to a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CollectionAddProducts = {
  __typename?: 'CollectionAddProducts';
  /** Collection to which products will be added. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/** Deletes collections. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CollectionBulkDelete = {
  __typename?: 'CollectionBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<CollectionError>;
};

/** Represents collection channel listing. */
export type CollectionChannelListing = Node & {
  __typename?: 'CollectionChannelListing';
  channel: Channel;
  id: Scalars['ID'];
  isPublished: Scalars['Boolean'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']>;
  /** Added in Saleor 3.3. The collection publication date. */
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type CollectionChannelListingError = {
  __typename?: 'CollectionChannelListingError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
};

/** Manage collection's availability in channels. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CollectionChannelListingUpdate = {
  __typename?: 'CollectionChannelListingUpdate';
  /** An updated collection instance. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionChannelListingErrors: Array<CollectionChannelListingError>;
  errors: Array<CollectionChannelListingError>;
};

export type CollectionChannelListingUpdateInput = {
  /** List of channels to which the collection should be assigned. */
  addChannels?: InputMaybe<Array<PublishableChannelListingInput>>;
  /** List of channels from which the collection should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type CollectionCountableConnection = {
  __typename?: 'CollectionCountableConnection';
  edges: Array<CollectionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionCountableEdge = {
  __typename?: 'CollectionCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Collection;
};

/** Creates a new collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CollectionCreate = {
  __typename?: 'CollectionCreate';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionCreateInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars['String']>;
  /** Description of the collection (JSON). */
  description?: InputMaybe<Scalars['JSONString']>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars['String']>;
  /** List of products to be added to the collection. */
  products?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: InputMaybe<Scalars['Date']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars['String']>;
};

export type CollectionCreated = {
  __typename?: 'CollectionCreated';
  /** Added in Saleor 3.2. Look up a collection. Note: this feature is in a preview state and can be subject to changes at later point. */
  collection?: Maybe<Collection>;
};


export type CollectionCreatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Deletes a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CollectionDelete = {
  __typename?: 'CollectionDelete';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionDeleted = {
  __typename?: 'CollectionDeleted';
  /** Added in Saleor 3.2. Look up a collection. Note: this feature is in a preview state and can be subject to changes at later point. */
  collection?: Maybe<Collection>;
};


export type CollectionDeletedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type CollectionError = {
  __typename?: 'CollectionError';
  /** The error code. */
  code: CollectionErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum CollectionErrorCode {
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type CollectionFilterInput = {
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  published?: InputMaybe<CollectionPublished>;
  search?: InputMaybe<Scalars['String']>;
};

export type CollectionInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars['String']>;
  /** Description of the collection (JSON). */
  description?: InputMaybe<Scalars['JSONString']>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars['String']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: InputMaybe<Scalars['Date']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars['String']>;
};

export enum CollectionPublished {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

/** Remove products from a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CollectionRemoveProducts = {
  __typename?: 'CollectionRemoveProducts';
  /** Collection from which products will be removed. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/** Reorder the products of a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CollectionReorderProducts = {
  __typename?: 'CollectionReorderProducts';
  /** Collection from which products are reordered. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export enum CollectionSortField {
  /** Sort collections by availability. */
  Availability = 'AVAILABILITY',
  /** Sort collections by name. */
  Name = 'NAME',
  /** Sort collections by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /**
   * Sort collections by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PublicationDate = 'PUBLICATION_DATE',
  /**
   * Sort collections by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PublishedAt = 'PUBLISHED_AT'
}

export type CollectionSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort collections by the selected field. */
  field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
  __typename?: 'CollectionTranslatableContent';
  /**
   * Represents a collection of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  collection?: Maybe<Collection>;
  description?: Maybe<Scalars['JSONString']>;
  /**
   * Description of the collection (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<CollectionTranslation>;
};


export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for a collection. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type CollectionTranslate = {
  __typename?: 'CollectionTranslate';
  collection?: Maybe<Collection>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type CollectionTranslation = Node & {
  __typename?: 'CollectionTranslation';
  description?: Maybe<Scalars['JSONString']>;
  /**
   * Translated description of the product (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
};

/** Updates a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type CollectionUpdate = {
  __typename?: 'CollectionUpdate';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionUpdated = {
  __typename?: 'CollectionUpdated';
  /** Added in Saleor 3.2. Look up a collection. Note: this feature is in a preview state and can be subject to changes at later point. */
  collection?: Maybe<Collection>;
};


export type CollectionUpdatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Stores information about a single configuration field. */
export type ConfigurationItem = {
  __typename?: 'ConfigurationItem';
  /** Help text for the field. */
  helpText?: Maybe<Scalars['String']>;
  /** Label for the field. */
  label?: Maybe<Scalars['String']>;
  /** Name of the field. */
  name: Scalars['String'];
  /** Type of the field. */
  type?: Maybe<ConfigurationTypeFieldEnum>;
  /** Current value of the field. */
  value?: Maybe<Scalars['String']>;
};

export type ConfigurationItemInput = {
  /** Name of the field to update. */
  name: Scalars['String'];
  /** Value of the given field to update. */
  value?: InputMaybe<Scalars['String']>;
};

/** An enumeration. */
export enum ConfigurationTypeFieldEnum {
  Boolean = 'BOOLEAN',
  Multiline = 'MULTILINE',
  Output = 'OUTPUT',
  Password = 'PASSWORD',
  Secret = 'SECRET',
  Secretmultiline = 'SECRETMULTILINE',
  String = 'STRING'
}

/** Confirm user account with token sent by email during registration. */
export type ConfirmAccount = {
  __typename?: 'ConfirmAccount';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An activated user account. */
  user?: Maybe<User>;
};

/** Confirm the email change of the logged-in user. Requires one of the following permissions: AUTHENTICATED_USER. */
export type ConfirmEmailChange = {
  __typename?: 'ConfirmEmailChange';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** A user instance with a new email. */
  user?: Maybe<User>;
};

/** An enumeration. */
export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Eu = 'EU',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type CountryDisplay = {
  __typename?: 'CountryDisplay';
  /** Country code. */
  code: Scalars['String'];
  /** Country name. */
  country: Scalars['String'];
  /** Country tax. */
  vat?: Maybe<Vat>;
};

export type CountryFilterInput = {
  /** Boolean for filtering countries by having shipping zone assigned.If 'true', return countries with shipping zone assigned.If 'false', return countries without any shipping zone assigned.If the argument is not provided (null), return all countries. */
  attachedToShippingZones?: InputMaybe<Scalars['Boolean']>;
};

/** Create JWT token. */
export type CreateToken = {
  __typename?: 'CreateToken';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']>;
  errors: Array<AccountError>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type CreditCard = {
  __typename?: 'CreditCard';
  /** Card brand. */
  brand: Scalars['String'];
  /** Two-digit number representing the card’s expiration month. */
  expMonth?: Maybe<Scalars['Int']>;
  /** Four-digit number representing the card’s expiration year. */
  expYear?: Maybe<Scalars['Int']>;
  /** First 4 digits of the card number. */
  firstDigits?: Maybe<Scalars['String']>;
  /** Last 4 digits of the card number. */
  lastDigits: Scalars['String'];
};

/** Deletes customers. Requires one of the following permissions: MANAGE_USERS. */
export type CustomerBulkDelete = {
  __typename?: 'CustomerBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<AccountError>;
};

/** Creates a new customer. Requires one of the following permissions: MANAGE_USERS. */
export type CustomerCreate = {
  __typename?: 'CustomerCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type CustomerCreated = {
  __typename?: 'CustomerCreated';
  /** Added in Saleor 3.2. Look up a user. Note: this feature is in a preview state and can be subject to changes at later point. */
  user?: Maybe<User>;
};

/** Deletes a customer. Requires one of the following permissions: MANAGE_USERS. */
export type CustomerDelete = {
  __typename?: 'CustomerDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

/** History log of the customer. */
export type CustomerEvent = Node & {
  __typename?: 'CustomerEvent';
  /** App that performed the action. */
  app?: Maybe<App>;
  /** Number of objects concerned by the event. */
  count?: Maybe<Scalars['Int']>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  /** Content of the event. */
  message?: Maybe<Scalars['String']>;
  /** The concerned order. */
  order?: Maybe<Order>;
  /** The concerned order line. */
  orderLine?: Maybe<OrderLine>;
  /** Customer event type. */
  type?: Maybe<CustomerEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<User>;
};

/** An enumeration. */
export enum CustomerEventsEnum {
  AccountCreated = 'ACCOUNT_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
  EmailAssigned = 'EMAIL_ASSIGNED',
  EmailChanged = 'EMAIL_CHANGED',
  EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
  NameAssigned = 'NAME_ASSIGNED',
  NoteAdded = 'NOTE_ADDED',
  NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
  PasswordChanged = 'PASSWORD_CHANGED',
  PasswordReset = 'PASSWORD_RESET',
  PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
  PlacedOrder = 'PLACED_ORDER'
}

export type CustomerFilterInput = {
  dateJoined?: InputMaybe<DateRangeInput>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  numberOfOrders?: InputMaybe<IntRangeInput>;
  placedOrders?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type CustomerInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']>;
};

/** Updates an existing customer. Requires one of the following permissions: MANAGE_USERS. */
export type CustomerUpdate = {
  __typename?: 'CustomerUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type CustomerUpdated = {
  __typename?: 'CustomerUpdated';
  /** Added in Saleor 3.2. Look up a user. Note: this feature is in a preview state and can be subject to changes at later point. */
  user?: Maybe<User>;
};

export type DateRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars['Date']>;
  /** End date. */
  lte?: InputMaybe<Scalars['Date']>;
};

export type DateTimeRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** End date. */
  lte?: InputMaybe<Scalars['DateTime']>;
};

/** Deactivate all JWT tokens of the currently authenticated user. Requires one of the following permissions: AUTHENTICATED_USER. */
export type DeactivateAllUserTokens = {
  __typename?: 'DeactivateAllUserTokens';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Delete metadata of an object. To use it, you need to have access to the modified object. */
export type DeleteMetadata = {
  __typename?: 'DeleteMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

/** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type DeletePrivateMetadata = {
  __typename?: 'DeletePrivateMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

/** Added in Saleor 3.1. Represents a delivery method chosen for the checkout. `Warehouse` type is used when checkout is marked as "click and collect" and `ShippingMethod` otherwise. Note: this feature is in a preview state and can be subject to changes at later point. */
export type DeliveryMethod = ShippingMethod | Warehouse;

export type DigitalContent = Node & ObjectWithMetadata & {
  __typename?: 'DigitalContent';
  automaticFulfillment: Scalars['Boolean'];
  contentFile: Scalars['String'];
  id: Scalars['ID'];
  maxDownloads?: Maybe<Scalars['Int']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** Product variant assigned to digital content. */
  productVariant: ProductVariant;
  urlValidDays?: Maybe<Scalars['Int']>;
  /** List of URLs for the digital variant. */
  urls?: Maybe<Array<DigitalContentUrl>>;
  useDefaultSettings: Scalars['Boolean'];
};


export type DigitalContentMetafieldArgs = {
  key: Scalars['String'];
};


export type DigitalContentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type DigitalContentPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type DigitalContentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type DigitalContentCountableConnection = {
  __typename?: 'DigitalContentCountableConnection';
  edges: Array<DigitalContentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type DigitalContentCountableEdge = {
  __typename?: 'DigitalContentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DigitalContent;
};

/** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec Requires one of the following permissions: MANAGE_PRODUCTS. */
export type DigitalContentCreate = {
  __typename?: 'DigitalContentCreate';
  content?: Maybe<DigitalContent>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

/** Remove digital content assigned to given variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type DigitalContentDelete = {
  __typename?: 'DigitalContentDelete';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars['Boolean']>;
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars['Int']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars['Int']>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean'];
};

/** Update digital content. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type DigitalContentUpdate = {
  __typename?: 'DigitalContentUpdate';
  content?: Maybe<DigitalContent>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentUploadInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars['Boolean']>;
  /** Represents an file in a multipart request. */
  contentFile: Scalars['Upload'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars['Int']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars['Int']>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean'];
};

export type DigitalContentUrl = Node & {
  __typename?: 'DigitalContentUrl';
  content: DigitalContent;
  created: Scalars['DateTime'];
  downloadNum: Scalars['Int'];
  id: Scalars['ID'];
  /** UUID of digital content. */
  token: Scalars['UUID'];
  /** URL for digital content. */
  url?: Maybe<Scalars['String']>;
};

/** Generate new URL to digital content. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type DigitalContentUrlCreate = {
  __typename?: 'DigitalContentUrlCreate';
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type DigitalContentUrlCreateInput = {
  /** Digital content ID which URL will belong to. */
  content: Scalars['ID'];
};

export type DiscountError = {
  __typename?: 'DiscountError';
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: DiscountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum DiscountErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export enum DiscountStatusEnum {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED'
}

export enum DiscountValueTypeEnum {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

/** An enumeration. */
export enum DistanceUnitsEnum {
  Cm = 'CM',
  Ft = 'FT',
  Inch = 'INCH',
  Km = 'KM',
  M = 'M',
  Yd = 'YD'
}

/** Represents shop's domain. */
export type Domain = {
  __typename?: 'Domain';
  /** The host name of the domain. */
  host: Scalars['String'];
  /** Inform if SSL is enabled. */
  sslEnabled: Scalars['Boolean'];
  /** Shop's absolute URL. */
  url: Scalars['String'];
};

/** Deletes draft orders. Requires one of the following permissions: MANAGE_ORDERS. */
export type DraftOrderBulkDelete = {
  __typename?: 'DraftOrderBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** Completes creating an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type DraftOrderComplete = {
  __typename?: 'DraftOrderComplete';
  errors: Array<OrderError>;
  /** Completed order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** Creates a new draft order. Requires one of the following permissions: MANAGE_ORDERS. */
export type DraftOrderCreate = {
  __typename?: 'DraftOrderCreate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** ID of the channel associated with the order. */
  channelId?: InputMaybe<Scalars['ID']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']>;
  /** Discount amount for the order. */
  discount?: InputMaybe<Scalars['PositiveDecimal']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: InputMaybe<Array<OrderLineCreateInput>>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']>;
  /** Customer associated with the draft order. */
  user?: InputMaybe<Scalars['ID']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']>;
  /** ID of the voucher associated with the order. */
  voucher?: InputMaybe<Scalars['ID']>;
};

export type DraftOrderCreated = {
  __typename?: 'DraftOrderCreated';
  /** Added in Saleor 3.2. Look up an order. Note: this feature is in a preview state and can be subject to changes at later point. */
  order?: Maybe<Order>;
};

/** Deletes a draft order. Requires one of the following permissions: MANAGE_ORDERS. */
export type DraftOrderDelete = {
  __typename?: 'DraftOrderDelete';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderDeleted = {
  __typename?: 'DraftOrderDeleted';
  /** Added in Saleor 3.2. Look up an order. Note: this feature is in a preview state and can be subject to changes at later point. */
  order?: Maybe<Order>;
};

export type DraftOrderInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** ID of the channel associated with the order. */
  channelId?: InputMaybe<Scalars['ID']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']>;
  /** Discount amount for the order. */
  discount?: InputMaybe<Scalars['PositiveDecimal']>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']>;
  /** Customer associated with the draft order. */
  user?: InputMaybe<Scalars['ID']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']>;
  /** ID of the voucher associated with the order. */
  voucher?: InputMaybe<Scalars['ID']>;
};

/** Deletes order lines. Requires one of the following permissions: MANAGE_ORDERS. */
export type DraftOrderLinesBulkDelete = {
  __typename?: 'DraftOrderLinesBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** Updates a draft order. Requires one of the following permissions: MANAGE_ORDERS. */
export type DraftOrderUpdate = {
  __typename?: 'DraftOrderUpdate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderUpdated = {
  __typename?: 'DraftOrderUpdated';
  /** Added in Saleor 3.2. Look up an order. Note: this feature is in a preview state and can be subject to changes at later point. */
  order?: Maybe<Order>;
};

export type Event = CategoryCreated | CategoryDeleted | CategoryUpdated | ChannelCreated | ChannelDeleted | ChannelStatusChanged | ChannelUpdated | CheckoutCreated | CheckoutUpdated | CollectionCreated | CollectionDeleted | CollectionUpdated | CustomerCreated | CustomerUpdated | DraftOrderCreated | DraftOrderDeleted | DraftOrderUpdated | FulfillmentCanceled | FulfillmentCreated | GiftCardCreated | GiftCardDeleted | GiftCardStatusChanged | GiftCardUpdated | InvoiceDeleted | InvoiceRequested | InvoiceSent | OrderCancelled | OrderConfirmed | OrderCreated | OrderFulfilled | OrderFullyPaid | OrderUpdated | PageCreated | PageDeleted | PageUpdated | ProductCreated | ProductDeleted | ProductUpdated | ProductVariantBackInStock | ProductVariantCreated | ProductVariantDeleted | ProductVariantOutOfStock | ProductVariantUpdated | SaleCreated | SaleDeleted | SaleUpdated | ShippingPriceCreated | ShippingPriceDeleted | ShippingPriceUpdated | ShippingZoneCreated | ShippingZoneDeleted | ShippingZoneUpdated | TranslationCreated | TranslationUpdated;

/** Event delivery. */
export type EventDelivery = Node & {
  __typename?: 'EventDelivery';
  /** Event delivery attempts. */
  attempts?: Maybe<EventDeliveryAttemptCountableConnection>;
  createdAt: Scalars['DateTime'];
  /** Webhook event type. */
  eventType: WebhookEventTypeEnum;
  id: Scalars['ID'];
  /** Event payload. */
  payload?: Maybe<Scalars['String']>;
  /** Event delivery status. */
  status: EventDeliveryStatusEnum;
};


/** Event delivery. */
export type EventDeliveryAttemptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<EventDeliveryAttemptSortingInput>;
};

/** Event delivery attempts. */
export type EventDeliveryAttempt = Node & {
  __typename?: 'EventDeliveryAttempt';
  /** Event delivery creation date and time. */
  createdAt: Scalars['DateTime'];
  /** Delivery attempt duration. */
  duration?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  /** Request headers for delivery attempt. */
  requestHeaders?: Maybe<Scalars['String']>;
  /** Delivery attempt response content. */
  response?: Maybe<Scalars['String']>;
  /** Response headers for delivery attempt. */
  responseHeaders?: Maybe<Scalars['String']>;
  /** Delivery attempt response status code. */
  responseStatusCode?: Maybe<Scalars['Int']>;
  /** Event delivery status. */
  status: EventDeliveryStatusEnum;
  /** Task id for delivery attempt. */
  taskId?: Maybe<Scalars['String']>;
};

export type EventDeliveryAttemptCountableConnection = {
  __typename?: 'EventDeliveryAttemptCountableConnection';
  edges: Array<EventDeliveryAttemptCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type EventDeliveryAttemptCountableEdge = {
  __typename?: 'EventDeliveryAttemptCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EventDeliveryAttempt;
};

export enum EventDeliveryAttemptSortField {
  /** Sort event delivery attempts by created at. */
  CreatedAt = 'CREATED_AT'
}

export type EventDeliveryAttemptSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort attempts by the selected field. */
  field: EventDeliveryAttemptSortField;
};

export type EventDeliveryCountableConnection = {
  __typename?: 'EventDeliveryCountableConnection';
  edges: Array<EventDeliveryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type EventDeliveryCountableEdge = {
  __typename?: 'EventDeliveryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EventDelivery;
};

export type EventDeliveryFilterInput = {
  eventType?: InputMaybe<WebhookEventTypeEnum>;
  status?: InputMaybe<EventDeliveryStatusEnum>;
};

/** Retries event delivery. Requires one of the following permissions: MANAGE_APPS. */
export type EventDeliveryRetry = {
  __typename?: 'EventDeliveryRetry';
  /** Event delivery. */
  delivery?: Maybe<EventDelivery>;
  errors: Array<WebhookError>;
};

export enum EventDeliverySortField {
  /** Sort event deliveries by created at. */
  CreatedAt = 'CREATED_AT'
}

export type EventDeliverySortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort deliveries by the selected field. */
  field: EventDeliverySortField;
};

export enum EventDeliveryStatusEnum {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type ExportError = {
  __typename?: 'ExportError';
  /** The error code. */
  code: ExportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ExportErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

/** History log of export file. */
export type ExportEvent = Node & {
  __typename?: 'ExportEvent';
  /** App which performed the action. Requires one of the following permissions: AuthorizationFilters.OWNER, AppPermission.MANAGE_APPS. */
  app?: Maybe<App>;
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Content of the event. */
  message: Scalars['String'];
  /** Export event type. */
  type: ExportEventsEnum;
  /** User who performed the action. Requires one of the following permissions: AuthorizationFilters.OWNER, AccountPermissions.MANAGE_STAFF. */
  user?: Maybe<User>;
};

/** An enumeration. */
export enum ExportEventsEnum {
  ExportedFileSent = 'EXPORTED_FILE_SENT',
  ExportDeleted = 'EXPORT_DELETED',
  ExportFailed = 'EXPORT_FAILED',
  ExportFailedInfoSent = 'EXPORT_FAILED_INFO_SENT',
  ExportPending = 'EXPORT_PENDING',
  ExportSuccess = 'EXPORT_SUCCESS'
}

/** Represents a job data of exported file. */
export type ExportFile = Job & Node & {
  __typename?: 'ExportFile';
  app?: Maybe<App>;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** List of events associated with the export. */
  events?: Maybe<Array<ExportEvent>>;
  id: Scalars['ID'];
  /** Job message. */
  message?: Maybe<Scalars['String']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** The URL of field to download. */
  url?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type ExportFileCountableConnection = {
  __typename?: 'ExportFileCountableConnection';
  edges: Array<ExportFileCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ExportFileCountableEdge = {
  __typename?: 'ExportFileCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ExportFile;
};

export type ExportFileFilterInput = {
  app?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<JobStatusEnum>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
  user?: InputMaybe<Scalars['String']>;
};

export enum ExportFileSortField {
  CreatedAt = 'CREATED_AT',
  LastModifiedAt = 'LAST_MODIFIED_AT',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

export type ExportFileSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort export file by the selected field. */
  field: ExportFileSortField;
};

/** Added in Saleor 3.1. Export gift cards to csv file. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type ExportGiftCards = {
  __typename?: 'ExportGiftCards';
  errors: Array<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<ExportFile>;
};

export type ExportGiftCardsInput = {
  /** Type of exported file. */
  fileType: FileTypesEnum;
  /** Filtering options for gift cards. */
  filter?: InputMaybe<GiftCardFilterInput>;
  /** List of gift cards IDs to export. */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Determine which gift cards should be exported. */
  scope: ExportScope;
};

export type ExportInfoInput = {
  /** List of attribute ids witch should be exported. */
  attributes?: InputMaybe<Array<Scalars['ID']>>;
  /** List of channels ids which should be exported. */
  channels?: InputMaybe<Array<Scalars['ID']>>;
  /** List of product fields witch should be exported. */
  fields?: InputMaybe<Array<ProductFieldEnum>>;
  /** List of warehouse ids witch should be exported. */
  warehouses?: InputMaybe<Array<Scalars['ID']>>;
};

/** Export products to csv file. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ExportProducts = {
  __typename?: 'ExportProducts';
  errors: Array<ExportError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  exportErrors: Array<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<ExportFile>;
};

export type ExportProductsInput = {
  /** Input with info about fields which should be exported. */
  exportInfo?: InputMaybe<ExportInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
  /** Filtering options for products. */
  filter?: InputMaybe<ProductFilterInput>;
  /** List of products IDs to export. */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Determine which products should be exported. */
  scope: ExportScope;
};

export enum ExportScope {
  /** Export all products. */
  All = 'ALL',
  /** Export the filtered products. */
  Filter = 'FILTER',
  /** Export products with given ids. */
  Ids = 'IDS'
}

export type ExternalAuthentication = {
  __typename?: 'ExternalAuthentication';
  /** ID of external authentication plugin. */
  id: Scalars['String'];
  /** Name of external authentication plugin. */
  name?: Maybe<Scalars['String']>;
};

/** Prepare external authentication url for user by custom plugin. */
export type ExternalAuthenticationUrl = {
  __typename?: 'ExternalAuthenticationUrl';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** The data returned by authentication plugin. */
  authenticationData?: Maybe<Scalars['JSONString']>;
  errors: Array<AccountError>;
};

/** Logout user by custom plugin. */
export type ExternalLogout = {
  __typename?: 'ExternalLogout';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** The data returned by authentication plugin. */
  logoutData?: Maybe<Scalars['JSONString']>;
};

export type ExternalNotificationError = {
  __typename?: 'ExternalNotificationError';
  /** The error code. */
  code: ExternalNotificationErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ExternalNotificationErrorCodes {
  ChannelInactive = 'CHANNEL_INACTIVE',
  InvalidModelType = 'INVALID_MODEL_TYPE',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

/** Added in Saleor 3.1. Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload. */
export type ExternalNotificationTrigger = {
  __typename?: 'ExternalNotificationTrigger';
  errors: Array<ExternalNotificationError>;
};

export type ExternalNotificationTriggerInput = {
  /** External event type. This field is passed to a plugin as an event type. */
  externalEventType: Scalars['String'];
  /** Additional payload that will be merged with the one based on the bussines object ID. */
  extraPayload?: InputMaybe<Scalars['JSONString']>;
  /** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
  ids: Array<Scalars['ID']>;
};

/** Obtain external access tokens for user by custom plugin. */
export type ExternalObtainAccessTokens = {
  __typename?: 'ExternalObtainAccessTokens';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars['String']>;
  errors: Array<AccountError>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars['String']>;
  /** The token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<User>;
};

/** Refresh user's access by custom plugin. */
export type ExternalRefresh = {
  __typename?: 'ExternalRefresh';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars['String']>;
  errors: Array<AccountError>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars['String']>;
  /** The token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<User>;
};

/** Verify external authentication data by plugin. */
export type ExternalVerify = {
  __typename?: 'ExternalVerify';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** Determine if authentication data is valid or not. */
  isValid: Scalars['Boolean'];
  /** User assigned to data. */
  user?: Maybe<User>;
  /** External data. */
  verifyData?: Maybe<Scalars['JSONString']>;
};

export type File = {
  __typename?: 'File';
  /** Content type of the file. */
  contentType?: Maybe<Scalars['String']>;
  /** The URL of the file. */
  url: Scalars['String'];
};

/** An enumeration. */
export enum FileTypesEnum {
  Csv = 'CSV',
  Xlsx = 'XLSX'
}

/** Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER. */
export type FileUpload = {
  __typename?: 'FileUpload';
  errors: Array<UploadError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  uploadErrors: Array<UploadError>;
  uploadedFile?: Maybe<File>;
};

/** Represents order fulfillment. */
export type Fulfillment = Node & ObjectWithMetadata & {
  __typename?: 'Fulfillment';
  created: Scalars['DateTime'];
  fulfillmentOrder: Scalars['Int'];
  id: Scalars['ID'];
  /** List of lines for the fulfillment. */
  lines?: Maybe<Array<FulfillmentLine>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  status: FulfillmentStatus;
  /** User-friendly fulfillment status. */
  statusDisplay?: Maybe<Scalars['String']>;
  trackingNumber: Scalars['String'];
  /** Warehouse from fulfillment was fulfilled. */
  warehouse?: Maybe<Warehouse>;
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Added in Saleor 3.1. Approve existing fulfillment. Requires one of the following permissions: MANAGE_ORDERS. */
export type FulfillmentApprove = {
  __typename?: 'FulfillmentApprove';
  errors: Array<OrderError>;
  /** An approved fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was approved. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** Cancels existing fulfillment and optionally restocks items. Requires one of the following permissions: MANAGE_ORDERS. */
export type FulfillmentCancel = {
  __typename?: 'FulfillmentCancel';
  errors: Array<OrderError>;
  /** A canceled fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was cancelled. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
  /** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
  warehouseId?: InputMaybe<Scalars['ID']>;
};

export type FulfillmentCanceled = {
  __typename?: 'FulfillmentCanceled';
  /** Added in Saleor 3.2. Look up a Fulfillment. Note: this feature is in a preview state and can be subject to changes at later point. */
  fulfillment?: Maybe<Fulfillment>;
};

export type FulfillmentCreated = {
  __typename?: 'FulfillmentCreated';
  /** Added in Saleor 3.2. Look up a Fulfillment. Note: this feature is in a preview state and can be subject to changes at later point. */
  fulfillment?: Maybe<Fulfillment>;
};

/** Represents line of the fulfillment. */
export type FulfillmentLine = Node & {
  __typename?: 'FulfillmentLine';
  id: Scalars['ID'];
  orderLine?: Maybe<OrderLine>;
  quantity: Scalars['Int'];
};

/** Refund products. Requires one of the following permissions: MANAGE_ORDERS. */
export type FulfillmentRefundProducts = {
  __typename?: 'FulfillmentRefundProducts';
  errors: Array<OrderError>;
  /** A refunded fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was refunded. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** Return products. Requires one of the following permissions: MANAGE_ORDERS. */
export type FulfillmentReturnProducts = {
  __typename?: 'FulfillmentReturnProducts';
  errors: Array<OrderError>;
  /** Order which fulfillment was returned. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** A replace fulfillment. */
  replaceFulfillment?: Maybe<Fulfillment>;
  /** A draft order which was created for products with replace flag. */
  replaceOrder?: Maybe<Order>;
  /** A return fulfillment. */
  returnFulfillment?: Maybe<Fulfillment>;
};

/** An enumeration. */
export enum FulfillmentStatus {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  Refunded = 'REFUNDED',
  RefundedAndReturned = 'REFUNDED_AND_RETURNED',
  Replaced = 'REPLACED',
  Returned = 'RETURNED',
  WaitingForApproval = 'WAITING_FOR_APPROVAL'
}

/** Updates a fulfillment for an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type FulfillmentUpdateTracking = {
  __typename?: 'FulfillmentUpdateTracking';
  errors: Array<OrderError>;
  /** A fulfillment with updated tracking. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order for which fulfillment was updated. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars['Boolean']>;
  /** Fulfillment tracking number. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** Payment gateway client configuration key and value pair. */
export type GatewayConfigLine = {
  __typename?: 'GatewayConfigLine';
  /** Gateway config key. */
  field: Scalars['String'];
  /** Gateway config value for key. */
  value?: Maybe<Scalars['String']>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCard = Node & ObjectWithMetadata & {
  __typename?: 'GiftCard';
  /** Added in Saleor 3.1. App which created the gift card. Requires one of the following permissions: AppPermission.MANAGE_APPS, AuthorizationFilters.OWNER. Note: this feature is in a preview state and can be subject to changes at later point. */
  app?: Maybe<App>;
  /** Added in Saleor 3.1. Slug of the channel where the gift card was bought. Note: this feature is in a preview state and can be subject to changes at later point. */
  boughtInChannel?: Maybe<Scalars['String']>;
  /** Gift card code. Can be fetched by a staff member with GiftcardPermissions.MANAGE_GIFT_CARD when gift card wasn't yet used and by the gift card owner. */
  code: Scalars['String'];
  created: Scalars['DateTime'];
  /** Added in Saleor 3.1. The user who bought or issued a gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
  createdBy?: Maybe<User>;
  /** Added in Saleor 3.1. Email address of the user who bought or issued gift card. Requires one of the following permissions: AccountPermissions.MANAGE_USERS, AuthorizationFilters.OWNER. Note: this feature is in a preview state and can be subject to changes at later point. */
  createdByEmail?: Maybe<Scalars['String']>;
  currentBalance?: Maybe<Money>;
  /** Code in format which allows displaying in a user interface. */
  displayCode: Scalars['String'];
  /**
   * End date of gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead.
   */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Added in Saleor 3.1. List of events associated with the gift card. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  events: Array<GiftCardEvent>;
  expiryDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  initialBalance?: Maybe<Money>;
  isActive: Scalars['Boolean'];
  /** Last 4 characters of gift card code. */
  last4CodeChars: Scalars['String'];
  lastUsedOn?: Maybe<Scalars['DateTime']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** Added in Saleor 3.1. Related gift card product. Note: this feature is in a preview state and can be subject to changes at later point. */
  product?: Maybe<Product>;
  /**
   * Start date of gift card.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  startDate?: Maybe<Scalars['DateTime']>;
  /** Added in Saleor 3.1. The gift card tag. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  tags: Array<GiftCardTag>;
  /** Added in Saleor 3.1. The customer who used a gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
  usedBy?: Maybe<User>;
  /** Added in Saleor 3.1. Email address of the customer who used a gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
  usedByEmail?: Maybe<Scalars['String']>;
  /**
   * The customer who bought a gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead.
   */
  user?: Maybe<User>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardEventsArgs = {
  filter?: InputMaybe<GiftCardEventFilterInput>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldArgs = {
  key: Scalars['String'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Activate a gift card. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardActivate = {
  __typename?: 'GiftCardActivate';
  errors: Array<GiftCardError>;
  /** Activated gift card. */
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

/** Added in Saleor 3.1. Adds note to the gift card. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardAddNote = {
  __typename?: 'GiftCardAddNote';
  errors: Array<GiftCardError>;
  /** Gift card note created. */
  event?: Maybe<GiftCardEvent>;
  /** Gift card with the note added. */
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardAddNoteInput = {
  /** Note message. */
  message: Scalars['String'];
};

/** Added in Saleor 3.1. Activate gift cards. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardBulkActivate = {
  __typename?: 'GiftCardBulkActivate';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
};

/** Added in Saleor 3.1. Create gift cards. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardBulkCreate = {
  __typename?: 'GiftCardBulkCreate';
  /** Returns how many objects were created. */
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
  /** List of created gift cards. */
  giftCards: Array<GiftCard>;
};

export type GiftCardBulkCreateInput = {
  /** Balance of the gift card. */
  balance: PriceInput;
  /** The number of cards to issue. */
  count: Scalars['Int'];
  /** The gift card expiry date. */
  expiryDate?: InputMaybe<Scalars['Date']>;
  /** Determine if gift card is active. */
  isActive: Scalars['Boolean'];
  /** The gift card tags. */
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/** Added in Saleor 3.1. Deactivate gift cards. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardBulkDeactivate = {
  __typename?: 'GiftCardBulkDeactivate';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
};

/** Added in Saleor 3.1. Delete gift cards. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardBulkDelete = {
  __typename?: 'GiftCardBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
};

export type GiftCardCountableConnection = {
  __typename?: 'GiftCardCountableConnection';
  edges: Array<GiftCardCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type GiftCardCountableEdge = {
  __typename?: 'GiftCardCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GiftCard;
};

/** Creates a new gift card. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardCreate = {
  __typename?: 'GiftCardCreate';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardCreateInput = {
  /** Added in Saleor 3.1. The gift card tags to add. Note: this feature is in a preview state and can be subject to changes at later point. */
  addTags?: InputMaybe<Array<Scalars['String']>>;
  /** Balance of the gift card. */
  balance: PriceInput;
  /** Added in Saleor 3.1. Slug of a channel from which the email should be sent. Note: this feature is in a preview state and can be subject to changes at later point. */
  channel?: InputMaybe<Scalars['String']>;
  /**
   * Code to use the gift card.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated.
   */
  code?: InputMaybe<Scalars['String']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: InputMaybe<Scalars['Date']>;
  /** Added in Saleor 3.1. The gift card expiry date. Note: this feature is in a preview state and can be subject to changes at later point. */
  expiryDate?: InputMaybe<Scalars['Date']>;
  /** Added in Saleor 3.1. Determine if gift card is active. Note: this feature is in a preview state and can be subject to changes at later point. */
  isActive: Scalars['Boolean'];
  /** Added in Saleor 3.1. The gift card note from the staff member. Note: this feature is in a preview state and can be subject to changes at later point. */
  note?: InputMaybe<Scalars['String']>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: InputMaybe<Scalars['Date']>;
  /** Email of the customer to whom gift card will be sent. */
  userEmail?: InputMaybe<Scalars['String']>;
};

export type GiftCardCreated = {
  __typename?: 'GiftCardCreated';
  /** Added in Saleor 3.2. Look up a gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
  giftCard?: Maybe<GiftCard>;
};

/** Deactivate a gift card. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardDeactivate = {
  __typename?: 'GiftCardDeactivate';
  errors: Array<GiftCardError>;
  /** Deactivated gift card. */
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

/** Added in Saleor 3.1. Delete gift card. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardDelete = {
  __typename?: 'GiftCardDelete';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardDeleted = {
  __typename?: 'GiftCardDeleted';
  /** Added in Saleor 3.2. Look up a gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardError = {
  __typename?: 'GiftCardError';
  /** The error code. */
  code: GiftCardErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of tag values that cause the error. */
  tags?: Maybe<Array<Scalars['String']>>;
};

/** An enumeration. */
export enum GiftCardErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  ExpiredGiftCard = 'EXPIRED_GIFT_CARD',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Added in Saleor 3.1. History log of the gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
export type GiftCardEvent = Node & {
  __typename?: 'GiftCardEvent';
  /** App that performed the action. Requires one of the following permissions: AppPermission.MANAGE_APPS, AuthorizationFilters.OWNER. */
  app?: Maybe<App>;
  /** The gift card balance. */
  balance?: Maybe<GiftCardEventBalance>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']>;
  /** Email of the customer. */
  email?: Maybe<Scalars['String']>;
  /** The gift card expiry date. */
  expiryDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  /** Content of the event. */
  message?: Maybe<Scalars['String']>;
  /** Previous gift card expiry date. */
  oldExpiryDate?: Maybe<Scalars['Date']>;
  /** The list of old gift card tags. */
  oldTags?: Maybe<Array<Scalars['String']>>;
  /** The order ID where gift card was used or bought. */
  orderId?: Maybe<Scalars['ID']>;
  /** User-friendly number of an order where gift card was used or bought. */
  orderNumber?: Maybe<Scalars['String']>;
  /** The list of gift card tags. */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Gift card event type. */
  type?: Maybe<GiftCardEventsEnum>;
  /** User who performed the action. Requires one of the following permissions: AccountPermissions.MANAGE_USERS, AccountPermissions.MANAGE_STAFF, AuthorizationFilters.OWNER. */
  user?: Maybe<User>;
};

export type GiftCardEventBalance = {
  __typename?: 'GiftCardEventBalance';
  /** Current balance of the gift card. */
  currentBalance: Money;
  /** Initial balance of the gift card. */
  initialBalance?: Maybe<Money>;
  /** Previous current balance of the gift card. */
  oldCurrentBalance?: Maybe<Money>;
  /** Previous initial balance of the gift card. */
  oldInitialBalance?: Maybe<Money>;
};

export type GiftCardEventFilterInput = {
  orders?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<GiftCardEventsEnum>;
};

/** An enumeration. */
export enum GiftCardEventsEnum {
  Activated = 'ACTIVATED',
  BalanceReset = 'BALANCE_RESET',
  Bought = 'BOUGHT',
  Deactivated = 'DEACTIVATED',
  ExpiryDateUpdated = 'EXPIRY_DATE_UPDATED',
  Issued = 'ISSUED',
  NoteAdded = 'NOTE_ADDED',
  Resent = 'RESENT',
  SentToCustomer = 'SENT_TO_CUSTOMER',
  TagsUpdated = 'TAGS_UPDATED',
  Updated = 'UPDATED',
  UsedInOrder = 'USED_IN_ORDER'
}

export type GiftCardFilterInput = {
  code?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  currentBalance?: InputMaybe<PriceRangeInput>;
  initialBalance?: InputMaybe<PriceRangeInput>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  products?: InputMaybe<Array<Scalars['ID']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  used?: InputMaybe<Scalars['Boolean']>;
  usedBy?: InputMaybe<Array<Scalars['ID']>>;
};

/** Added in Saleor 3.1. Resend a gift card. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardResend = {
  __typename?: 'GiftCardResend';
  errors: Array<GiftCardError>;
  /** Gift card which has been sent. */
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardResendInput = {
  /** Slug of a channel from which the email should be sent. */
  channel: Scalars['String'];
  /** Email to which gift card should be send. */
  email?: InputMaybe<Scalars['String']>;
  /** ID of a gift card to resend. */
  id: Scalars['ID'];
};

/** Gift card related settings from site settings. */
export type GiftCardSettings = {
  __typename?: 'GiftCardSettings';
  /** The gift card expiry period settings. */
  expiryPeriod?: Maybe<TimePeriod>;
  /** The gift card expiry type settings. */
  expiryType: GiftCardSettingsExpiryTypeEnum;
};

export type GiftCardSettingsError = {
  __typename?: 'GiftCardSettingsError';
  /** The error code. */
  code: GiftCardSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum GiftCardSettingsErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  Required = 'REQUIRED'
}

/** An enumeration. */
export enum GiftCardSettingsExpiryTypeEnum {
  ExpiryPeriod = 'EXPIRY_PERIOD',
  NeverExpire = 'NEVER_EXPIRE'
}

/** Update gift card settings. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardSettingsUpdate = {
  __typename?: 'GiftCardSettingsUpdate';
  errors: Array<GiftCardSettingsError>;
  /** Gift card settings. */
  giftCardSettings?: Maybe<GiftCardSettings>;
};

export type GiftCardSettingsUpdateInput = {
  /** Defines gift card expiry period. */
  expiryPeriod?: InputMaybe<TimePeriodInputType>;
  /** Defines gift card default expiry settings. */
  expiryType?: InputMaybe<GiftCardSettingsExpiryTypeEnum>;
};

export enum GiftCardSortField {
  /** Sort orders by current balance. */
  CurrentBalance = 'CURRENT_BALANCE',
  /** Sort orders by product. */
  Product = 'PRODUCT',
  /** Sort orders by used by. */
  UsedBy = 'USED_BY'
}

export type GiftCardSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort gift cards by the selected field. */
  field: GiftCardSortField;
};

export type GiftCardStatusChanged = {
  __typename?: 'GiftCardStatusChanged';
  /** Added in Saleor 3.2. Look up a gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
  giftCard?: Maybe<GiftCard>;
};

/** Added in Saleor 3.1. The gift card tag. Note: this feature is in a preview state and can be subject to changes at later point. */
export type GiftCardTag = Node & {
  __typename?: 'GiftCardTag';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GiftCardTagCountableConnection = {
  __typename?: 'GiftCardTagCountableConnection';
  edges: Array<GiftCardTagCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type GiftCardTagCountableEdge = {
  __typename?: 'GiftCardTagCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GiftCardTag;
};

export type GiftCardTagFilterInput = {
  search?: InputMaybe<Scalars['String']>;
};

/** Update a gift card. Requires one of the following permissions: MANAGE_GIFT_CARD. */
export type GiftCardUpdate = {
  __typename?: 'GiftCardUpdate';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardUpdateInput = {
  /** Added in Saleor 3.1. The gift card tags to add. Note: this feature is in a preview state and can be subject to changes at later point. */
  addTags?: InputMaybe<Array<Scalars['String']>>;
  /** Added in Saleor 3.1. The gift card balance amount. Note: this feature is in a preview state and can be subject to changes at later point. */
  balanceAmount?: InputMaybe<Scalars['PositiveDecimal']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: InputMaybe<Scalars['Date']>;
  /** Added in Saleor 3.1. The gift card expiry date. Note: this feature is in a preview state and can be subject to changes at later point. */
  expiryDate?: InputMaybe<Scalars['Date']>;
  /** Added in Saleor 3.1. The gift card tags to remove. Note: this feature is in a preview state and can be subject to changes at later point. */
  removeTags?: InputMaybe<Array<Scalars['String']>>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: InputMaybe<Scalars['Date']>;
};

export type GiftCardUpdated = {
  __typename?: 'GiftCardUpdated';
  /** Added in Saleor 3.2. Look up a gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
  giftCard?: Maybe<GiftCard>;
};

/** Represents permission group data. */
export type Group = Node & {
  __typename?: 'Group';
  id: Scalars['ID'];
  name: Scalars['String'];
  /** List of group permissions */
  permissions?: Maybe<Array<Permission>>;
  /** True, if the currently authenticated user has rights to manage a group. */
  userCanManage: Scalars['Boolean'];
  /** List of group users Requires one of the following permissions: MANAGE_STAFF. */
  users?: Maybe<Array<User>>;
};

export type GroupCountableConnection = {
  __typename?: 'GroupCountableConnection';
  edges: Array<GroupCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type GroupCountableEdge = {
  __typename?: 'GroupCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Group;
};

/** Represents an image. */
export type Image = {
  __typename?: 'Image';
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']>;
  /** The URL of the image. */
  url: Scalars['String'];
};

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Value less than or equal to. */
  lte?: InputMaybe<Scalars['Int']>;
};

/** Represents an Invoice. */
export type Invoice = Job & Node & ObjectWithMetadata & {
  __typename?: 'Invoice';
  createdAt: Scalars['DateTime'];
  externalUrl?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  number?: Maybe<Scalars['String']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** Job status. */
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime'];
  /** URL to download an invoice. */
  url?: Maybe<Scalars['String']>;
};


/** Represents an Invoice. */
export type InvoiceMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an Invoice. */
export type InvoiceMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Creates a ready to send invoice. Requires one of the following permissions: MANAGE_ORDERS. */
export type InvoiceCreate = {
  __typename?: 'InvoiceCreate';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceCreateInput = {
  /** Invoice number. */
  number: Scalars['String'];
  /** URL of an invoice to download. */
  url: Scalars['String'];
};

/** Deletes an invoice. Requires one of the following permissions: MANAGE_ORDERS. */
export type InvoiceDelete = {
  __typename?: 'InvoiceDelete';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceDeleted = {
  __typename?: 'InvoiceDeleted';
  /** Added in Saleor 3.2. Look up an Invoice. Note: this feature is in a preview state and can be subject to changes at later point. */
  invoice?: Maybe<Invoice>;
};

export type InvoiceError = {
  __typename?: 'InvoiceError';
  /** The error code. */
  code: InvoiceErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum InvoiceErrorCode {
  EmailNotSet = 'EMAIL_NOT_SET',
  InvalidStatus = 'INVALID_STATUS',
  NotFound = 'NOT_FOUND',
  NotReady = 'NOT_READY',
  NoInvoicePlugin = 'NO_INVOICE_PLUGIN',
  NumberNotSet = 'NUMBER_NOT_SET',
  Required = 'REQUIRED',
  UrlNotSet = 'URL_NOT_SET'
}

/** Request an invoice for the order using plugin. Requires one of the following permissions: MANAGE_ORDERS. */
export type InvoiceRequest = {
  __typename?: 'InvoiceRequest';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  /** Order related to an invoice. */
  order?: Maybe<Order>;
};

/** Requests deletion of an invoice. Requires one of the following permissions: MANAGE_ORDERS. */
export type InvoiceRequestDelete = {
  __typename?: 'InvoiceRequestDelete';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceRequested = {
  __typename?: 'InvoiceRequested';
  /** Added in Saleor 3.2. Look up an Invoice. Note: this feature is in a preview state and can be subject to changes at later point. */
  invoice?: Maybe<Invoice>;
};

/** Send an invoice notification to the customer. Requires one of the following permissions: MANAGE_ORDERS. */
export type InvoiceSendNotification = {
  __typename?: 'InvoiceSendNotification';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceSent = {
  __typename?: 'InvoiceSent';
  /** Added in Saleor 3.2. Look up an Invoice. Note: this feature is in a preview state and can be subject to changes at later point. */
  invoice?: Maybe<Invoice>;
};

/** Updates an invoice. Requires one of the following permissions: MANAGE_ORDERS. */
export type InvoiceUpdate = {
  __typename?: 'InvoiceUpdate';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type Job = {
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Job message. */
  message?: Maybe<Scalars['String']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
};

/** An enumeration. */
export enum JobStatusEnum {
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** An enumeration. */
export enum LanguageCodeEnum {
  Af = 'AF',
  AfNa = 'AF_NA',
  AfZa = 'AF_ZA',
  Agq = 'AGQ',
  AgqCm = 'AGQ_CM',
  Ak = 'AK',
  AkGh = 'AK_GH',
  Am = 'AM',
  AmEt = 'AM_ET',
  Ar = 'AR',
  ArAe = 'AR_AE',
  ArBh = 'AR_BH',
  ArDj = 'AR_DJ',
  ArDz = 'AR_DZ',
  ArEg = 'AR_EG',
  ArEh = 'AR_EH',
  ArEr = 'AR_ER',
  ArIl = 'AR_IL',
  ArIq = 'AR_IQ',
  ArJo = 'AR_JO',
  ArKm = 'AR_KM',
  ArKw = 'AR_KW',
  ArLb = 'AR_LB',
  ArLy = 'AR_LY',
  ArMa = 'AR_MA',
  ArMr = 'AR_MR',
  ArOm = 'AR_OM',
  ArPs = 'AR_PS',
  ArQa = 'AR_QA',
  ArSa = 'AR_SA',
  ArSd = 'AR_SD',
  ArSo = 'AR_SO',
  ArSs = 'AR_SS',
  ArSy = 'AR_SY',
  ArTd = 'AR_TD',
  ArTn = 'AR_TN',
  ArYe = 'AR_YE',
  As = 'AS',
  Asa = 'ASA',
  AsaTz = 'ASA_TZ',
  Ast = 'AST',
  AstEs = 'AST_ES',
  AsIn = 'AS_IN',
  Az = 'AZ',
  AzCyrl = 'AZ_CYRL',
  AzCyrlAz = 'AZ_CYRL_AZ',
  AzLatn = 'AZ_LATN',
  AzLatnAz = 'AZ_LATN_AZ',
  Bas = 'BAS',
  BasCm = 'BAS_CM',
  Be = 'BE',
  Bem = 'BEM',
  BemZm = 'BEM_ZM',
  Bez = 'BEZ',
  BezTz = 'BEZ_TZ',
  BeBy = 'BE_BY',
  Bg = 'BG',
  BgBg = 'BG_BG',
  Bm = 'BM',
  BmMl = 'BM_ML',
  Bn = 'BN',
  BnBd = 'BN_BD',
  BnIn = 'BN_IN',
  Bo = 'BO',
  BoCn = 'BO_CN',
  BoIn = 'BO_IN',
  Br = 'BR',
  Brx = 'BRX',
  BrxIn = 'BRX_IN',
  BrFr = 'BR_FR',
  Bs = 'BS',
  BsCyrl = 'BS_CYRL',
  BsCyrlBa = 'BS_CYRL_BA',
  BsLatn = 'BS_LATN',
  BsLatnBa = 'BS_LATN_BA',
  Ca = 'CA',
  CaAd = 'CA_AD',
  CaEs = 'CA_ES',
  CaEsValencia = 'CA_ES_VALENCIA',
  CaFr = 'CA_FR',
  CaIt = 'CA_IT',
  Ccp = 'CCP',
  CcpBd = 'CCP_BD',
  CcpIn = 'CCP_IN',
  Ce = 'CE',
  Ceb = 'CEB',
  CebPh = 'CEB_PH',
  CeRu = 'CE_RU',
  Cgg = 'CGG',
  CggUg = 'CGG_UG',
  Chr = 'CHR',
  ChrUs = 'CHR_US',
  Ckb = 'CKB',
  CkbIq = 'CKB_IQ',
  CkbIr = 'CKB_IR',
  Cs = 'CS',
  CsCz = 'CS_CZ',
  Cu = 'CU',
  CuRu = 'CU_RU',
  Cy = 'CY',
  CyGb = 'CY_GB',
  Da = 'DA',
  Dav = 'DAV',
  DavKe = 'DAV_KE',
  DaDk = 'DA_DK',
  DaGl = 'DA_GL',
  De = 'DE',
  DeAt = 'DE_AT',
  DeBe = 'DE_BE',
  DeCh = 'DE_CH',
  DeDe = 'DE_DE',
  DeIt = 'DE_IT',
  DeLi = 'DE_LI',
  DeLu = 'DE_LU',
  Dje = 'DJE',
  DjeNe = 'DJE_NE',
  Dsb = 'DSB',
  DsbDe = 'DSB_DE',
  Dua = 'DUA',
  DuaCm = 'DUA_CM',
  Dyo = 'DYO',
  DyoSn = 'DYO_SN',
  Dz = 'DZ',
  DzBt = 'DZ_BT',
  Ebu = 'EBU',
  EbuKe = 'EBU_KE',
  Ee = 'EE',
  EeGh = 'EE_GH',
  EeTg = 'EE_TG',
  El = 'EL',
  ElCy = 'EL_CY',
  ElGr = 'EL_GR',
  En = 'EN',
  EnAe = 'EN_AE',
  EnAg = 'EN_AG',
  EnAi = 'EN_AI',
  EnAs = 'EN_AS',
  EnAt = 'EN_AT',
  EnAu = 'EN_AU',
  EnBb = 'EN_BB',
  EnBe = 'EN_BE',
  EnBi = 'EN_BI',
  EnBm = 'EN_BM',
  EnBs = 'EN_BS',
  EnBw = 'EN_BW',
  EnBz = 'EN_BZ',
  EnCa = 'EN_CA',
  EnCc = 'EN_CC',
  EnCh = 'EN_CH',
  EnCk = 'EN_CK',
  EnCm = 'EN_CM',
  EnCx = 'EN_CX',
  EnCy = 'EN_CY',
  EnDe = 'EN_DE',
  EnDg = 'EN_DG',
  EnDk = 'EN_DK',
  EnDm = 'EN_DM',
  EnEr = 'EN_ER',
  EnFi = 'EN_FI',
  EnFj = 'EN_FJ',
  EnFk = 'EN_FK',
  EnFm = 'EN_FM',
  EnGb = 'EN_GB',
  EnGd = 'EN_GD',
  EnGg = 'EN_GG',
  EnGh = 'EN_GH',
  EnGi = 'EN_GI',
  EnGm = 'EN_GM',
  EnGu = 'EN_GU',
  EnGy = 'EN_GY',
  EnHk = 'EN_HK',
  EnIe = 'EN_IE',
  EnIl = 'EN_IL',
  EnIm = 'EN_IM',
  EnIn = 'EN_IN',
  EnIo = 'EN_IO',
  EnJe = 'EN_JE',
  EnJm = 'EN_JM',
  EnKe = 'EN_KE',
  EnKi = 'EN_KI',
  EnKn = 'EN_KN',
  EnKy = 'EN_KY',
  EnLc = 'EN_LC',
  EnLr = 'EN_LR',
  EnLs = 'EN_LS',
  EnMg = 'EN_MG',
  EnMh = 'EN_MH',
  EnMo = 'EN_MO',
  EnMp = 'EN_MP',
  EnMs = 'EN_MS',
  EnMt = 'EN_MT',
  EnMu = 'EN_MU',
  EnMw = 'EN_MW',
  EnMy = 'EN_MY',
  EnNa = 'EN_NA',
  EnNf = 'EN_NF',
  EnNg = 'EN_NG',
  EnNl = 'EN_NL',
  EnNr = 'EN_NR',
  EnNu = 'EN_NU',
  EnNz = 'EN_NZ',
  EnPg = 'EN_PG',
  EnPh = 'EN_PH',
  EnPk = 'EN_PK',
  EnPn = 'EN_PN',
  EnPr = 'EN_PR',
  EnPw = 'EN_PW',
  EnRw = 'EN_RW',
  EnSb = 'EN_SB',
  EnSc = 'EN_SC',
  EnSd = 'EN_SD',
  EnSe = 'EN_SE',
  EnSg = 'EN_SG',
  EnSh = 'EN_SH',
  EnSi = 'EN_SI',
  EnSl = 'EN_SL',
  EnSs = 'EN_SS',
  EnSx = 'EN_SX',
  EnSz = 'EN_SZ',
  EnTc = 'EN_TC',
  EnTk = 'EN_TK',
  EnTo = 'EN_TO',
  EnTt = 'EN_TT',
  EnTv = 'EN_TV',
  EnTz = 'EN_TZ',
  EnUg = 'EN_UG',
  EnUm = 'EN_UM',
  EnUs = 'EN_US',
  EnVc = 'EN_VC',
  EnVg = 'EN_VG',
  EnVi = 'EN_VI',
  EnVu = 'EN_VU',
  EnWs = 'EN_WS',
  EnZa = 'EN_ZA',
  EnZm = 'EN_ZM',
  EnZw = 'EN_ZW',
  Eo = 'EO',
  Es = 'ES',
  EsAr = 'ES_AR',
  EsBo = 'ES_BO',
  EsBr = 'ES_BR',
  EsBz = 'ES_BZ',
  EsCl = 'ES_CL',
  EsCo = 'ES_CO',
  EsCr = 'ES_CR',
  EsCu = 'ES_CU',
  EsDo = 'ES_DO',
  EsEa = 'ES_EA',
  EsEc = 'ES_EC',
  EsEs = 'ES_ES',
  EsGq = 'ES_GQ',
  EsGt = 'ES_GT',
  EsHn = 'ES_HN',
  EsIc = 'ES_IC',
  EsMx = 'ES_MX',
  EsNi = 'ES_NI',
  EsPa = 'ES_PA',
  EsPe = 'ES_PE',
  EsPh = 'ES_PH',
  EsPr = 'ES_PR',
  EsPy = 'ES_PY',
  EsSv = 'ES_SV',
  EsUs = 'ES_US',
  EsUy = 'ES_UY',
  EsVe = 'ES_VE',
  Et = 'ET',
  EtEe = 'ET_EE',
  Eu = 'EU',
  EuEs = 'EU_ES',
  Ewo = 'EWO',
  EwoCm = 'EWO_CM',
  Fa = 'FA',
  FaAf = 'FA_AF',
  FaIr = 'FA_IR',
  Ff = 'FF',
  FfAdlm = 'FF_ADLM',
  FfAdlmBf = 'FF_ADLM_BF',
  FfAdlmCm = 'FF_ADLM_CM',
  FfAdlmGh = 'FF_ADLM_GH',
  FfAdlmGm = 'FF_ADLM_GM',
  FfAdlmGn = 'FF_ADLM_GN',
  FfAdlmGw = 'FF_ADLM_GW',
  FfAdlmLr = 'FF_ADLM_LR',
  FfAdlmMr = 'FF_ADLM_MR',
  FfAdlmNe = 'FF_ADLM_NE',
  FfAdlmNg = 'FF_ADLM_NG',
  FfAdlmSl = 'FF_ADLM_SL',
  FfAdlmSn = 'FF_ADLM_SN',
  FfLatn = 'FF_LATN',
  FfLatnBf = 'FF_LATN_BF',
  FfLatnCm = 'FF_LATN_CM',
  FfLatnGh = 'FF_LATN_GH',
  FfLatnGm = 'FF_LATN_GM',
  FfLatnGn = 'FF_LATN_GN',
  FfLatnGw = 'FF_LATN_GW',
  FfLatnLr = 'FF_LATN_LR',
  FfLatnMr = 'FF_LATN_MR',
  FfLatnNe = 'FF_LATN_NE',
  FfLatnNg = 'FF_LATN_NG',
  FfLatnSl = 'FF_LATN_SL',
  FfLatnSn = 'FF_LATN_SN',
  Fi = 'FI',
  Fil = 'FIL',
  FilPh = 'FIL_PH',
  FiFi = 'FI_FI',
  Fo = 'FO',
  FoDk = 'FO_DK',
  FoFo = 'FO_FO',
  Fr = 'FR',
  FrBe = 'FR_BE',
  FrBf = 'FR_BF',
  FrBi = 'FR_BI',
  FrBj = 'FR_BJ',
  FrBl = 'FR_BL',
  FrCa = 'FR_CA',
  FrCd = 'FR_CD',
  FrCf = 'FR_CF',
  FrCg = 'FR_CG',
  FrCh = 'FR_CH',
  FrCi = 'FR_CI',
  FrCm = 'FR_CM',
  FrDj = 'FR_DJ',
  FrDz = 'FR_DZ',
  FrFr = 'FR_FR',
  FrGa = 'FR_GA',
  FrGf = 'FR_GF',
  FrGn = 'FR_GN',
  FrGp = 'FR_GP',
  FrGq = 'FR_GQ',
  FrHt = 'FR_HT',
  FrKm = 'FR_KM',
  FrLu = 'FR_LU',
  FrMa = 'FR_MA',
  FrMc = 'FR_MC',
  FrMf = 'FR_MF',
  FrMg = 'FR_MG',
  FrMl = 'FR_ML',
  FrMq = 'FR_MQ',
  FrMr = 'FR_MR',
  FrMu = 'FR_MU',
  FrNc = 'FR_NC',
  FrNe = 'FR_NE',
  FrPf = 'FR_PF',
  FrPm = 'FR_PM',
  FrRe = 'FR_RE',
  FrRw = 'FR_RW',
  FrSc = 'FR_SC',
  FrSn = 'FR_SN',
  FrSy = 'FR_SY',
  FrTd = 'FR_TD',
  FrTg = 'FR_TG',
  FrTn = 'FR_TN',
  FrVu = 'FR_VU',
  FrWf = 'FR_WF',
  FrYt = 'FR_YT',
  Fur = 'FUR',
  FurIt = 'FUR_IT',
  Fy = 'FY',
  FyNl = 'FY_NL',
  Ga = 'GA',
  GaGb = 'GA_GB',
  GaIe = 'GA_IE',
  Gd = 'GD',
  GdGb = 'GD_GB',
  Gl = 'GL',
  GlEs = 'GL_ES',
  Gsw = 'GSW',
  GswCh = 'GSW_CH',
  GswFr = 'GSW_FR',
  GswLi = 'GSW_LI',
  Gu = 'GU',
  Guz = 'GUZ',
  GuzKe = 'GUZ_KE',
  GuIn = 'GU_IN',
  Gv = 'GV',
  GvIm = 'GV_IM',
  Ha = 'HA',
  Haw = 'HAW',
  HawUs = 'HAW_US',
  HaGh = 'HA_GH',
  HaNe = 'HA_NE',
  HaNg = 'HA_NG',
  He = 'HE',
  HeIl = 'HE_IL',
  Hi = 'HI',
  HiIn = 'HI_IN',
  Hr = 'HR',
  HrBa = 'HR_BA',
  HrHr = 'HR_HR',
  Hsb = 'HSB',
  HsbDe = 'HSB_DE',
  Hu = 'HU',
  HuHu = 'HU_HU',
  Hy = 'HY',
  HyAm = 'HY_AM',
  Ia = 'IA',
  Id = 'ID',
  IdId = 'ID_ID',
  Ig = 'IG',
  IgNg = 'IG_NG',
  Ii = 'II',
  IiCn = 'II_CN',
  Is = 'IS',
  IsIs = 'IS_IS',
  It = 'IT',
  ItCh = 'IT_CH',
  ItIt = 'IT_IT',
  ItSm = 'IT_SM',
  ItVa = 'IT_VA',
  Ja = 'JA',
  JaJp = 'JA_JP',
  Jgo = 'JGO',
  JgoCm = 'JGO_CM',
  Jmc = 'JMC',
  JmcTz = 'JMC_TZ',
  Jv = 'JV',
  JvId = 'JV_ID',
  Ka = 'KA',
  Kab = 'KAB',
  KabDz = 'KAB_DZ',
  Kam = 'KAM',
  KamKe = 'KAM_KE',
  KaGe = 'KA_GE',
  Kde = 'KDE',
  KdeTz = 'KDE_TZ',
  Kea = 'KEA',
  KeaCv = 'KEA_CV',
  Khq = 'KHQ',
  KhqMl = 'KHQ_ML',
  Ki = 'KI',
  KiKe = 'KI_KE',
  Kk = 'KK',
  Kkj = 'KKJ',
  KkjCm = 'KKJ_CM',
  KkKz = 'KK_KZ',
  Kl = 'KL',
  Kln = 'KLN',
  KlnKe = 'KLN_KE',
  KlGl = 'KL_GL',
  Km = 'KM',
  KmKh = 'KM_KH',
  Kn = 'KN',
  KnIn = 'KN_IN',
  Ko = 'KO',
  Kok = 'KOK',
  KokIn = 'KOK_IN',
  KoKp = 'KO_KP',
  KoKr = 'KO_KR',
  Ks = 'KS',
  Ksb = 'KSB',
  KsbTz = 'KSB_TZ',
  Ksf = 'KSF',
  KsfCm = 'KSF_CM',
  Ksh = 'KSH',
  KshDe = 'KSH_DE',
  KsArab = 'KS_ARAB',
  KsArabIn = 'KS_ARAB_IN',
  Ku = 'KU',
  KuTr = 'KU_TR',
  Kw = 'KW',
  KwGb = 'KW_GB',
  Ky = 'KY',
  KyKg = 'KY_KG',
  Lag = 'LAG',
  LagTz = 'LAG_TZ',
  Lb = 'LB',
  LbLu = 'LB_LU',
  Lg = 'LG',
  LgUg = 'LG_UG',
  Lkt = 'LKT',
  LktUs = 'LKT_US',
  Ln = 'LN',
  LnAo = 'LN_AO',
  LnCd = 'LN_CD',
  LnCf = 'LN_CF',
  LnCg = 'LN_CG',
  Lo = 'LO',
  LoLa = 'LO_LA',
  Lrc = 'LRC',
  LrcIq = 'LRC_IQ',
  LrcIr = 'LRC_IR',
  Lt = 'LT',
  LtLt = 'LT_LT',
  Lu = 'LU',
  Luo = 'LUO',
  LuoKe = 'LUO_KE',
  Luy = 'LUY',
  LuyKe = 'LUY_KE',
  LuCd = 'LU_CD',
  Lv = 'LV',
  LvLv = 'LV_LV',
  Mai = 'MAI',
  MaiIn = 'MAI_IN',
  Mas = 'MAS',
  MasKe = 'MAS_KE',
  MasTz = 'MAS_TZ',
  Mer = 'MER',
  MerKe = 'MER_KE',
  Mfe = 'MFE',
  MfeMu = 'MFE_MU',
  Mg = 'MG',
  Mgh = 'MGH',
  MghMz = 'MGH_MZ',
  Mgo = 'MGO',
  MgoCm = 'MGO_CM',
  MgMg = 'MG_MG',
  Mi = 'MI',
  MiNz = 'MI_NZ',
  Mk = 'MK',
  MkMk = 'MK_MK',
  Ml = 'ML',
  MlIn = 'ML_IN',
  Mn = 'MN',
  Mni = 'MNI',
  MniBeng = 'MNI_BENG',
  MniBengIn = 'MNI_BENG_IN',
  MnMn = 'MN_MN',
  Mr = 'MR',
  MrIn = 'MR_IN',
  Ms = 'MS',
  MsBn = 'MS_BN',
  MsId = 'MS_ID',
  MsMy = 'MS_MY',
  MsSg = 'MS_SG',
  Mt = 'MT',
  MtMt = 'MT_MT',
  Mua = 'MUA',
  MuaCm = 'MUA_CM',
  My = 'MY',
  MyMm = 'MY_MM',
  Mzn = 'MZN',
  MznIr = 'MZN_IR',
  Naq = 'NAQ',
  NaqNa = 'NAQ_NA',
  Nb = 'NB',
  NbNo = 'NB_NO',
  NbSj = 'NB_SJ',
  Nd = 'ND',
  Nds = 'NDS',
  NdsDe = 'NDS_DE',
  NdsNl = 'NDS_NL',
  NdZw = 'ND_ZW',
  Ne = 'NE',
  NeIn = 'NE_IN',
  NeNp = 'NE_NP',
  Nl = 'NL',
  NlAw = 'NL_AW',
  NlBe = 'NL_BE',
  NlBq = 'NL_BQ',
  NlCw = 'NL_CW',
  NlNl = 'NL_NL',
  NlSr = 'NL_SR',
  NlSx = 'NL_SX',
  Nmg = 'NMG',
  NmgCm = 'NMG_CM',
  Nn = 'NN',
  Nnh = 'NNH',
  NnhCm = 'NNH_CM',
  NnNo = 'NN_NO',
  Nus = 'NUS',
  NusSs = 'NUS_SS',
  Nyn = 'NYN',
  NynUg = 'NYN_UG',
  Om = 'OM',
  OmEt = 'OM_ET',
  OmKe = 'OM_KE',
  Or = 'OR',
  OrIn = 'OR_IN',
  Os = 'OS',
  OsGe = 'OS_GE',
  OsRu = 'OS_RU',
  Pa = 'PA',
  PaArab = 'PA_ARAB',
  PaArabPk = 'PA_ARAB_PK',
  PaGuru = 'PA_GURU',
  PaGuruIn = 'PA_GURU_IN',
  Pcm = 'PCM',
  PcmNg = 'PCM_NG',
  Pl = 'PL',
  PlPl = 'PL_PL',
  Prg = 'PRG',
  Ps = 'PS',
  PsAf = 'PS_AF',
  PsPk = 'PS_PK',
  Pt = 'PT',
  PtAo = 'PT_AO',
  PtBr = 'PT_BR',
  PtCh = 'PT_CH',
  PtCv = 'PT_CV',
  PtGq = 'PT_GQ',
  PtGw = 'PT_GW',
  PtLu = 'PT_LU',
  PtMo = 'PT_MO',
  PtMz = 'PT_MZ',
  PtPt = 'PT_PT',
  PtSt = 'PT_ST',
  PtTl = 'PT_TL',
  Qu = 'QU',
  QuBo = 'QU_BO',
  QuEc = 'QU_EC',
  QuPe = 'QU_PE',
  Rm = 'RM',
  RmCh = 'RM_CH',
  Rn = 'RN',
  RnBi = 'RN_BI',
  Ro = 'RO',
  Rof = 'ROF',
  RofTz = 'ROF_TZ',
  RoMd = 'RO_MD',
  RoRo = 'RO_RO',
  Ru = 'RU',
  RuBy = 'RU_BY',
  RuKg = 'RU_KG',
  RuKz = 'RU_KZ',
  RuMd = 'RU_MD',
  RuRu = 'RU_RU',
  RuUa = 'RU_UA',
  Rw = 'RW',
  Rwk = 'RWK',
  RwkTz = 'RWK_TZ',
  RwRw = 'RW_RW',
  Sah = 'SAH',
  SahRu = 'SAH_RU',
  Saq = 'SAQ',
  SaqKe = 'SAQ_KE',
  Sat = 'SAT',
  SatOlck = 'SAT_OLCK',
  SatOlckIn = 'SAT_OLCK_IN',
  Sbp = 'SBP',
  SbpTz = 'SBP_TZ',
  Sd = 'SD',
  SdArab = 'SD_ARAB',
  SdArabPk = 'SD_ARAB_PK',
  SdDeva = 'SD_DEVA',
  SdDevaIn = 'SD_DEVA_IN',
  Se = 'SE',
  Seh = 'SEH',
  SehMz = 'SEH_MZ',
  Ses = 'SES',
  SesMl = 'SES_ML',
  SeFi = 'SE_FI',
  SeNo = 'SE_NO',
  SeSe = 'SE_SE',
  Sg = 'SG',
  SgCf = 'SG_CF',
  Shi = 'SHI',
  ShiLatn = 'SHI_LATN',
  ShiLatnMa = 'SHI_LATN_MA',
  ShiTfng = 'SHI_TFNG',
  ShiTfngMa = 'SHI_TFNG_MA',
  Si = 'SI',
  SiLk = 'SI_LK',
  Sk = 'SK',
  SkSk = 'SK_SK',
  Sl = 'SL',
  SlSi = 'SL_SI',
  Smn = 'SMN',
  SmnFi = 'SMN_FI',
  Sn = 'SN',
  SnZw = 'SN_ZW',
  So = 'SO',
  SoDj = 'SO_DJ',
  SoEt = 'SO_ET',
  SoKe = 'SO_KE',
  SoSo = 'SO_SO',
  Sq = 'SQ',
  SqAl = 'SQ_AL',
  SqMk = 'SQ_MK',
  SqXk = 'SQ_XK',
  Sr = 'SR',
  SrCyrl = 'SR_CYRL',
  SrCyrlBa = 'SR_CYRL_BA',
  SrCyrlMe = 'SR_CYRL_ME',
  SrCyrlRs = 'SR_CYRL_RS',
  SrCyrlXk = 'SR_CYRL_XK',
  SrLatn = 'SR_LATN',
  SrLatnBa = 'SR_LATN_BA',
  SrLatnMe = 'SR_LATN_ME',
  SrLatnRs = 'SR_LATN_RS',
  SrLatnXk = 'SR_LATN_XK',
  Su = 'SU',
  SuLatn = 'SU_LATN',
  SuLatnId = 'SU_LATN_ID',
  Sv = 'SV',
  SvAx = 'SV_AX',
  SvFi = 'SV_FI',
  SvSe = 'SV_SE',
  Sw = 'SW',
  SwCd = 'SW_CD',
  SwKe = 'SW_KE',
  SwTz = 'SW_TZ',
  SwUg = 'SW_UG',
  Ta = 'TA',
  TaIn = 'TA_IN',
  TaLk = 'TA_LK',
  TaMy = 'TA_MY',
  TaSg = 'TA_SG',
  Te = 'TE',
  Teo = 'TEO',
  TeoKe = 'TEO_KE',
  TeoUg = 'TEO_UG',
  TeIn = 'TE_IN',
  Tg = 'TG',
  TgTj = 'TG_TJ',
  Th = 'TH',
  ThTh = 'TH_TH',
  Ti = 'TI',
  TiEr = 'TI_ER',
  TiEt = 'TI_ET',
  Tk = 'TK',
  TkTm = 'TK_TM',
  To = 'TO',
  ToTo = 'TO_TO',
  Tr = 'TR',
  TrCy = 'TR_CY',
  TrTr = 'TR_TR',
  Tt = 'TT',
  TtRu = 'TT_RU',
  Twq = 'TWQ',
  TwqNe = 'TWQ_NE',
  Tzm = 'TZM',
  TzmMa = 'TZM_MA',
  Ug = 'UG',
  UgCn = 'UG_CN',
  Uk = 'UK',
  UkUa = 'UK_UA',
  Ur = 'UR',
  UrIn = 'UR_IN',
  UrPk = 'UR_PK',
  Uz = 'UZ',
  UzArab = 'UZ_ARAB',
  UzArabAf = 'UZ_ARAB_AF',
  UzCyrl = 'UZ_CYRL',
  UzCyrlUz = 'UZ_CYRL_UZ',
  UzLatn = 'UZ_LATN',
  UzLatnUz = 'UZ_LATN_UZ',
  Vai = 'VAI',
  VaiLatn = 'VAI_LATN',
  VaiLatnLr = 'VAI_LATN_LR',
  VaiVaii = 'VAI_VAII',
  VaiVaiiLr = 'VAI_VAII_LR',
  Vi = 'VI',
  ViVn = 'VI_VN',
  Vo = 'VO',
  Vun = 'VUN',
  VunTz = 'VUN_TZ',
  Wae = 'WAE',
  WaeCh = 'WAE_CH',
  Wo = 'WO',
  WoSn = 'WO_SN',
  Xh = 'XH',
  XhZa = 'XH_ZA',
  Xog = 'XOG',
  XogUg = 'XOG_UG',
  Yav = 'YAV',
  YavCm = 'YAV_CM',
  Yi = 'YI',
  Yo = 'YO',
  YoBj = 'YO_BJ',
  YoNg = 'YO_NG',
  Yue = 'YUE',
  YueHans = 'YUE_HANS',
  YueHansCn = 'YUE_HANS_CN',
  YueHant = 'YUE_HANT',
  YueHantHk = 'YUE_HANT_HK',
  Zgh = 'ZGH',
  ZghMa = 'ZGH_MA',
  Zh = 'ZH',
  ZhHans = 'ZH_HANS',
  ZhHansCn = 'ZH_HANS_CN',
  ZhHansHk = 'ZH_HANS_HK',
  ZhHansMo = 'ZH_HANS_MO',
  ZhHansSg = 'ZH_HANS_SG',
  ZhHant = 'ZH_HANT',
  ZhHantHk = 'ZH_HANT_HK',
  ZhHantMo = 'ZH_HANT_MO',
  ZhHantTw = 'ZH_HANT_TW',
  Zu = 'ZU',
  ZuZa = 'ZU_ZA'
}

export type LanguageDisplay = {
  __typename?: 'LanguageDisplay';
  /** ISO 639 representation of the language name. */
  code: LanguageCodeEnum;
  /** Full name of the language. */
  language: Scalars['String'];
};

export type LimitInfo = {
  __typename?: 'LimitInfo';
  /** Defines the allowed maximum resource usage, null means unlimited. */
  allowedUsage: Limits;
  /** Defines the current resource usage. */
  currentUsage: Limits;
};

export type Limits = {
  __typename?: 'Limits';
  channels?: Maybe<Scalars['Int']>;
  orders?: Maybe<Scalars['Int']>;
  productVariants?: Maybe<Scalars['Int']>;
  staffUsers?: Maybe<Scalars['Int']>;
  warehouses?: Maybe<Scalars['Int']>;
};

/** The manifest definition. */
export type Manifest = {
  __typename?: 'Manifest';
  about?: Maybe<Scalars['String']>;
  appUrl?: Maybe<Scalars['String']>;
  configurationUrl?: Maybe<Scalars['String']>;
  dataPrivacy?: Maybe<Scalars['String']>;
  dataPrivacyUrl?: Maybe<Scalars['String']>;
  extensions: Array<AppManifestExtension>;
  homepageUrl?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Permission>>;
  supportUrl?: Maybe<Scalars['String']>;
  tokenTargetUrl?: Maybe<Scalars['String']>;
  version: Scalars['String'];
};

export type Margin = {
  __typename?: 'Margin';
  start?: Maybe<Scalars['Int']>;
  stop?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum MeasurementUnitsEnum {
  AcreFt = 'ACRE_FT',
  AcreIn = 'ACRE_IN',
  Cm = 'CM',
  CubicCentimeter = 'CUBIC_CENTIMETER',
  CubicDecimeter = 'CUBIC_DECIMETER',
  CubicFoot = 'CUBIC_FOOT',
  CubicInch = 'CUBIC_INCH',
  CubicMeter = 'CUBIC_METER',
  CubicMillimeter = 'CUBIC_MILLIMETER',
  CubicYard = 'CUBIC_YARD',
  FlOz = 'FL_OZ',
  Ft = 'FT',
  G = 'G',
  Inch = 'INCH',
  Kg = 'KG',
  Km = 'KM',
  Lb = 'LB',
  Liter = 'LITER',
  M = 'M',
  Oz = 'OZ',
  Pint = 'PINT',
  Qt = 'QT',
  SqCm = 'SQ_CM',
  SqFt = 'SQ_FT',
  SqInch = 'SQ_INCH',
  SqKm = 'SQ_KM',
  SqM = 'SQ_M',
  SqYd = 'SQ_YD',
  Tonne = 'TONNE',
  Yd = 'YD'
}

/** Represents a single menu - an object that is used to help navigate through the store. */
export type Menu = Node & ObjectWithMetadata & {
  __typename?: 'Menu';
  id: Scalars['ID'];
  items?: Maybe<Array<MenuItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  slug: Scalars['String'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Deletes menus. Requires one of the following permissions: MANAGE_MENUS. */
export type MenuBulkDelete = {
  __typename?: 'MenuBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuCountableConnection = {
  __typename?: 'MenuCountableConnection';
  edges: Array<MenuCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuCountableEdge = {
  __typename?: 'MenuCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Menu;
};

/** Creates a new Menu. Requires one of the following permissions: MANAGE_MENUS. */
export type MenuCreate = {
  __typename?: 'MenuCreate';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuCreateInput = {
  /** List of menu items. */
  items?: InputMaybe<Array<MenuItemInput>>;
  /** Name of the menu. */
  name: Scalars['String'];
  /** Slug of the menu. Will be generated if not provided. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Deletes a menu. Requires one of the following permissions: MANAGE_MENUS. */
export type MenuDelete = {
  __typename?: 'MenuDelete';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuError = {
  __typename?: 'MenuError';
  /** The error code. */
  code: MenuErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum MenuErrorCode {
  CannotAssignNode = 'CANNOT_ASSIGN_NODE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidMenuItem = 'INVALID_MENU_ITEM',
  NotFound = 'NOT_FOUND',
  NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
  Required = 'REQUIRED',
  TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
  Unique = 'UNIQUE'
}

export type MenuFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Array<Scalars['String']>>;
};

export type MenuInput = {
  /** Name of the menu. */
  name?: InputMaybe<Scalars['String']>;
  /** Slug of the menu. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItem = Node & ObjectWithMetadata & {
  __typename?: 'MenuItem';
  category?: Maybe<Category>;
  children?: Maybe<Array<MenuItem>>;
  /** A collection associated with this menu item. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collection?: Maybe<Collection>;
  id: Scalars['ID'];
  level: Scalars['Int'];
  menu: Menu;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** A page associated with this menu item. Requires one of the following permissions to include unpublished items: PagePermissions.MANAGE_PAGES. */
  page?: Maybe<Page>;
  parent?: Maybe<MenuItem>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<MenuItemTranslation>;
  /** URL to the menu item. */
  url?: Maybe<Scalars['String']>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Deletes menu items. Requires one of the following permissions: MANAGE_MENUS. */
export type MenuItemBulkDelete = {
  __typename?: 'MenuItemBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuItemCountableConnection = {
  __typename?: 'MenuItemCountableConnection';
  edges: Array<MenuItemCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuItemCountableEdge = {
  __typename?: 'MenuItemCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MenuItem;
};

/** Creates a new menu item. Requires one of the following permissions: MANAGE_MENUS. */
export type MenuItemCreate = {
  __typename?: 'MenuItemCreate';
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
  /** Category to which item points. */
  category?: InputMaybe<Scalars['ID']>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars['ID']>;
  /** Menu to which item belongs. */
  menu: Scalars['ID'];
  /** Name of the menu item. */
  name: Scalars['String'];
  /** Page to which item points. */
  page?: InputMaybe<Scalars['ID']>;
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parent?: InputMaybe<Scalars['ID']>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars['String']>;
};

/** Deletes a menu item. Requires one of the following permissions: MANAGE_MENUS. */
export type MenuItemDelete = {
  __typename?: 'MenuItemDelete';
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
};

export type MenuItemInput = {
  /** Category to which item points. */
  category?: InputMaybe<Scalars['ID']>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars['ID']>;
  /** Name of the menu item. */
  name?: InputMaybe<Scalars['String']>;
  /** Page to which item points. */
  page?: InputMaybe<Scalars['ID']>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars['String']>;
};

/** Moves items of menus. Requires one of the following permissions: MANAGE_MENUS. */
export type MenuItemMove = {
  __typename?: 'MenuItemMove';
  errors: Array<MenuError>;
  /** Assigned menu to move within. */
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuItemMoveInput = {
  /** The menu item ID to move. */
  itemId: Scalars['ID'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export type MenuItemSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menu items by the selected field. */
  field: MenuItemsSortField;
};

export type MenuItemTranslatableContent = Node & {
  __typename?: 'MenuItemTranslatableContent';
  id: Scalars['ID'];
  /**
   * Represents a single item of the related menu. Can store categories, collection or pages.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  menuItem?: Maybe<MenuItem>;
  name: Scalars['String'];
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<MenuItemTranslation>;
};


export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for a menu item. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type MenuItemTranslate = {
  __typename?: 'MenuItemTranslate';
  errors: Array<TranslationError>;
  menuItem?: Maybe<MenuItem>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type MenuItemTranslation = Node & {
  __typename?: 'MenuItemTranslation';
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
};

/** Updates a menu item. Requires one of the following permissions: MANAGE_MENUS. */
export type MenuItemUpdate = {
  __typename?: 'MenuItemUpdate';
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export enum MenuItemsSortField {
  /** Sort menu items by name. */
  Name = 'NAME'
}

export enum MenuSortField {
  /** Sort menus by items count. */
  ItemsCount = 'ITEMS_COUNT',
  /** Sort menus by name. */
  Name = 'NAME'
}

export type MenuSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menus by the selected field. */
  field: MenuSortField;
};

/** Updates a menu. Requires one of the following permissions: MANAGE_MENUS. */
export type MenuUpdate = {
  __typename?: 'MenuUpdate';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MetadataError = {
  __typename?: 'MetadataError';
  /** The error code. */
  code: MetadataErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum MetadataErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  NotUpdated = 'NOT_UPDATED',
  Required = 'REQUIRED'
}

export type MetadataFilter = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value?: InputMaybe<Scalars['String']>;
};

export type MetadataInput = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};

export type MetadataItem = {
  __typename?: 'MetadataItem';
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};

/** Represents amount of money in specific currency. */
export type Money = {
  __typename?: 'Money';
  /** Amount of money. */
  amount: Scalars['Float'];
  /** Currency code. */
  currency: Scalars['String'];
};

export type MoneyInput = {
  /** Amount of money. */
  amount: Scalars['PositiveDecimal'];
  /** Currency code. */
  currency: Scalars['String'];
};

/** Represents a range of amounts of money. */
export type MoneyRange = {
  __typename?: 'MoneyRange';
  /** Lower bound of a price range. */
  start?: Maybe<Money>;
  /** Upper bound of a price range. */
  stop?: Maybe<Money>;
};

export type MoveProductInput = {
  /** The ID of the product to move. */
  productId: Scalars['ID'];
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new address for the customer. Requires one of the following permissions: AUTHENTICATED_USER. */
  accountAddressCreate?: Maybe<AccountAddressCreate>;
  /** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
  accountAddressDelete?: Maybe<AccountAddressDelete>;
  /** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
  accountAddressUpdate?: Maybe<AccountAddressUpdate>;
  /** Remove user account. Requires one of the following permissions: AUTHENTICATED_USER. */
  accountDelete?: Maybe<AccountDelete>;
  /** Register a new user. */
  accountRegister?: Maybe<AccountRegister>;
  /** Sends an email with the account removal link for the logged-in user. Requires one of the following permissions: AUTHENTICATED_USER. */
  accountRequestDeletion?: Maybe<AccountRequestDeletion>;
  /** Sets a default address for the authenticated user. Requires one of the following permissions: AUTHENTICATED_USER. */
  accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
  /** Updates the account of the logged-in user. Requires one of the following permissions: AUTHENTICATED_USER. */
  accountUpdate?: Maybe<AccountUpdate>;
  /** Creates user address. Requires one of the following permissions: MANAGE_USERS. */
  addressCreate?: Maybe<AddressCreate>;
  /** Deletes an address. Requires one of the following permissions: MANAGE_USERS. */
  addressDelete?: Maybe<AddressDelete>;
  /** Sets a default address for the given user. Requires one of the following permissions: MANAGE_USERS. */
  addressSetDefault?: Maybe<AddressSetDefault>;
  /** Updates an address. Requires one of the following permissions: MANAGE_USERS. */
  addressUpdate?: Maybe<AddressUpdate>;
  /** Activate the app. Requires one of the following permissions: MANAGE_APPS. */
  appActivate?: Maybe<AppActivate>;
  /** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  appCreate?: Maybe<AppCreate>;
  /** Deactivate the app. Requires one of the following permissions: MANAGE_APPS. */
  appDeactivate?: Maybe<AppDeactivate>;
  /** Deletes an app. Requires one of the following permissions: MANAGE_APPS. */
  appDelete?: Maybe<AppDelete>;
  /** Delete failed installation. Requires one of the following permissions: MANAGE_APPS. */
  appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
  /** Fetch and validate manifest. Requires one of the following permissions: MANAGE_APPS. */
  appFetchManifest?: Maybe<AppFetchManifest>;
  /** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  appInstall?: Maybe<AppInstall>;
  /** Retry failed installation of new app. Requires one of the following permissions: MANAGE_APPS. */
  appRetryInstall?: Maybe<AppRetryInstall>;
  /** Creates a new token. Requires one of the following permissions: MANAGE_APPS. */
  appTokenCreate?: Maybe<AppTokenCreate>;
  /** Deletes an authentication token assigned to app. Requires one of the following permissions: MANAGE_APPS. */
  appTokenDelete?: Maybe<AppTokenDelete>;
  /** Verify provided app token. */
  appTokenVerify?: Maybe<AppTokenVerify>;
  /** Updates an existing app. Requires one of the following permissions: MANAGE_APPS. */
  appUpdate?: Maybe<AppUpdate>;
  /** Assigns storefront's navigation menus. Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS. */
  assignNavigation?: Maybe<AssignNavigation>;
  /** Add shipping zone to given warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
  assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
  /** Deletes attributes. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
  attributeBulkDelete?: Maybe<AttributeBulkDelete>;
  /** Creates an attribute. */
  attributeCreate?: Maybe<AttributeCreate>;
  /** Deletes an attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  attributeDelete?: Maybe<AttributeDelete>;
  /** Reorder the values of an attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  attributeReorderValues?: Maybe<AttributeReorderValues>;
  /** Creates/updates translations for an attribute. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  attributeTranslate?: Maybe<AttributeTranslate>;
  /** Updates attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  attributeUpdate?: Maybe<AttributeUpdate>;
  /** Deletes values of attributes. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
  attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
  /** Creates a value for an attribute. Requires one of the following permissions: MANAGE_PRODUCTS. */
  attributeValueCreate?: Maybe<AttributeValueCreate>;
  /** Deletes a value of an attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  attributeValueDelete?: Maybe<AttributeValueDelete>;
  /** Creates/updates translations for an attribute value. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  attributeValueTranslate?: Maybe<AttributeValueTranslate>;
  /** Updates value of an attribute. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  attributeValueUpdate?: Maybe<AttributeValueUpdate>;
  /** Deletes categories. Requires one of the following permissions: MANAGE_PRODUCTS. */
  categoryBulkDelete?: Maybe<CategoryBulkDelete>;
  /** Creates a new category. Requires one of the following permissions: MANAGE_PRODUCTS. */
  categoryCreate?: Maybe<CategoryCreate>;
  /** Deletes a category. Requires one of the following permissions: MANAGE_PRODUCTS. */
  categoryDelete?: Maybe<CategoryDelete>;
  /** Creates/updates translations for a category. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  categoryTranslate?: Maybe<CategoryTranslate>;
  /** Updates a category. Requires one of the following permissions: MANAGE_PRODUCTS. */
  categoryUpdate?: Maybe<CategoryUpdate>;
  /** Activate a channel. Requires one of the following permissions: MANAGE_CHANNELS. */
  channelActivate?: Maybe<ChannelActivate>;
  /** Creates new channel. Requires one of the following permissions: MANAGE_CHANNELS. */
  channelCreate?: Maybe<ChannelCreate>;
  /** Deactivate a channel. Requires one of the following permissions: MANAGE_CHANNELS. */
  channelDeactivate?: Maybe<ChannelDeactivate>;
  /** Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed. Requires one of the following permissions: MANAGE_CHANNELS. */
  channelDelete?: Maybe<ChannelDelete>;
  /** Update a channel. Requires one of the following permissions: MANAGE_CHANNELS. */
  channelUpdate?: Maybe<ChannelUpdate>;
  /** Adds a gift card or a voucher to a checkout. */
  checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
  /** Update billing address in the existing checkout. */
  checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
  /** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
  checkoutComplete?: Maybe<CheckoutComplete>;
  /** Create a new checkout. */
  checkoutCreate?: Maybe<CheckoutCreate>;
  /** Sets the customer as the owner of the checkout. Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER. */
  checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
  /** Removes the user assigned as the owner of the checkout. Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER. */
  checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
  /** Added in Saleor 3.1. Updates the delivery method (shipping method or pick up point) of the checkout. Note: this feature is in a preview state and can be subject to changes at later point. */
  checkoutDeliveryMethodUpdate?: Maybe<CheckoutDeliveryMethodUpdate>;
  /** Updates email address in the existing checkout object. */
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
  /** Update language code in the existing checkout. */
  checkoutLanguageCodeUpdate?: Maybe<CheckoutLanguageCodeUpdate>;
  /**
   * Deletes a CheckoutLine.
   * @deprecated DEPRECATED: Will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead.
   */
  checkoutLineDelete?: Maybe<CheckoutLineDelete>;
  /** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
  checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
  /** Deletes checkout lines. */
  checkoutLinesDelete?: Maybe<CheckoutLinesDelete>;
  /** Updates checkout line in the existing checkout. */
  checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
  /** Create a new payment for given checkout. */
  checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
  /** Remove a gift card or a voucher from a checkout. */
  checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
  /** Update shipping address in the existing checkout. */
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
  /**
   * Updates the shipping method of the checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead.
   */
  checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
  /** Adds products to a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
  collectionAddProducts?: Maybe<CollectionAddProducts>;
  /** Deletes collections. Requires one of the following permissions: MANAGE_PRODUCTS. */
  collectionBulkDelete?: Maybe<CollectionBulkDelete>;
  /** Manage collection's availability in channels. Requires one of the following permissions: MANAGE_PRODUCTS. */
  collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>;
  /** Creates a new collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
  collectionCreate?: Maybe<CollectionCreate>;
  /** Deletes a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
  collectionDelete?: Maybe<CollectionDelete>;
  /** Remove products from a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
  collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
  /** Reorder the products of a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
  collectionReorderProducts?: Maybe<CollectionReorderProducts>;
  /** Creates/updates translations for a collection. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  collectionTranslate?: Maybe<CollectionTranslate>;
  /** Updates a collection. Requires one of the following permissions: MANAGE_PRODUCTS. */
  collectionUpdate?: Maybe<CollectionUpdate>;
  /** Confirm user account with token sent by email during registration. */
  confirmAccount?: Maybe<ConfirmAccount>;
  /** Confirm the email change of the logged-in user. Requires one of the following permissions: AUTHENTICATED_USER. */
  confirmEmailChange?: Maybe<ConfirmEmailChange>;
  /** Creates new warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
  createWarehouse?: Maybe<WarehouseCreate>;
  /** Deletes customers. Requires one of the following permissions: MANAGE_USERS. */
  customerBulkDelete?: Maybe<CustomerBulkDelete>;
  /** Creates a new customer. Requires one of the following permissions: MANAGE_USERS. */
  customerCreate?: Maybe<CustomerCreate>;
  /** Deletes a customer. Requires one of the following permissions: MANAGE_USERS. */
  customerDelete?: Maybe<CustomerDelete>;
  /** Updates an existing customer. Requires one of the following permissions: MANAGE_USERS. */
  customerUpdate?: Maybe<CustomerUpdate>;
  /** Delete metadata of an object. To use it, you need to have access to the modified object. */
  deleteMetadata?: Maybe<DeleteMetadata>;
  /** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
  /** Deletes selected warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
  deleteWarehouse?: Maybe<WarehouseDelete>;
  /** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec Requires one of the following permissions: MANAGE_PRODUCTS. */
  digitalContentCreate?: Maybe<DigitalContentCreate>;
  /** Remove digital content assigned to given variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
  digitalContentDelete?: Maybe<DigitalContentDelete>;
  /** Update digital content. Requires one of the following permissions: MANAGE_PRODUCTS. */
  digitalContentUpdate?: Maybe<DigitalContentUpdate>;
  /** Generate new URL to digital content. Requires one of the following permissions: MANAGE_PRODUCTS. */
  digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
  /** Deletes draft orders. Requires one of the following permissions: MANAGE_ORDERS. */
  draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
  /** Completes creating an order. Requires one of the following permissions: MANAGE_ORDERS. */
  draftOrderComplete?: Maybe<DraftOrderComplete>;
  /** Creates a new draft order. Requires one of the following permissions: MANAGE_ORDERS. */
  draftOrderCreate?: Maybe<DraftOrderCreate>;
  /** Deletes a draft order. Requires one of the following permissions: MANAGE_ORDERS. */
  draftOrderDelete?: Maybe<DraftOrderDelete>;
  /**
   * Deletes order lines. Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
  /** Updates a draft order. Requires one of the following permissions: MANAGE_ORDERS. */
  draftOrderUpdate?: Maybe<DraftOrderUpdate>;
  /** Retries event delivery. Requires one of the following permissions: MANAGE_APPS. */
  eventDeliveryRetry?: Maybe<EventDeliveryRetry>;
  /** Added in Saleor 3.1. Export gift cards to csv file. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  exportGiftCards?: Maybe<ExportGiftCards>;
  /** Export products to csv file. Requires one of the following permissions: MANAGE_PRODUCTS. */
  exportProducts?: Maybe<ExportProducts>;
  /** Prepare external authentication url for user by custom plugin. */
  externalAuthenticationUrl?: Maybe<ExternalAuthenticationUrl>;
  /** Logout user by custom plugin. */
  externalLogout?: Maybe<ExternalLogout>;
  /** Added in Saleor 3.1. Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload. */
  externalNotificationTrigger?: Maybe<ExternalNotificationTrigger>;
  /** Obtain external access tokens for user by custom plugin. */
  externalObtainAccessTokens?: Maybe<ExternalObtainAccessTokens>;
  /** Refresh user's access by custom plugin. */
  externalRefresh?: Maybe<ExternalRefresh>;
  /** Verify external authentication data by plugin. */
  externalVerify?: Maybe<ExternalVerify>;
  /** Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER. */
  fileUpload?: Maybe<FileUpload>;
  /** Activate a gift card. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardActivate?: Maybe<GiftCardActivate>;
  /** Added in Saleor 3.1. Adds note to the gift card. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardAddNote?: Maybe<GiftCardAddNote>;
  /** Added in Saleor 3.1. Activate gift cards. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardBulkActivate?: Maybe<GiftCardBulkActivate>;
  /** Added in Saleor 3.1. Create gift cards. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardBulkCreate?: Maybe<GiftCardBulkCreate>;
  /** Added in Saleor 3.1. Deactivate gift cards. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardBulkDeactivate?: Maybe<GiftCardBulkDeactivate>;
  /** Added in Saleor 3.1. Delete gift cards. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardBulkDelete?: Maybe<GiftCardBulkDelete>;
  /** Creates a new gift card. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardCreate?: Maybe<GiftCardCreate>;
  /** Deactivate a gift card. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardDeactivate?: Maybe<GiftCardDeactivate>;
  /** Added in Saleor 3.1. Delete gift card. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardDelete?: Maybe<GiftCardDelete>;
  /** Added in Saleor 3.1. Resend a gift card. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardResend?: Maybe<GiftCardResend>;
  /** Update gift card settings. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardSettingsUpdate?: Maybe<GiftCardSettingsUpdate>;
  /** Update a gift card. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardUpdate?: Maybe<GiftCardUpdate>;
  /** Creates a ready to send invoice. Requires one of the following permissions: MANAGE_ORDERS. */
  invoiceCreate?: Maybe<InvoiceCreate>;
  /** Deletes an invoice. Requires one of the following permissions: MANAGE_ORDERS. */
  invoiceDelete?: Maybe<InvoiceDelete>;
  /** Request an invoice for the order using plugin. Requires one of the following permissions: MANAGE_ORDERS. */
  invoiceRequest?: Maybe<InvoiceRequest>;
  /** Requests deletion of an invoice. Requires one of the following permissions: MANAGE_ORDERS. */
  invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
  /** Send an invoice notification to the customer. Requires one of the following permissions: MANAGE_ORDERS. */
  invoiceSendNotification?: Maybe<InvoiceSendNotification>;
  /** Updates an invoice. Requires one of the following permissions: MANAGE_ORDERS. */
  invoiceUpdate?: Maybe<InvoiceUpdate>;
  /** Deletes menus. Requires one of the following permissions: MANAGE_MENUS. */
  menuBulkDelete?: Maybe<MenuBulkDelete>;
  /** Creates a new Menu. Requires one of the following permissions: MANAGE_MENUS. */
  menuCreate?: Maybe<MenuCreate>;
  /** Deletes a menu. Requires one of the following permissions: MANAGE_MENUS. */
  menuDelete?: Maybe<MenuDelete>;
  /** Deletes menu items. Requires one of the following permissions: MANAGE_MENUS. */
  menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
  /** Creates a new menu item. Requires one of the following permissions: MANAGE_MENUS. */
  menuItemCreate?: Maybe<MenuItemCreate>;
  /** Deletes a menu item. Requires one of the following permissions: MANAGE_MENUS. */
  menuItemDelete?: Maybe<MenuItemDelete>;
  /** Moves items of menus. Requires one of the following permissions: MANAGE_MENUS. */
  menuItemMove?: Maybe<MenuItemMove>;
  /** Creates/updates translations for a menu item. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  menuItemTranslate?: Maybe<MenuItemTranslate>;
  /** Updates a menu item. Requires one of the following permissions: MANAGE_MENUS. */
  menuItemUpdate?: Maybe<MenuItemUpdate>;
  /** Updates a menu. Requires one of the following permissions: MANAGE_MENUS. */
  menuUpdate?: Maybe<MenuUpdate>;
  /** Adds note to the order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderAddNote?: Maybe<OrderAddNote>;
  /** Cancels orders. Requires one of the following permissions: MANAGE_ORDERS. */
  orderBulkCancel?: Maybe<OrderBulkCancel>;
  /** Cancel an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderCancel?: Maybe<OrderCancel>;
  /** Capture an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderCapture?: Maybe<OrderCapture>;
  /** Confirms an unconfirmed order by changing status to unfulfilled. Requires one of the following permissions: MANAGE_ORDERS. */
  orderConfirm?: Maybe<OrderConfirm>;
  /** Added in Saleor 3.2. Create new order from existing checkout. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: HANDLE_CHECKOUTS. */
  orderCreateFromCheckout?: Maybe<OrderCreateFromCheckout>;
  /** Adds discount to the order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderDiscountAdd?: Maybe<OrderDiscountAdd>;
  /** Remove discount from the order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderDiscountDelete?: Maybe<OrderDiscountDelete>;
  /** Update discount for the order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderDiscountUpdate?: Maybe<OrderDiscountUpdate>;
  /** Creates new fulfillments for an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderFulfill?: Maybe<OrderFulfill>;
  /** Added in Saleor 3.1. Approve existing fulfillment. Requires one of the following permissions: MANAGE_ORDERS. */
  orderFulfillmentApprove?: Maybe<FulfillmentApprove>;
  /** Cancels existing fulfillment and optionally restocks items. Requires one of the following permissions: MANAGE_ORDERS. */
  orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
  /** Refund products. Requires one of the following permissions: MANAGE_ORDERS. */
  orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>;
  /** Return products. Requires one of the following permissions: MANAGE_ORDERS. */
  orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>;
  /** Updates a fulfillment for an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
  /** Deletes an order line from an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderLineDelete?: Maybe<OrderLineDelete>;
  /** Remove discount applied to the order line. Requires one of the following permissions: MANAGE_ORDERS. */
  orderLineDiscountRemove?: Maybe<OrderLineDiscountRemove>;
  /** Update discount for the order line. Requires one of the following permissions: MANAGE_ORDERS. */
  orderLineDiscountUpdate?: Maybe<OrderLineDiscountUpdate>;
  /** Updates an order line of an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderLineUpdate?: Maybe<OrderLineUpdate>;
  /** Create order lines for an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderLinesCreate?: Maybe<OrderLinesCreate>;
  /** Mark order as manually paid. Requires one of the following permissions: MANAGE_ORDERS. */
  orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
  /** Refund an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderRefund?: Maybe<OrderRefund>;
  /** Update shop order settings. Requires one of the following permissions: MANAGE_ORDERS. */
  orderSettingsUpdate?: Maybe<OrderSettingsUpdate>;
  /** Updates an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderUpdate?: Maybe<OrderUpdate>;
  /** Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed. Requires one of the following permissions: MANAGE_ORDERS. */
  orderUpdateShipping?: Maybe<OrderUpdateShipping>;
  /** Void an order. Requires one of the following permissions: MANAGE_ORDERS. */
  orderVoid?: Maybe<OrderVoid>;
  /** Assign attributes to a given page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
  pageAttributeAssign?: Maybe<PageAttributeAssign>;
  /** Unassign attributes from a given page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
  pageAttributeUnassign?: Maybe<PageAttributeUnassign>;
  /** Deletes pages. Requires one of the following permissions: MANAGE_PAGES. */
  pageBulkDelete?: Maybe<PageBulkDelete>;
  /** Publish pages. Requires one of the following permissions: MANAGE_PAGES. */
  pageBulkPublish?: Maybe<PageBulkPublish>;
  /** Creates a new page. Requires one of the following permissions: MANAGE_PAGES. */
  pageCreate?: Maybe<PageCreate>;
  /** Deletes a page. Requires one of the following permissions: MANAGE_PAGES. */
  pageDelete?: Maybe<PageDelete>;
  /** Reorder page attribute values. Requires one of the following permissions: MANAGE_PAGES. */
  pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>;
  /** Creates/updates translations for a page. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  pageTranslate?: Maybe<PageTranslate>;
  /** Delete page types. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
  pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>;
  /** Create a new page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
  pageTypeCreate?: Maybe<PageTypeCreate>;
  /** Delete a page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
  pageTypeDelete?: Maybe<PageTypeDelete>;
  /** Reorder the attributes of a page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
  pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>;
  /** Update page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
  pageTypeUpdate?: Maybe<PageTypeUpdate>;
  /** Updates an existing page. Requires one of the following permissions: MANAGE_PAGES. */
  pageUpdate?: Maybe<PageUpdate>;
  /** Change the password of the logged in user. Requires one of the following permissions: AUTHENTICATED_USER. */
  passwordChange?: Maybe<PasswordChange>;
  /** Captures the authorized payment amount. Requires one of the following permissions: MANAGE_ORDERS. */
  paymentCapture?: Maybe<PaymentCapture>;
  /** Check payment balance. */
  paymentCheckBalance?: Maybe<PaymentCheckBalance>;
  /** Initializes payment process when it is required by gateway. */
  paymentInitialize?: Maybe<PaymentInitialize>;
  /** Refunds the captured payment amount. Requires one of the following permissions: MANAGE_ORDERS. */
  paymentRefund?: Maybe<PaymentRefund>;
  /** Voids the authorized payment. Requires one of the following permissions: MANAGE_ORDERS. */
  paymentVoid?: Maybe<PaymentVoid>;
  /** Create new permission group. Requires one of the following permissions: MANAGE_STAFF. */
  permissionGroupCreate?: Maybe<PermissionGroupCreate>;
  /** Delete permission group. Requires one of the following permissions: MANAGE_STAFF. */
  permissionGroupDelete?: Maybe<PermissionGroupDelete>;
  /** Update permission group. Requires one of the following permissions: MANAGE_STAFF. */
  permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
  /** Update plugin configuration. Requires one of the following permissions: MANAGE_PLUGINS. */
  pluginUpdate?: Maybe<PluginUpdate>;
  /** Assign attributes to a given product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  productAttributeAssign?: Maybe<ProductAttributeAssign>;
  /** Added in Saleor 3.1. Update attributes assigned to product variant for given product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  productAttributeAssignmentUpdate?: Maybe<ProductAttributeAssignmentUpdate>;
  /** Un-assign attributes from a given product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  productAttributeUnassign?: Maybe<ProductAttributeUnassign>;
  /** Deletes products. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productBulkDelete?: Maybe<ProductBulkDelete>;
  /** Manage product's availability in channels. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>;
  /** Creates a new product. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productCreate?: Maybe<ProductCreate>;
  /** Deletes a product. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productDelete?: Maybe<ProductDelete>;
  /** Deletes product media. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productMediaBulkDelete?: Maybe<ProductMediaBulkDelete>;
  /** Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec Requires one of the following permissions: MANAGE_PRODUCTS. */
  productMediaCreate?: Maybe<ProductMediaCreate>;
  /** Deletes a product media. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productMediaDelete?: Maybe<ProductMediaDelete>;
  /** Changes ordering of the product media. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productMediaReorder?: Maybe<ProductMediaReorder>;
  /** Updates a product media. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productMediaUpdate?: Maybe<ProductMediaUpdate>;
  /** Reorder product attribute values. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>;
  /** Creates/updates translations for a product. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  productTranslate?: Maybe<ProductTranslate>;
  /** Deletes product types. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
  /** Creates a new product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  productTypeCreate?: Maybe<ProductTypeCreate>;
  /** Deletes a product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  productTypeDelete?: Maybe<ProductTypeDelete>;
  /** Reorder the attributes of a product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
  /** Updates an existing product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  productTypeUpdate?: Maybe<ProductTypeUpdate>;
  /** Updates an existing product. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productUpdate?: Maybe<ProductUpdate>;
  /** Creates product variants for a given product. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
  /** Deletes product variants. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
  /** Manage product variant prices in channels. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>;
  /** Creates a new variant for a product. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantCreate?: Maybe<ProductVariantCreate>;
  /** Deletes a product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantDelete?: Maybe<ProductVariantDelete>;
  /** Added in Saleor 3.1. Deactivates product variant preorder. It changes all preorder allocation into regular allocation. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantPreorderDeactivate?: Maybe<ProductVariantPreorderDeactivate>;
  /** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantReorder?: Maybe<ProductVariantReorder>;
  /** Reorder product variant attribute values. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>;
  /** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
  /** Creates stocks for product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
  /** Delete stocks from product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
  /** Update stocks for product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
  /** Creates/updates translations for a product variant. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  productVariantTranslate?: Maybe<ProductVariantTranslate>;
  /** Updates an existing variant for product. Requires one of the following permissions: MANAGE_PRODUCTS. */
  productVariantUpdate?: Maybe<ProductVariantUpdate>;
  /** Request email change of the logged in user. Requires one of the following permissions: AUTHENTICATED_USER. */
  requestEmailChange?: Maybe<RequestEmailChange>;
  /** Sends an email with the account password modification link. */
  requestPasswordReset?: Maybe<RequestPasswordReset>;
  /** Deletes sales. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  saleBulkDelete?: Maybe<SaleBulkDelete>;
  /** Adds products, categories, collections to a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
  /** Removes products, categories, collections from a sale. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
  /** Manage sale's availability in channels. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>;
  /** Creates a new sale. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  saleCreate?: Maybe<SaleCreate>;
  /** Deletes a sale. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  saleDelete?: Maybe<SaleDelete>;
  /** Creates/updates translations for a sale. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  saleTranslate?: Maybe<SaleTranslate>;
  /** Updates a sale. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  saleUpdate?: Maybe<SaleUpdate>;
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  setPassword?: Maybe<SetPassword>;
  /** Manage shipping method's availability in channels. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>;
  /** Deletes shipping prices. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
  /** Creates a new shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingPriceCreate?: Maybe<ShippingPriceCreate>;
  /** Deletes a shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingPriceDelete?: Maybe<ShippingPriceDelete>;
  /** Exclude products from shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>;
  /** Remove product from excluded list for shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>;
  /** Creates/updates translations for a shipping method. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
  /** Updates a new shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
  /** Deletes shipping zones. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
  /** Creates a new shipping zone. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingZoneCreate?: Maybe<ShippingZoneCreate>;
  /** Deletes a shipping zone. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingZoneDelete?: Maybe<ShippingZoneDelete>;
  /** Updates a new shipping zone. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
  /** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. Requires one of the following permissions: MANAGE_SETTINGS. */
  shopAddressUpdate?: Maybe<ShopAddressUpdate>;
  /** Updates site domain of the shop. Requires one of the following permissions: MANAGE_SETTINGS. */
  shopDomainUpdate?: Maybe<ShopDomainUpdate>;
  /** Fetch tax rates. Requires one of the following permissions: MANAGE_SETTINGS. */
  shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
  /** Creates/updates translations for shop settings. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
  /** Updates shop settings. Requires one of the following permissions: MANAGE_SETTINGS. */
  shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
  /** Deletes staff users. Requires one of the following permissions: MANAGE_STAFF. */
  staffBulkDelete?: Maybe<StaffBulkDelete>;
  /** Creates a new staff user. Requires one of the following permissions: MANAGE_STAFF. */
  staffCreate?: Maybe<StaffCreate>;
  /** Deletes a staff user. Requires one of the following permissions: MANAGE_STAFF. */
  staffDelete?: Maybe<StaffDelete>;
  /** Creates a new staff notification recipient. Requires one of the following permissions: MANAGE_SETTINGS. */
  staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
  /** Delete staff notification recipient. Requires one of the following permissions: MANAGE_SETTINGS. */
  staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
  /** Updates a staff notification recipient. Requires one of the following permissions: MANAGE_SETTINGS. */
  staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
  /** Updates an existing staff user. Requires one of the following permissions: MANAGE_STAFF. */
  staffUpdate?: Maybe<StaffUpdate>;
  /** Create JWT token. */
  tokenCreate?: Maybe<CreateToken>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
  tokenRefresh?: Maybe<RefreshToken>;
  /** Verify JWT token. */
  tokenVerify?: Maybe<VerifyToken>;
  /** Deactivate all JWT tokens of the currently authenticated user. Requires one of the following permissions: AUTHENTICATED_USER. */
  tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
  /** Remove shipping zone from given warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
  unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
  /** Updates metadata of an object. To use it, you need to have access to the modified object. */
  updateMetadata?: Maybe<UpdateMetadata>;
  /** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
  /** Updates given warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
  updateWarehouse?: Maybe<WarehouseUpdate>;
  /** Deletes a user avatar. Only for staff members. Requires one of the following permissions: AUTHENTICATED_STAFF_USER. */
  userAvatarDelete?: Maybe<UserAvatarDelete>;
  /** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec Requires one of the following permissions: AUTHENTICATED_STAFF_USER. */
  userAvatarUpdate?: Maybe<UserAvatarUpdate>;
  /** Activate or deactivate users. Requires one of the following permissions: MANAGE_USERS. */
  userBulkSetActive?: Maybe<UserBulkSetActive>;
  /** Assign an media to a product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
  variantMediaAssign?: Maybe<VariantMediaAssign>;
  /** Unassign an media from a product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
  variantMediaUnassign?: Maybe<VariantMediaUnassign>;
  /** Deletes vouchers. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  voucherBulkDelete?: Maybe<VoucherBulkDelete>;
  /** Adds products, categories, collections to a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
  /** Removes products, categories, collections from a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
  /** Manage voucher's availability in channels. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>;
  /** Creates a new voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  voucherCreate?: Maybe<VoucherCreate>;
  /** Deletes a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  voucherDelete?: Maybe<VoucherDelete>;
  /** Creates/updates translations for a voucher. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  voucherTranslate?: Maybe<VoucherTranslate>;
  /** Updates a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  voucherUpdate?: Maybe<VoucherUpdate>;
  /** Creates a new webhook subscription. Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP. */
  webhookCreate?: Maybe<WebhookCreate>;
  /** Deletes a webhook subscription. Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP. */
  webhookDelete?: Maybe<WebhookDelete>;
  /** Updates a webhook subscription. Requires one of the following permissions: MANAGE_APPS. */
  webhookUpdate?: Maybe<WebhookUpdate>;
};


export type MutationAccountAddressCreateArgs = {
  input: AddressInput;
  type?: InputMaybe<AddressTypeEnum>;
};


export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAccountDeleteArgs = {
  token: Scalars['String'];
};


export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput;
};


export type MutationAccountRequestDeletionArgs = {
  channel?: InputMaybe<Scalars['String']>;
  redirectUrl: Scalars['String'];
};


export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID'];
  type: AddressTypeEnum;
};


export type MutationAccountUpdateArgs = {
  input: AccountInput;
};


export type MutationAddressCreateArgs = {
  input: AddressInput;
  userId: Scalars['ID'];
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID'];
  type: AddressTypeEnum;
  userId: Scalars['ID'];
};


export type MutationAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAppActivateArgs = {
  id: Scalars['ID'];
};


export type MutationAppCreateArgs = {
  input: AppInput;
};


export type MutationAppDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationAppDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID'];
};


export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String'];
};


export type MutationAppInstallArgs = {
  input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationAppTokenCreateArgs = {
  input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationAppUpdateArgs = {
  id: Scalars['ID'];
  input: AppInput;
};


export type MutationAssignNavigationArgs = {
  menu?: InputMaybe<Scalars['ID']>;
  navigationType: NavigationType;
};


export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationAttributeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
};


export type MutationAttributeTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeUpdateArgs = {
  id: Scalars['ID'];
  input: AttributeUpdateInput;
};


export type MutationAttributeValueBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID'];
  input: AttributeValueTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeValueUpdateArgs = {
  id: Scalars['ID'];
  input: AttributeValueUpdateInput;
};


export type MutationCategoryBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
  parent?: InputMaybe<Scalars['ID']>;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCategoryTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCategoryUpdateArgs = {
  id: Scalars['ID'];
  input: CategoryInput;
};


export type MutationChannelActivateArgs = {
  id: Scalars['ID'];
};


export type MutationChannelCreateArgs = {
  input: ChannelCreateInput;
};


export type MutationChannelDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ChannelDeleteInput>;
};


export type MutationChannelUpdateArgs = {
  id: Scalars['ID'];
  input: ChannelUpdateInput;
};


export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  promoCode: Scalars['String'];
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput;
  checkoutId?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutCompleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  paymentData?: InputMaybe<Scalars['JSONString']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
  storeSource?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
};


export type MutationCheckoutCustomerAttachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  customerId?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutCustomerDetachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutDeliveryMethodUpdateArgs = {
  deliveryMethodId?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLanguageCodeUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCodeEnum;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLineDeleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  lineId?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesAddArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  lines: Array<CheckoutLineInput>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesDeleteArgs = {
  linesIds: Array<Scalars['ID']>;
  token: Scalars['UUID'];
};


export type MutationCheckoutLinesUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  lines: Array<CheckoutLineUpdateInput>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutPaymentCreateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  input: PaymentInput;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  promoCode?: InputMaybe<Scalars['String']>;
  promoCodeId?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  shippingAddress: AddressInput;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  shippingMethodId: Scalars['ID'];
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Scalars['ID']>;
};


export type MutationCollectionBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationCollectionChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: CollectionChannelListingUpdateInput;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Scalars['ID']>;
};


export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID'];
  moves: Array<MoveProductInput>;
};


export type MutationCollectionTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionUpdateArgs = {
  id: Scalars['ID'];
  input: CollectionInput;
};


export type MutationConfirmAccountArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationConfirmEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput;
};


export type MutationCustomerBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationCustomerCreateArgs = {
  input: UserCreateInput;
};


export type MutationCustomerDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCustomerUpdateArgs = {
  id: Scalars['ID'];
  input: CustomerInput;
};


export type MutationDeleteMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID'];
};


export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput;
};


export type MutationDraftOrderBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDraftOrderUpdateArgs = {
  id: Scalars['ID'];
  input: DraftOrderInput;
};


export type MutationEventDeliveryRetryArgs = {
  id: Scalars['ID'];
};


export type MutationExportGiftCardsArgs = {
  input: ExportGiftCardsInput;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationExternalAuthenticationUrlArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalLogoutArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalNotificationTriggerArgs = {
  channel: Scalars['String'];
  input: ExternalNotificationTriggerInput;
  pluginId?: InputMaybe<Scalars['String']>;
};


export type MutationExternalObtainAccessTokensArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalRefreshArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalVerifyArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationGiftCardActivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardAddNoteArgs = {
  id: Scalars['ID'];
  input: GiftCardAddNoteInput;
};


export type MutationGiftCardBulkActivateArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationGiftCardBulkCreateArgs = {
  input: GiftCardBulkCreateInput;
};


export type MutationGiftCardBulkDeactivateArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationGiftCardBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput;
};


export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardResendArgs = {
  input: GiftCardResendInput;
};


export type MutationGiftCardSettingsUpdateArgs = {
  input: GiftCardSettingsUpdateInput;
};


export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID'];
  input: GiftCardUpdateInput;
};


export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput;
  orderId: Scalars['ID'];
};


export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceRequestArgs = {
  number?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
};


export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceSendNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateInvoiceInput;
};


export type MutationMenuBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuItemBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID'];
  moves: Array<MenuItemMoveInput>;
};


export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID'];
  input: MenuItemInput;
};


export type MutationMenuUpdateArgs = {
  id: Scalars['ID'];
  input: MenuInput;
};


export type MutationOrderAddNoteArgs = {
  input: OrderAddNoteInput;
  order: Scalars['ID'];
};


export type MutationOrderBulkCancelArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationOrderCancelArgs = {
  id: Scalars['ID'];
};


export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderConfirmArgs = {
  id: Scalars['ID'];
};


export type MutationOrderCreateFromCheckoutArgs = {
  id: Scalars['ID'];
  removeCheckout?: InputMaybe<Scalars['Boolean']>;
};


export type MutationOrderDiscountAddArgs = {
  input: OrderDiscountCommonInput;
  orderId: Scalars['ID'];
};


export type MutationOrderDiscountDeleteArgs = {
  discountId: Scalars['ID'];
};


export type MutationOrderDiscountUpdateArgs = {
  discountId: Scalars['ID'];
  input: OrderDiscountCommonInput;
};


export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput;
  order?: InputMaybe<Scalars['ID']>;
};


export type MutationOrderFulfillmentApproveArgs = {
  allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  notifyCustomer: Scalars['Boolean'];
};


export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<FulfillmentCancelInput>;
};


export type MutationOrderFulfillmentRefundProductsArgs = {
  input: OrderRefundProductsInput;
  order: Scalars['ID'];
};


export type MutationOrderFulfillmentReturnProductsArgs = {
  input: OrderReturnProductsInput;
  order: Scalars['ID'];
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID'];
  input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderLineDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationOrderLineDiscountRemoveArgs = {
  orderLineId: Scalars['ID'];
};


export type MutationOrderLineDiscountUpdateArgs = {
  input: OrderDiscountCommonInput;
  orderLineId: Scalars['ID'];
};


export type MutationOrderLineUpdateArgs = {
  id: Scalars['ID'];
  input: OrderLineInput;
};


export type MutationOrderLinesCreateArgs = {
  id: Scalars['ID'];
  input: Array<OrderLineCreateInput>;
};


export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID'];
  transactionReference?: InputMaybe<Scalars['String']>;
};


export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderSettingsUpdateArgs = {
  input: OrderSettingsUpdateInput;
};


export type MutationOrderUpdateArgs = {
  id: Scalars['ID'];
  input: OrderUpdateInput;
};


export type MutationOrderUpdateShippingArgs = {
  input: OrderUpdateShippingInput;
  order: Scalars['ID'];
};


export type MutationOrderVoidArgs = {
  id: Scalars['ID'];
};


export type MutationPageAttributeAssignArgs = {
  attributeIds: Array<Scalars['ID']>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPageBulkPublishArgs = {
  ids: Array<Scalars['ID']>;
  isPublished: Scalars['Boolean'];
};


export type MutationPageCreateArgs = {
  input: PageCreateInput;
};


export type MutationPageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPageReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
  pageId: Scalars['ID'];
};


export type MutationPageTranslateArgs = {
  id: Scalars['ID'];
  input: PageTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPageTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPageTypeCreateArgs = {
  input: PageTypeCreateInput;
};


export type MutationPageTypeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPageTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageTypeUpdateArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: PageTypeUpdateInput;
};


export type MutationPageUpdateArgs = {
  id: Scalars['ID'];
  input: PageInput;
};


export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationPaymentCaptureArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentCheckBalanceArgs = {
  input: PaymentCheckBalanceInput;
};


export type MutationPaymentInitializeArgs = {
  channel?: InputMaybe<Scalars['String']>;
  gateway: Scalars['String'];
  paymentData?: InputMaybe<Scalars['JSONString']>;
};


export type MutationPaymentRefundArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID'];
};


export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID'];
  input: PermissionGroupUpdateInput;
};


export type MutationPluginUpdateArgs = {
  channelId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  input: PluginUpdateInput;
};


export type MutationProductAttributeAssignArgs = {
  operations: Array<ProductAttributeAssignInput>;
  productTypeId: Scalars['ID'];
};


export type MutationProductAttributeAssignmentUpdateArgs = {
  operations: Array<ProductAttributeAssignmentUpdateInput>;
  productTypeId: Scalars['ID'];
};


export type MutationProductAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']>;
  productTypeId: Scalars['ID'];
};


export type MutationProductBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: ProductChannelListingUpdateInput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductMediaBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductMediaCreateArgs = {
  input: ProductMediaCreateInput;
};


export type MutationProductMediaDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductMediaReorderArgs = {
  mediaIds: Array<Scalars['ID']>;
  productId: Scalars['ID'];
};


export type MutationProductMediaUpdateArgs = {
  id: Scalars['ID'];
  input: ProductMediaUpdateInput;
};


export type MutationProductReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
  productId: Scalars['ID'];
};


export type MutationProductTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  productTypeId: Scalars['ID'];
  type: ProductAttributeType;
};


export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID'];
  input: ProductTypeInput;
};


export type MutationProductUpdateArgs = {
  id: Scalars['ID'];
  input: ProductInput;
};


export type MutationProductVariantBulkCreateArgs = {
  product: Scalars['ID'];
  variants: Array<ProductVariantBulkCreateInput>;
};


export type MutationProductVariantBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductVariantChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: Array<ProductVariantChannelListingAddInput>;
};


export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductVariantPreorderDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationProductVariantReorderArgs = {
  moves: Array<ReorderInput>;
  productId: Scalars['ID'];
};


export type MutationProductVariantReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationProductVariantStocksCreateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantStocksDeleteArgs = {
  variantId: Scalars['ID'];
  warehouseIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductVariantUpdateArgs = {
  id: Scalars['ID'];
  input: ProductVariantInput;
};


export type MutationRequestEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']>;
  newEmail: Scalars['String'];
  password: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
  channel?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationSaleBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: SaleChannelListingInput;
};


export type MutationSaleCreateArgs = {
  input: SaleInput;
};


export type MutationSaleDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationSaleTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationSaleUpdateArgs = {
  id: Scalars['ID'];
  input: SaleInput;
};


export type MutationSetPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationShippingMethodChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingMethodChannelListingInput;
};


export type MutationShippingPriceBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingPriceExcludeProductsArgs = {
  id: Scalars['ID'];
  input: ShippingPriceExcludeProductsInput;
};


export type MutationShippingPriceRemoveProductFromExcludeArgs = {
  id: Scalars['ID'];
  products: Array<Scalars['ID']>;
};


export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID'];
  input: ShippingPriceTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingPriceInput;
};


export type MutationShippingZoneBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingZoneUpdateInput;
};


export type MutationShopAddressUpdateArgs = {
  input?: InputMaybe<AddressInput>;
};


export type MutationShopDomainUpdateArgs = {
  input?: InputMaybe<SiteDomainInput>;
};


export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput;
};


export type MutationStaffBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationStaffCreateArgs = {
  input: StaffCreateInput;
};


export type MutationStaffDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID'];
  input: StaffNotificationRecipientInput;
};


export type MutationStaffUpdateArgs = {
  id: Scalars['ID'];
  input: StaffUpdateInput;
};


export type MutationTokenCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['ID'];
  input: WarehouseUpdateInput;
};


export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload'];
};


export type MutationUserBulkSetActiveArgs = {
  ids: Array<Scalars['ID']>;
  isActive: Scalars['Boolean'];
};


export type MutationVariantMediaAssignArgs = {
  mediaId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationVariantMediaUnassignArgs = {
  mediaId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationVoucherBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherChannelListingInput;
};


export type MutationVoucherCreateArgs = {
  input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationVoucherTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationVoucherUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['ID'];
  input: WebhookUpdateInput;
};

export type NameTranslationInput = {
  name?: InputMaybe<Scalars['String']>;
};

export enum NavigationType {
  /** Main storefront navigation. */
  Main = 'MAIN',
  /** Secondary storefront navigation. */
  Secondary = 'SECONDARY'
}

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type ObjectWithMetadata = {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
};


export type ObjectWithMetadataMetafieldArgs = {
  key: Scalars['String'];
};


export type ObjectWithMetadataMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ObjectWithMetadataPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type ObjectWithMetadataPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Represents an order in the shop. */
export type Order = Node & ObjectWithMetadata & {
  __typename?: 'Order';
  /** List of actions that can be performed in the current state of an order. */
  actions: Array<OrderAction>;
  /** Added in Saleor 3.1. Collection points that can be used for this order. Note: this feature is in a preview state and can be subject to changes at later point. */
  availableCollectionPoints: Array<Warehouse>;
  /**
   * Shipping methods that can be used with this order.
   * @deprecated Use `shippingMethods`, this field will be removed in 4.0
   */
  availableShippingMethods?: Maybe<Array<ShippingMethod>>;
  /** Billing address. Requires one of the following permissions to view the full data: OrderPermissions.MANAGE_ORDERS, AuthorizationFilters.OWNER. */
  billingAddress?: Maybe<Address>;
  /** Informs whether a draft order can be finalized(turned into a regular order). */
  canFinalize: Scalars['Boolean'];
  channel: Channel;
  collectionPointName?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  customerNote: Scalars['String'];
  /** Added in Saleor 3.1. The delivery method selected for this checkout. Note: this feature is in a preview state and can be subject to changes at later point. */
  deliveryMethod?: Maybe<DeliveryMethod>;
  /**
   * Returns applied discount.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  discount?: Maybe<Money>;
  /**
   * Discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  discountName?: Maybe<Scalars['String']>;
  /** List of all discounts assigned to the order. */
  discounts: Array<OrderDiscount>;
  displayGrossPrices: Scalars['Boolean'];
  /** List of errors that occurred during order validation. */
  errors: Array<OrderError>;
  /** List of events associated with the order. Requires one of the following permissions: MANAGE_ORDERS. */
  events: Array<OrderEvent>;
  /** List of shipments for the order. */
  fulfillments: Array<Fulfillment>;
  /** List of user gift cards. */
  giftCards: Array<GiftCard>;
  id: Scalars['ID'];
  /** List of order invoices. Requires one of the following permissions: OrderPermissions.MANAGE_ORDERS, AuthorizationFilters.OWNER. */
  invoices: Array<Invoice>;
  /** Informs if an order is fully paid. */
  isPaid: Scalars['Boolean'];
  /** Returns True, if order requires shipping. */
  isShippingRequired: Scalars['Boolean'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
  languageCode: Scalars['String'];
  /** Order language code. */
  languageCodeEnum: LanguageCodeEnum;
  /** List of order lines. */
  lines: Array<OrderLine>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** User-friendly number of an order. */
  number: Scalars['String'];
  /** The order origin. */
  origin: OrderOriginEnum;
  /** The ID of the order that was the base for this order. */
  original?: Maybe<Scalars['ID']>;
  /** Internal payment status. */
  paymentStatus: PaymentChargeStatusEnum;
  /** User-friendly payment status. */
  paymentStatusDisplay: Scalars['String'];
  /** List of payments for the order. */
  payments: Array<Payment>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  redirectUrl?: Maybe<Scalars['String']>;
  /** Shipping address. Requires one of the following permissions to view the full data: OrderPermissions.MANAGE_ORDERS, AuthorizationFilters.OWNER. */
  shippingAddress?: Maybe<Address>;
  /**
   * Shipping method for this order.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethodName?: Maybe<Scalars['String']>;
  /** Shipping methods related to this order. */
  shippingMethods: Array<ShippingMethod>;
  /** Total price of shipping. */
  shippingPrice: TaxedMoney;
  shippingTaxRate: Scalars['Float'];
  status: OrderStatus;
  /** User-friendly order status. */
  statusDisplay: Scalars['String'];
  /** The sum of line prices not including shipping. */
  subtotal: TaxedMoney;
  /** @deprecated This field will be removed in Saleor 4.0. Use `id` instead. */
  token: Scalars['String'];
  /** Total amount of the order. */
  total: TaxedMoney;
  /** Amount authorized for the order. */
  totalAuthorized: Money;
  /** The difference between the paid and the order total amount. */
  totalBalance: Money;
  /** Amount captured by payment. */
  totalCaptured: Money;
  trackingClientId: Scalars['String'];
  /**
   * Translated discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  translatedDiscountName?: Maybe<Scalars['String']>;
  /** Undiscounted total amount of the order. */
  undiscountedTotal: TaxedMoney;
  updatedAt: Scalars['DateTime'];
  /** User who placed the order. This field is set only for orders placed by authenticated users. Requires one of the following permissions: AccountPermissions.MANAGE_USERS, OrderPermissions.MANAGE_ORDERS, AuthorizationFilters.OWNER. */
  user?: Maybe<User>;
  /** Email address of the customer. Requires the following permissions to access the full data: OrderPermissions.MANAGE_ORDERS, AuthorizationFilters.OWNER */
  userEmail?: Maybe<Scalars['String']>;
  voucher?: Maybe<Voucher>;
  weight: Weight;
};


/** Represents an order in the shop. */
export type OrderMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an order in the shop. */
export type OrderMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export enum OrderAction {
  /** Represents the capture action. */
  Capture = 'CAPTURE',
  /** Represents a mark-as-paid action. */
  MarkAsPaid = 'MARK_AS_PAID',
  /** Represents a refund action. */
  Refund = 'REFUND',
  /** Represents a void action. */
  Void = 'VOID'
}

/** Adds note to the order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderAddNote = {
  __typename?: 'OrderAddNote';
  errors: Array<OrderError>;
  /** Order note created. */
  event?: Maybe<OrderEvent>;
  /** Order with the note added. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderAddNoteInput = {
  /** Note message. */
  message: Scalars['String'];
};

/** Cancels orders. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderBulkCancel = {
  __typename?: 'OrderBulkCancel';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** Cancel an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderCancel = {
  __typename?: 'OrderCancel';
  errors: Array<OrderError>;
  /** Canceled order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderCancelled = {
  __typename?: 'OrderCancelled';
  /** Added in Saleor 3.2. Look up an order. Note: this feature is in a preview state and can be subject to changes at later point. */
  order?: Maybe<Order>;
};

/** Capture an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderCapture = {
  __typename?: 'OrderCapture';
  errors: Array<OrderError>;
  /** Captured order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** Confirms an unconfirmed order by changing status to unfulfilled. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderConfirm = {
  __typename?: 'OrderConfirm';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderConfirmed = {
  __typename?: 'OrderConfirmed';
  /** Added in Saleor 3.2. Look up an order. Note: this feature is in a preview state and can be subject to changes at later point. */
  order?: Maybe<Order>;
};

export type OrderCountableConnection = {
  __typename?: 'OrderCountableConnection';
  edges: Array<OrderCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderCountableEdge = {
  __typename?: 'OrderCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Order;
};

/** Added in Saleor 3.2. Create new order from existing checkout. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: HANDLE_CHECKOUTS. */
export type OrderCreateFromCheckout = {
  __typename?: 'OrderCreateFromCheckout';
  errors: Array<OrderCreateFromCheckoutError>;
  /** Placed order. */
  order?: Maybe<Order>;
};

export type OrderCreateFromCheckoutError = {
  __typename?: 'OrderCreateFromCheckoutError';
  /** The error code. */
  code: OrderCreateFromCheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** List of line Ids which cause the error. */
  lines?: Maybe<Array<Scalars['ID']>>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of variant IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum OrderCreateFromCheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelInactive = 'CHANNEL_INACTIVE',
  CheckoutNotFound = 'CHECKOUT_NOT_FOUND',
  EmailNotSet = 'EMAIL_NOT_SET',
  GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NoLines = 'NO_LINES',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  TaxError = 'TAX_ERROR',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE'
}

export type OrderCreated = {
  __typename?: 'OrderCreated';
  /** Added in Saleor 3.2. Look up an order. Note: this feature is in a preview state and can be subject to changes at later point. */
  order?: Maybe<Order>;
};

export enum OrderDirection {
  /** Specifies an ascending sort order. */
  Asc = 'ASC',
  /** Specifies a descending sort order. */
  Desc = 'DESC'
}

/** Contains all details related to the applied discount to the order. */
export type OrderDiscount = Node & {
  __typename?: 'OrderDiscount';
  /** Returns amount of discount. */
  amount: Money;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** Explanation for the applied discount. Requires one of the following permissions: MANAGE_ORDERS. */
  reason?: Maybe<Scalars['String']>;
  translatedName?: Maybe<Scalars['String']>;
  type: OrderDiscountType;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal'];
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum;
};

/** Adds discount to the order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderDiscountAdd = {
  __typename?: 'OrderDiscountAdd';
  errors: Array<OrderError>;
  /** Order which has been discounted. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderDiscountCommonInput = {
  /** Explanation for the applied discount. */
  reason?: InputMaybe<Scalars['String']>;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal'];
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum;
};

/** Remove discount from the order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderDiscountDelete = {
  __typename?: 'OrderDiscountDelete';
  errors: Array<OrderError>;
  /** Order which has removed discount. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** An enumeration. */
export enum OrderDiscountType {
  Manual = 'MANUAL',
  Voucher = 'VOUCHER'
}

/** Update discount for the order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderDiscountUpdate = {
  __typename?: 'OrderDiscountUpdate';
  errors: Array<OrderError>;
  /** Order which has been discounted. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderDraftFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
};

export type OrderError = {
  __typename?: 'OrderError';
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: OrderErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of order line IDs that cause the error. */
  orderLines?: Maybe<Array<Scalars['ID']>>;
  /** List of product variants that are associated with the error */
  variants?: Maybe<Array<Scalars['ID']>>;
  /** Warehouse ID which causes the error. */
  warehouse?: Maybe<Scalars['ID']>;
};

/** An enumeration. */
export enum OrderErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
  CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
  CannotDelete = 'CANNOT_DELETE',
  CannotDiscount = 'CANNOT_DISCOUNT',
  CannotFulfillUnpaidOrder = 'CANNOT_FULFILL_UNPAID_ORDER',
  CannotRefund = 'CANNOT_REFUND',
  CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
  ChannelInactive = 'CHANNEL_INACTIVE',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  FulfillOrderLine = 'FULFILL_ORDER_LINE',
  GiftCardLine = 'GIFT_CARD_LINE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidQuantity = 'INVALID_QUANTITY',
  NotAvailableInChannel = 'NOT_AVAILABLE_IN_CHANNEL',
  NotEditable = 'NOT_EDITABLE',
  NotFound = 'NOT_FOUND',
  OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
  PaymentError = 'PAYMENT_ERROR',
  PaymentMissing = 'PAYMENT_MISSING',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  Required = 'REQUIRED',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
  TaxError = 'TAX_ERROR',
  Unique = 'UNIQUE',
  VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
  ZeroQuantity = 'ZERO_QUANTITY'
}

/** History log of the order. */
export type OrderEvent = Node & {
  __typename?: 'OrderEvent';
  /** Amount of money. */
  amount?: Maybe<Scalars['Float']>;
  /** App that performed the action. Requires of of the following permissions: AppPermission.MANAGE_APPS, OrderPermissions.MANAGE_ORDERS, AuthorizationFilters.OWNER. */
  app?: Maybe<App>;
  /** Composed ID of the Fulfillment. */
  composedId?: Maybe<Scalars['String']>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']>;
  /** The discount applied to the order. */
  discount?: Maybe<OrderEventDiscountObject>;
  /** Email of the customer. */
  email?: Maybe<Scalars['String']>;
  /** Type of an email sent to the customer. */
  emailType?: Maybe<OrderEventsEmailsEnum>;
  /** The lines fulfilled. */
  fulfilledItems?: Maybe<Array<FulfillmentLine>>;
  id: Scalars['ID'];
  /** Number of an invoice related to the order. */
  invoiceNumber?: Maybe<Scalars['String']>;
  /** The concerned lines. */
  lines?: Maybe<Array<OrderEventOrderLineObject>>;
  /** Content of the event. */
  message?: Maybe<Scalars['String']>;
  /** User-friendly number of an order. */
  orderNumber?: Maybe<Scalars['String']>;
  /** List of oversold lines names. */
  oversoldItems?: Maybe<Array<Scalars['String']>>;
  /** The payment gateway of the payment. */
  paymentGateway?: Maybe<Scalars['String']>;
  /** The payment ID from the payment gateway. */
  paymentId?: Maybe<Scalars['String']>;
  /** Number of items. */
  quantity?: Maybe<Scalars['Int']>;
  /** The order which is related to this order. */
  relatedOrder?: Maybe<Order>;
  /** Define if shipping costs were included to the refund. */
  shippingCostsIncluded?: Maybe<Scalars['Boolean']>;
  /** The transaction reference of captured payment. */
  transactionReference?: Maybe<Scalars['String']>;
  /** Order event type. */
  type?: Maybe<OrderEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<User>;
  /** The warehouse were items were restocked. */
  warehouse?: Maybe<Warehouse>;
};

export type OrderEventCountableConnection = {
  __typename?: 'OrderEventCountableConnection';
  edges: Array<OrderEventCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderEventCountableEdge = {
  __typename?: 'OrderEventCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: OrderEvent;
};

export type OrderEventDiscountObject = {
  __typename?: 'OrderEventDiscountObject';
  /** Returns amount of discount. */
  amount?: Maybe<Money>;
  /** Returns amount of discount. */
  oldAmount?: Maybe<Money>;
  /** Value of the discount. Can store fixed value or percent value. */
  oldValue?: Maybe<Scalars['PositiveDecimal']>;
  /** Type of the discount: fixed or percent. */
  oldValueType?: Maybe<DiscountValueTypeEnum>;
  /** Explanation for the applied discount. */
  reason?: Maybe<Scalars['String']>;
  /** Value of the discount. Can store fixed value or percent value. */
  value: Scalars['PositiveDecimal'];
  /** Type of the discount: fixed or percent. */
  valueType: DiscountValueTypeEnum;
};

export type OrderEventOrderLineObject = {
  __typename?: 'OrderEventOrderLineObject';
  /** The discount applied to the order line. */
  discount?: Maybe<OrderEventDiscountObject>;
  /** The variant name. */
  itemName?: Maybe<Scalars['String']>;
  /** The order line. */
  orderLine?: Maybe<OrderLine>;
  /** The variant quantity. */
  quantity?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum OrderEventsEmailsEnum {
  Confirmed = 'CONFIRMED',
  DigitalLinks = 'DIGITAL_LINKS',
  FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
  OrderCancel = 'ORDER_CANCEL',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  OrderRefund = 'ORDER_REFUND',
  PaymentConfirmation = 'PAYMENT_CONFIRMATION',
  ShippingConfirmation = 'SHIPPING_CONFIRMATION',
  TrackingUpdated = 'TRACKING_UPDATED'
}

/** An enumeration. */
export enum OrderEventsEnum {
  AddedProducts = 'ADDED_PRODUCTS',
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  DraftCreated = 'DRAFT_CREATED',
  DraftCreatedFromReplace = 'DRAFT_CREATED_FROM_REPLACE',
  EmailSent = 'EMAIL_SENT',
  ExternalServiceNotification = 'EXTERNAL_SERVICE_NOTIFICATION',
  FulfillmentAwaitsApproval = 'FULFILLMENT_AWAITS_APPROVAL',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
  FulfillmentRefunded = 'FULFILLMENT_REFUNDED',
  FulfillmentReplaced = 'FULFILLMENT_REPLACED',
  FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
  FulfillmentReturned = 'FULFILLMENT_RETURNED',
  InvoiceGenerated = 'INVOICE_GENERATED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  InvoiceUpdated = 'INVOICE_UPDATED',
  NoteAdded = 'NOTE_ADDED',
  OrderDiscountAdded = 'ORDER_DISCOUNT_ADDED',
  OrderDiscountAutomaticallyUpdated = 'ORDER_DISCOUNT_AUTOMATICALLY_UPDATED',
  OrderDiscountDeleted = 'ORDER_DISCOUNT_DELETED',
  OrderDiscountUpdated = 'ORDER_DISCOUNT_UPDATED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderLineDiscountRemoved = 'ORDER_LINE_DISCOUNT_REMOVED',
  OrderLineDiscountUpdated = 'ORDER_LINE_DISCOUNT_UPDATED',
  OrderLineProductDeleted = 'ORDER_LINE_PRODUCT_DELETED',
  OrderLineVariantDeleted = 'ORDER_LINE_VARIANT_DELETED',
  OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
  OrderReplacementCreated = 'ORDER_REPLACEMENT_CREATED',
  Other = 'OTHER',
  OversoldItems = 'OVERSOLD_ITEMS',
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  PaymentCaptured = 'PAYMENT_CAPTURED',
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentRefunded = 'PAYMENT_REFUNDED',
  PaymentVoided = 'PAYMENT_VOIDED',
  Placed = 'PLACED',
  PlacedFromDraft = 'PLACED_FROM_DRAFT',
  RemovedProducts = 'REMOVED_PRODUCTS',
  TrackingUpdated = 'TRACKING_UPDATED',
  UpdatedAddress = 'UPDATED_ADDRESS'
}

export type OrderFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']>;
  giftCardBought?: InputMaybe<Scalars['Boolean']>;
  giftCardUsed?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  isClickAndCollect?: InputMaybe<Scalars['Boolean']>;
  isPreorder?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  paymentStatus?: InputMaybe<Array<PaymentChargeStatusEnum>>;
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<OrderStatusFilter>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/** Creates new fulfillments for an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderFulfill = {
  __typename?: 'OrderFulfill';
  errors: Array<OrderError>;
  /** List of created fulfillments. */
  fulfillments?: Maybe<Array<Fulfillment>>;
  /** Fulfilled order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderFulfillInput = {
  /** If true, then allow proceed fulfillment when stock is exceeded. */
  allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']>;
  /** List of items informing how to fulfill the order. */
  lines: Array<OrderFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars['Boolean']>;
};

export type OrderFulfillLineInput = {
  /** The ID of the order line. */
  orderLineId?: InputMaybe<Scalars['ID']>;
  /** List of stock items to create. */
  stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars['Int'];
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID'];
};

export type OrderFulfilled = {
  __typename?: 'OrderFulfilled';
  /** Added in Saleor 3.2. Look up an order. Note: this feature is in a preview state and can be subject to changes at later point. */
  order?: Maybe<Order>;
};

export type OrderFullyPaid = {
  __typename?: 'OrderFullyPaid';
  /** Added in Saleor 3.2. Look up an order. Note: this feature is in a preview state and can be subject to changes at later point. */
  order?: Maybe<Order>;
};

/** Represents order line of particular order. */
export type OrderLine = Node & {
  __typename?: 'OrderLine';
  /** List of allocations across warehouses. Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS. */
  allocations?: Maybe<Array<Allocation>>;
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  id: Scalars['ID'];
  isShippingRequired: Scalars['Boolean'];
  productName: Scalars['String'];
  productSku?: Maybe<Scalars['String']>;
  productVariantId?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  quantityFulfilled: Scalars['Int'];
  /** Added in Saleor 3.1. A quantity of items remaining to be fulfilled. */
  quantityToFulfill: Scalars['Int'];
  taxRate: Scalars['Float'];
  /** The main thumbnail for the ordered product. */
  thumbnail?: Maybe<Image>;
  /** Price of the order line. */
  totalPrice: TaxedMoney;
  /** Product name in the customer's language */
  translatedProductName: Scalars['String'];
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String'];
  /** Price of the single item in the order line without applied an order line discount. */
  undiscountedUnitPrice: TaxedMoney;
  /** The discount applied to the single order line. */
  unitDiscount: Money;
  unitDiscountReason?: Maybe<Scalars['String']>;
  /** Type of the discount: fixed or percent */
  unitDiscountType?: Maybe<DiscountValueTypeEnum>;
  /** Value of the discount. Can store fixed value or percent value */
  unitDiscountValue: Scalars['PositiveDecimal'];
  /** Price of the single item in the order line. */
  unitPrice: TaxedMoney;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  variant?: Maybe<ProductVariant>;
  variantName: Scalars['String'];
};


/** Represents order line of particular order. */
export type OrderLineThumbnailArgs = {
  size?: InputMaybe<Scalars['Int']>;
};

export type OrderLineCreateInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
  /** Product variant ID. */
  variantId: Scalars['ID'];
};

/** Deletes an order line from an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderLineDelete = {
  __typename?: 'OrderLineDelete';
  errors: Array<OrderError>;
  /** A related order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** An order line that was deleted. */
  orderLine?: Maybe<OrderLine>;
};

/** Remove discount applied to the order line. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderLineDiscountRemove = {
  __typename?: 'OrderLineDiscountRemove';
  errors: Array<OrderError>;
  /** Order which is related to line which has removed discount. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** Order line which has removed discount. */
  orderLine?: Maybe<OrderLine>;
};

/** Update discount for the order line. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderLineDiscountUpdate = {
  __typename?: 'OrderLineDiscountUpdate';
  errors: Array<OrderError>;
  /** Order which is related to the discounted line. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** Order line which has been discounted. */
  orderLine?: Maybe<OrderLine>;
};

export type OrderLineInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
};

/** Updates an order line of an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderLineUpdate = {
  __typename?: 'OrderLineUpdate';
  errors: Array<OrderError>;
  /** Related order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

/** Create order lines for an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderLinesCreate = {
  __typename?: 'OrderLinesCreate';
  errors: Array<OrderError>;
  /** Related order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** List of added order lines. */
  orderLines?: Maybe<Array<OrderLine>>;
};

/** Mark order as manually paid. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderMarkAsPaid = {
  __typename?: 'OrderMarkAsPaid';
  errors: Array<OrderError>;
  /** Order marked as paid. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** An enumeration. */
export enum OrderOriginEnum {
  Checkout = 'CHECKOUT',
  Draft = 'DRAFT',
  Reissue = 'REISSUE'
}

/** Refund an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderRefund = {
  __typename?: 'OrderRefund';
  errors: Array<OrderError>;
  /** A refunded order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderRefundFulfillmentLineInput = {
  /** The ID of the fulfillment line to refund. */
  fulfillmentLineId: Scalars['ID'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int'];
};

export type OrderRefundLineInput = {
  /** The ID of the order line to refund. */
  orderLineId: Scalars['ID'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int'];
};

export type OrderRefundProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: InputMaybe<Scalars['PositiveDecimal']>;
  /** List of fulfilled lines to refund. */
  fulfillmentLines?: InputMaybe<Array<OrderRefundFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: InputMaybe<Scalars['Boolean']>;
  /** List of unfulfilled lines to refund. */
  orderLines?: InputMaybe<Array<OrderRefundLineInput>>;
};

export type OrderReturnFulfillmentLineInput = {
  /** The ID of the fulfillment line to return. */
  fulfillmentLineId: Scalars['ID'];
  /** The number of items to be returned. */
  quantity: Scalars['Int'];
  /** Determines, if the line should be added to replace order. */
  replace?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnLineInput = {
  /** The ID of the order line to return. */
  orderLineId: Scalars['ID'];
  /** The number of items to be returned. */
  quantity: Scalars['Int'];
  /** Determines, if the line should be added to replace order. */
  replace?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: InputMaybe<Scalars['PositiveDecimal']>;
  /** List of fulfilled lines to return. */
  fulfillmentLines?: InputMaybe<Array<OrderReturnFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: InputMaybe<Scalars['Boolean']>;
  /** List of unfulfilled lines to return. */
  orderLines?: InputMaybe<Array<OrderReturnLineInput>>;
  /** If true, Saleor will call refund action for all lines. */
  refund?: InputMaybe<Scalars['Boolean']>;
};

/** Order related settings from site settings. */
export type OrderSettings = {
  __typename?: 'OrderSettings';
  automaticallyConfirmAllNewOrders: Scalars['Boolean'];
  automaticallyFulfillNonShippableGiftCard: Scalars['Boolean'];
};

export type OrderSettingsError = {
  __typename?: 'OrderSettingsError';
  /** The error code. */
  code: OrderSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum OrderSettingsErrorCode {
  Invalid = 'INVALID'
}

/** Update shop order settings. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderSettingsUpdate = {
  __typename?: 'OrderSettingsUpdate';
  errors: Array<OrderSettingsError>;
  /** Order settings. */
  orderSettings?: Maybe<OrderSettings>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderSettingsErrors: Array<OrderSettingsError>;
};

export type OrderSettingsUpdateInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. */
  automaticallyConfirmAllNewOrders?: InputMaybe<Scalars['Boolean']>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
  automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars['Boolean']>;
};

export enum OrderSortField {
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  CreatedAt = 'CREATED_AT',
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  CreationDate = 'CREATION_DATE',
  /** Sort orders by customer. */
  Customer = 'CUSTOMER',
  /** Sort orders by fulfillment status. */
  FulfillmentStatus = 'FULFILLMENT_STATUS',
  /** Sort orders by last modified at. */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Sort orders by number. */
  Number = 'NUMBER',
  /** Sort orders by payment. */
  Payment = 'PAYMENT'
}

export type OrderSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort orders by the selected field. */
  field: OrderSortField;
};

/** An enumeration. */
export enum OrderStatus {
  Canceled = 'CANCELED',
  Draft = 'DRAFT',
  Fulfilled = 'FULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  PartiallyReturned = 'PARTIALLY_RETURNED',
  Returned = 'RETURNED',
  Unconfirmed = 'UNCONFIRMED',
  Unfulfilled = 'UNFULFILLED'
}

export enum OrderStatusFilter {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  ReadyToCapture = 'READY_TO_CAPTURE',
  ReadyToFulfill = 'READY_TO_FULFILL',
  Unconfirmed = 'UNCONFIRMED',
  Unfulfilled = 'UNFULFILLED'
}

/** Updates an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderUpdate = {
  __typename?: 'OrderUpdate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderUpdateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']>;
};

/** Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderUpdateShipping = {
  __typename?: 'OrderUpdateShipping';
  errors: Array<OrderError>;
  /** Order with updated shipping method. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
  /** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']>;
};

export type OrderUpdated = {
  __typename?: 'OrderUpdated';
  /** Added in Saleor 3.2. Look up an order. Note: this feature is in a preview state and can be subject to changes at later point. */
  order?: Maybe<Order>;
};

/** Void an order. Requires one of the following permissions: MANAGE_ORDERS. */
export type OrderVoid = {
  __typename?: 'OrderVoid';
  errors: Array<OrderError>;
  /** A voided order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type Page = Node & ObjectWithMetadata & {
  __typename?: 'Page';
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  /** Content of the page (JSON). */
  content?: Maybe<Scalars['JSONString']>;
  /**
   * Content of the page (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson: Scalars['JSONString'];
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  isPublished: Scalars['Boolean'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  pageType: PageType;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']>;
  /** Added in Saleor 3.3. The page publication date. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<PageTranslation>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldArgs = {
  key: Scalars['String'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Assign attributes to a given page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
export type PageAttributeAssign = {
  __typename?: 'PageAttributeAssign';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  /** The updated page type. */
  pageType?: Maybe<PageType>;
};

/** Unassign attributes from a given page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
export type PageAttributeUnassign = {
  __typename?: 'PageAttributeUnassign';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  /** The updated page type. */
  pageType?: Maybe<PageType>;
};

/** Deletes pages. Requires one of the following permissions: MANAGE_PAGES. */
export type PageBulkDelete = {
  __typename?: 'PageBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

/** Publish pages. Requires one of the following permissions: MANAGE_PAGES. */
export type PageBulkPublish = {
  __typename?: 'PageBulkPublish';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageCountableConnection = {
  __typename?: 'PageCountableConnection';
  edges: Array<PageCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageCountableEdge = {
  __typename?: 'PageCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Creates a new page. Requires one of the following permissions: MANAGE_PAGES. */
export type PageCreate = {
  __typename?: 'PageCreate';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** Page content in JSON format. */
  content?: InputMaybe<Scalars['JSONString']>;
  /** Determines if page is visible in the storefront. */
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /** ID of the page type that page belongs to. */
  pageType: Scalars['ID'];
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['String']>;
  /** Added in Saleor 3.3. Publication date time. ISO 8601 standard. */
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Page internal name. */
  slug?: InputMaybe<Scalars['String']>;
  /** Page title. */
  title?: InputMaybe<Scalars['String']>;
};

export type PageCreated = {
  __typename?: 'PageCreated';
  /** Added in Saleor 3.2. Look up a page. Note: this feature is in a preview state and can be subject to changes at later point. */
  page?: Maybe<Page>;
};

/** Deletes a page. Requires one of the following permissions: MANAGE_PAGES. */
export type PageDelete = {
  __typename?: 'PageDelete';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageDeleted = {
  __typename?: 'PageDeleted';
  /** Added in Saleor 3.2. Look up a page. Note: this feature is in a preview state and can be subject to changes at later point. */
  page?: Maybe<Page>;
};

export type PageError = {
  __typename?: 'PageError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: PageErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum PageErrorCode {
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PageFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  pageTypes?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PageInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** Page content in JSON format. */
  content?: InputMaybe<Scalars['JSONString']>;
  /** Determines if page is visible in the storefront. */
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['String']>;
  /** Added in Saleor 3.3. Publication date time. ISO 8601 standard. */
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Page internal name. */
  slug?: InputMaybe<Scalars['String']>;
  /** Page title. */
  title?: InputMaybe<Scalars['String']>;
};

/** Reorder page attribute values. Requires one of the following permissions: MANAGE_PAGES. */
export type PageReorderAttributeValues = {
  __typename?: 'PageReorderAttributeValues';
  errors: Array<PageError>;
  /** Page from which attribute values are reordered. */
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export enum PageSortField {
  /** Sort pages by creation date. */
  CreationDate = 'CREATION_DATE',
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PublicationDate = 'PUBLICATION_DATE',
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort pages by slug. */
  Slug = 'SLUG',
  /** Sort pages by title. */
  Title = 'TITLE',
  /** Sort pages by visibility. */
  Visibility = 'VISIBILITY'
}

export type PageSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pages by the selected field. */
  field: PageSortField;
};

export type PageTranslatableContent = Node & {
  __typename?: 'PageTranslatableContent';
  /** List of page content attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
  content?: Maybe<Scalars['JSONString']>;
  /**
   * Content of the page (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /**
   * A static page that can be manually added by a shop operator through the dashboard.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  page?: Maybe<Page>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<PageTranslation>;
};


export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for a page. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type PageTranslate = {
  __typename?: 'PageTranslate';
  errors: Array<TranslationError>;
  page?: Maybe<PageTranslatableContent>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type PageTranslation = Node & {
  __typename?: 'PageTranslation';
  content?: Maybe<Scalars['JSONString']>;
  /**
   * Translated description of the page (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageTranslationInput = {
  content?: InputMaybe<Scalars['JSONString']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageType = Node & ObjectWithMetadata & {
  __typename?: 'PageType';
  /** Page attributes of that page type. */
  attributes?: Maybe<Array<Attribute>>;
  /** Attributes that can be assigned to the page type. Requires one of the following permissions: MANAGE_PAGES. */
  availableAttributes?: Maybe<AttributeCountableConnection>;
  /** Whether page type has pages assigned. Requires one of the following permissions: MANAGE_PAGES. */
  hasPages?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  slug: Scalars['String'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Delete page types. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
export type PageTypeBulkDelete = {
  __typename?: 'PageTypeBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageTypeCountableConnection = {
  __typename?: 'PageTypeCountableConnection';
  edges: Array<PageTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageTypeCountableEdge = {
  __typename?: 'PageTypeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PageType;
};

/** Create a new page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
export type PageTypeCreate = {
  __typename?: 'PageTypeCreate';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeCreateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: InputMaybe<Array<Scalars['ID']>>;
  /** Name of the page type. */
  name?: InputMaybe<Scalars['String']>;
  /** Page type slug. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Delete a page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
export type PageTypeDelete = {
  __typename?: 'PageTypeDelete';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeFilterInput = {
  search?: InputMaybe<Scalars['String']>;
};

/** Reorder the attributes of a page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
export type PageTypeReorderAttributes = {
  __typename?: 'PageTypeReorderAttributes';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  /** Page type from which attributes are reordered. */
  pageType?: Maybe<PageType>;
};

export enum PageTypeSortField {
  /** Sort page types by name. */
  Name = 'NAME',
  /** Sort page types by slug. */
  Slug = 'SLUG'
}

export type PageTypeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort page types by the selected field. */
  field: PageTypeSortField;
};

/** Update page type. Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES. */
export type PageTypeUpdate = {
  __typename?: 'PageTypeUpdate';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: InputMaybe<Array<Scalars['ID']>>;
  /** Name of the page type. */
  name?: InputMaybe<Scalars['String']>;
  /** List of attribute IDs to be assigned to the page type. */
  removeAttributes?: InputMaybe<Array<Scalars['ID']>>;
  /** Page type slug. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Updates an existing page. Requires one of the following permissions: MANAGE_PAGES. */
export type PageUpdate = {
  __typename?: 'PageUpdate';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageUpdated = {
  __typename?: 'PageUpdated';
  /** Added in Saleor 3.2. Look up a page. Note: this feature is in a preview state and can be subject to changes at later point. */
  page?: Maybe<Page>;
};

/** Change the password of the logged in user. Requires one of the following permissions: AUTHENTICATED_USER. */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** A user instance with a new password. */
  user?: Maybe<User>;
};

/** Represents a payment of a given type. */
export type Payment = Node & ObjectWithMetadata & {
  __typename?: 'Payment';
  /** List of actions that can be performed in the current state of a payment. Requires one of the following permissions: MANAGE_ORDERS. */
  actions: Array<OrderAction>;
  /** Maximum amount of money that can be captured. Requires one of the following permissions: MANAGE_ORDERS. */
  availableCaptureAmount?: Maybe<Money>;
  /** Maximum amount of money that can be refunded. Requires one of the following permissions: MANAGE_ORDERS. */
  availableRefundAmount?: Maybe<Money>;
  /** Total amount captured for this payment. */
  capturedAmount?: Maybe<Money>;
  /** Internal payment status. */
  chargeStatus: PaymentChargeStatusEnum;
  checkout?: Maybe<Checkout>;
  created: Scalars['DateTime'];
  /** The details of the card used for this payment. */
  creditCard?: Maybe<CreditCard>;
  /** IP address of the user who created the payment. Requires one of the following permissions: MANAGE_ORDERS. */
  customerIpAddress?: Maybe<Scalars['String']>;
  gateway: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  modified: Scalars['DateTime'];
  order?: Maybe<Order>;
  paymentMethodType: Scalars['String'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  token: Scalars['String'];
  /** Total amount of the payment. */
  total?: Maybe<Money>;
  /** List of all transactions within this payment. Requires one of the following permissions: MANAGE_ORDERS. */
  transactions?: Maybe<Array<Transaction>>;
};


/** Represents a payment of a given type. */
export type PaymentMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a payment of a given type. */
export type PaymentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Captures the authorized payment amount. Requires one of the following permissions: MANAGE_ORDERS. */
export type PaymentCapture = {
  __typename?: 'PaymentCapture';
  errors: Array<PaymentError>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** An enumeration. */
export enum PaymentChargeStatusEnum {
  Cancelled = 'CANCELLED',
  FullyCharged = 'FULLY_CHARGED',
  FullyRefunded = 'FULLY_REFUNDED',
  NotCharged = 'NOT_CHARGED',
  PartiallyCharged = 'PARTIALLY_CHARGED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  Refused = 'REFUSED'
}

/** Check payment balance. */
export type PaymentCheckBalance = {
  __typename?: 'PaymentCheckBalance';
  /** Response from the gateway. */
  data?: Maybe<Scalars['JSONString']>;
  errors: Array<PaymentError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

export type PaymentCheckBalanceInput = {
  /** Information about card. */
  card: CardInput;
  /** Slug of a channel for which the data should be returned. */
  channel: Scalars['String'];
  /** An ID of a payment gateway to check. */
  gatewayId: Scalars['String'];
  /** Payment method name. */
  method: Scalars['String'];
};

export type PaymentCountableConnection = {
  __typename?: 'PaymentCountableConnection';
  edges: Array<PaymentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type PaymentCountableEdge = {
  __typename?: 'PaymentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Payment;
};

export type PaymentError = {
  __typename?: 'PaymentError';
  /** The error code. */
  code: PaymentErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of varint IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum PaymentErrorCode {
  BalanceCheckError = 'BALANCE_CHECK_ERROR',
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelInactive = 'CHANNEL_INACTIVE',
  CheckoutEmailNotSet = 'CHECKOUT_EMAIL_NOT_SET',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NotFound = 'NOT_FOUND',
  NotSupportedGateway = 'NOT_SUPPORTED_GATEWAY',
  NoCheckoutLines = 'NO_CHECKOUT_LINES',
  PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
  PaymentError = 'PAYMENT_ERROR',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
  Unique = 'UNIQUE'
}

export type PaymentFilterInput = {
  checkouts?: InputMaybe<Array<Scalars['ID']>>;
};

/** Available payment gateway backend with configuration necessary to setup client. */
export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  /** Payment gateway client configuration. */
  config: Array<GatewayConfigLine>;
  /** Payment gateway supported currencies. */
  currencies: Array<Scalars['String']>;
  /** Payment gateway ID. */
  id: Scalars['ID'];
  /** Payment gateway name. */
  name: Scalars['String'];
};

/** Initializes payment process when it is required by gateway. */
export type PaymentInitialize = {
  __typename?: 'PaymentInitialize';
  errors: Array<PaymentError>;
  initializedPayment?: Maybe<PaymentInitialized>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type PaymentInitialized = {
  __typename?: 'PaymentInitialized';
  /** Initialized data by gateway. */
  data?: Maybe<Scalars['JSONString']>;
  /** ID of a payment gateway. */
  gateway: Scalars['String'];
  /** Payment gateway name. */
  name: Scalars['String'];
};

export type PaymentInput = {
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  amount?: InputMaybe<Scalars['PositiveDecimal']>;
  /** A gateway to use with that payment. */
  gateway: Scalars['String'];
  /** Added in Saleor 3.1. User public metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  returnUrl?: InputMaybe<Scalars['String']>;
  /** Added in Saleor 3.1. Payment store type. */
  storePaymentMethod?: InputMaybe<StorePaymentMethodEnum>;
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  token?: InputMaybe<Scalars['String']>;
};

/** Refunds the captured payment amount. Requires one of the following permissions: MANAGE_ORDERS. */
export type PaymentRefund = {
  __typename?: 'PaymentRefund';
  errors: Array<PaymentError>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type PaymentSource = {
  __typename?: 'PaymentSource';
  /** Stored credit card details if available. */
  creditCardInfo?: Maybe<CreditCard>;
  /** Payment gateway name. */
  gateway: Scalars['String'];
  /** Added in Saleor 3.1. List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** ID of stored payment method. */
  paymentMethodId?: Maybe<Scalars['String']>;
};

/** Voids the authorized payment. Requires one of the following permissions: MANAGE_ORDERS. */
export type PaymentVoid = {
  __typename?: 'PaymentVoid';
  errors: Array<PaymentError>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** Represents a permission object in a friendly form. */
export type Permission = {
  __typename?: 'Permission';
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String'];
};

/** An enumeration. */
export enum PermissionEnum {
  HandleCheckouts = 'HANDLE_CHECKOUTS',
  HandlePayments = 'HANDLE_PAYMENTS',
  ImpersonateUser = 'IMPERSONATE_USER',
  ManageApps = 'MANAGE_APPS',
  ManageChannels = 'MANAGE_CHANNELS',
  ManageCheckouts = 'MANAGE_CHECKOUTS',
  ManageDiscounts = 'MANAGE_DISCOUNTS',
  ManageGiftCard = 'MANAGE_GIFT_CARD',
  ManageMenus = 'MANAGE_MENUS',
  ManageOrders = 'MANAGE_ORDERS',
  ManagePages = 'MANAGE_PAGES',
  ManagePageTypesAndAttributes = 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES',
  ManagePlugins = 'MANAGE_PLUGINS',
  ManageProducts = 'MANAGE_PRODUCTS',
  ManageProductTypesAndAttributes = 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageShipping = 'MANAGE_SHIPPING',
  ManageStaff = 'MANAGE_STAFF',
  ManageTranslations = 'MANAGE_TRANSLATIONS',
  ManageUsers = 'MANAGE_USERS'
}

/** Create new permission group. Requires one of the following permissions: MANAGE_STAFF. */
export type PermissionGroupCreate = {
  __typename?: 'PermissionGroupCreate';
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupCreateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars['ID']>>;
  /** Group name. */
  name: Scalars['String'];
};

/** Delete permission group. Requires one of the following permissions: MANAGE_STAFF. */
export type PermissionGroupDelete = {
  __typename?: 'PermissionGroupDelete';
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupError = {
  __typename?: 'PermissionGroupError';
  /** The error code. */
  code: PermissionGroupErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum PermissionGroupErrorCode {
  AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
  CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PermissionGroupFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
};

export enum PermissionGroupSortField {
  /** Sort permission group accounts by name. */
  Name = 'NAME'
}

export type PermissionGroupSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort permission group by the selected field. */
  field: PermissionGroupSortField;
};

/** Update permission group. Requires one of the following permissions: MANAGE_STAFF. */
export type PermissionGroupUpdate = {
  __typename?: 'PermissionGroupUpdate';
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupUpdateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars['ID']>>;
  /** Group name. */
  name?: InputMaybe<Scalars['String']>;
  /** List of permission code names to unassign from this group. */
  removePermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to unassign from this group. */
  removeUsers?: InputMaybe<Array<Scalars['ID']>>;
};

/** Plugin. */
export type Plugin = {
  __typename?: 'Plugin';
  /** Channel-specific plugin configuration. */
  channelConfigurations: Array<PluginConfiguration>;
  /** Description of the plugin. */
  description: Scalars['String'];
  /** Global configuration of the plugin (not channel-specific). */
  globalConfiguration?: Maybe<PluginConfiguration>;
  /** Identifier of the plugin. */
  id: Scalars['ID'];
  /** Name of the plugin. */
  name: Scalars['String'];
};

/** Stores information about a configuration of plugin. */
export type PluginConfiguration = {
  __typename?: 'PluginConfiguration';
  /** Determines if plugin is active or not. */
  active: Scalars['Boolean'];
  /** The channel to which the plugin configuration is assigned to. */
  channel?: Maybe<Channel>;
  /** Configuration of the plugin. */
  configuration?: Maybe<Array<ConfigurationItem>>;
};

export enum PluginConfigurationType {
  Global = 'GLOBAL',
  PerChannel = 'PER_CHANNEL'
}

export type PluginCountableConnection = {
  __typename?: 'PluginCountableConnection';
  edges: Array<PluginCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type PluginCountableEdge = {
  __typename?: 'PluginCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Plugin;
};

export type PluginError = {
  __typename?: 'PluginError';
  /** The error code. */
  code: PluginErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum PluginErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PluginFilterInput = {
  search?: InputMaybe<Scalars['String']>;
  statusInChannels?: InputMaybe<PluginStatusInChannelsInput>;
  type?: InputMaybe<PluginConfigurationType>;
};

export enum PluginSortField {
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type PluginSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort plugins by the selected field. */
  field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
  active: Scalars['Boolean'];
  channels: Array<Scalars['ID']>;
};

/** Update plugin configuration. Requires one of the following permissions: MANAGE_PLUGINS. */
export type PluginUpdate = {
  __typename?: 'PluginUpdate';
  errors: Array<PluginError>;
  plugin?: Maybe<Plugin>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pluginsErrors: Array<PluginError>;
};

export type PluginUpdateInput = {
  /** Indicates whether the plugin should be enabled. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Configuration of the plugin. */
  configuration?: InputMaybe<Array<ConfigurationItemInput>>;
};

/** An enumeration. */
export enum PostalCodeRuleInclusionTypeEnum {
  Exclude = 'EXCLUDE',
  Include = 'INCLUDE'
}

/** Represents preorder settings for product variant. */
export type PreorderData = {
  __typename?: 'PreorderData';
  /** Preorder end date. */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Total number of sold product variant during preorder. Requires one of the following permissions: MANAGE_PRODUCTS. */
  globalSoldUnits: Scalars['Int'];
  /** The global preorder threshold for product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
  globalThreshold?: Maybe<Scalars['Int']>;
};

export type PreorderSettingsInput = {
  /** The end date for preorder. */
  endDate?: InputMaybe<Scalars['DateTime']>;
  /** The global threshold for preorder variant. */
  globalThreshold?: InputMaybe<Scalars['Int']>;
};

/** Represents preorder variant data for channel. */
export type PreorderThreshold = {
  __typename?: 'PreorderThreshold';
  /** Preorder threshold for product variant in this channel. */
  quantity?: Maybe<Scalars['Int']>;
  /** Number of sold product variant in this channel. */
  soldUnits: Scalars['Int'];
};

export type PriceInput = {
  /** Amount of money. */
  amount: Scalars['PositiveDecimal'];
  /** Currency code. */
  currency: Scalars['String'];
};

export type PriceRangeInput = {
  /** Price greater than or equal to. */
  gte?: InputMaybe<Scalars['Float']>;
  /** Price less than or equal to. */
  lte?: InputMaybe<Scalars['Float']>;
};

/** Represents an individual item for sale in the storefront. */
export type Product = Node & ObjectWithMetadata & {
  __typename?: 'Product';
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  /**
   * Date when product is available for purchase.
   * @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date.
   */
  availableForPurchase?: Maybe<Scalars['Date']>;
  /** Date when product is available for purchase. */
  availableForPurchaseAt?: Maybe<Scalars['DateTime']>;
  category?: Maybe<Category>;
  /** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
  channel?: Maybe<Scalars['String']>;
  /** List of availability in channels for the product. Requires one of the following permissions: MANAGE_PRODUCTS. */
  channelListings?: Maybe<Array<ProductChannelListing>>;
  chargeTaxes: Scalars['Boolean'];
  /** List of collections for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collections?: Maybe<Array<Collection>>;
  created: Scalars['DateTime'];
  defaultVariant?: Maybe<ProductVariant>;
  description?: Maybe<Scalars['JSONString']>;
  /**
   * Description of the product (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /**
   * Get a single product image by ID.
   * @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead.
   */
  imageById?: Maybe<ProductImage>;
  /**
   * List of images for the product.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  images?: Maybe<Array<ProductImage>>;
  /** Whether the product is in stock and visible or not. */
  isAvailable?: Maybe<Scalars['Boolean']>;
  /** Whether the product is available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
  /** List of media for the product. */
  media?: Maybe<Array<ProductMedia>>;
  /** Get a single product media by ID. */
  mediaById?: Maybe<ProductMedia>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<ProductPricingInfo>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  productType: ProductType;
  rating?: Maybe<Scalars['Float']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** A type of tax. Assigned by enabled tax gateway */
  taxType?: Maybe<TaxType>;
  /** The main thumbnail for a product. */
  thumbnail?: Maybe<Image>;
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<ProductTranslation>;
  updatedAt: Scalars['DateTime'];
  /** List of variants for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  variants?: Maybe<Array<ProductVariant>>;
  weight?: Maybe<Weight>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductImageByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductIsAvailableArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMediaByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductThumbnailArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Assign attributes to a given product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type ProductAttributeAssign = {
  __typename?: 'ProductAttributeAssign';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID'];
  /** The attribute type to be assigned as. */
  type: ProductAttributeType;
  /** Added in Saleor 3.1. Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric']. */
  variantSelection?: InputMaybe<Scalars['Boolean']>;
};

/** Added in Saleor 3.1. Update attributes assigned to product variant for given product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type ProductAttributeAssignmentUpdate = {
  __typename?: 'ProductAttributeAssignmentUpdate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignmentUpdateInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID'];
  /** Added in Saleor 3.1. Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric']. */
  variantSelection: Scalars['Boolean'];
};

export enum ProductAttributeType {
  Product = 'PRODUCT',
  Variant = 'VARIANT'
}

/** Un-assign attributes from a given product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type ProductAttributeUnassign = {
  __typename?: 'ProductAttributeUnassign';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
};

/** Deletes products. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductBulkDelete = {
  __typename?: 'ProductBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** Represents product channel listing. */
export type ProductChannelListing = Node & {
  __typename?: 'ProductChannelListing';
  /** @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date. */
  availableForPurchase?: Maybe<Scalars['Date']>;
  /** Added in Saleor 3.3. The product available for purchase date time. */
  availableForPurchaseAt?: Maybe<Scalars['DateTime']>;
  channel: Channel;
  /** The price of the cheapest variant (including discounts). */
  discountedPrice?: Maybe<Money>;
  id: Scalars['ID'];
  /** Whether the product is available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
  isPublished: Scalars['Boolean'];
  /** Range of margin percentage value. Requires one of the following permissions: MANAGE_PRODUCTS. */
  margin?: Maybe<Margin>;
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<ProductPricingInfo>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']>;
  /** Added in Saleor 3.3. The product publication date time. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Purchase cost of product. Requires one of the following permissions: MANAGE_PRODUCTS. */
  purchaseCost?: Maybe<MoneyRange>;
  visibleInListings: Scalars['Boolean'];
};


/** Represents product channel listing. */
export type ProductChannelListingPricingArgs = {
  address?: InputMaybe<AddressInput>;
};

export type ProductChannelListingAddInput = {
  /** List of variants to which the channel should be assigned. */
  addVariants?: InputMaybe<Array<Scalars['ID']>>;
  /** Added in Saleor 3.3. A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed. */
  availableForPurchaseAt?: InputMaybe<Scalars['DateTime']>;
  /**
   * A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `availableForPurchaseAt` field instead.
   */
  availableForPurchaseDate?: InputMaybe<Scalars['Date']>;
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Determine if product should be available for purchase. */
  isAvailableForPurchase?: InputMaybe<Scalars['Boolean']>;
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['Date']>;
  /** Added in Saleor 3.3. Publication date time. ISO 8601 standard. */
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** List of variants from which the channel should be unassigned. */
  removeVariants?: InputMaybe<Array<Scalars['ID']>>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: InputMaybe<Scalars['Boolean']>;
};

export type ProductChannelListingError = {
  __typename?: 'ProductChannelListingError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
  /** List of variants IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']>>;
};

/** Manage product's availability in channels. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductChannelListingUpdate = {
  __typename?: 'ProductChannelListingUpdate';
  errors: Array<ProductChannelListingError>;
  /** An updated product instance. */
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
};

export type ProductChannelListingUpdateInput = {
  /** List of channels from which the product should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
  /** List of channels to which the product should be assigned or updated. */
  updateChannels?: InputMaybe<Array<ProductChannelListingAddInput>>;
};

export type ProductCountableConnection = {
  __typename?: 'ProductCountableConnection';
  edges: Array<ProductCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductCountableEdge = {
  __typename?: 'ProductCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Creates a new product. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductCreate = {
  __typename?: 'ProductCreate';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars['ID']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: InputMaybe<Scalars['Boolean']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars['ID']>>;
  /** Product description (JSON). */
  description?: InputMaybe<Scalars['JSONString']>;
  /** Product name. */
  name?: InputMaybe<Scalars['String']>;
  /** ID of the type that product belongs to. */
  productType: Scalars['ID'];
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars['Float']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars['String']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: InputMaybe<Scalars['String']>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductCreated = {
  __typename?: 'ProductCreated';
  /** Added in Saleor 3.2. Look up a category. Note: this feature is in a preview state and can be subject to changes at later point. */
  category?: Maybe<Category>;
  /** Added in Saleor 3.2. Look up a product. Note: this feature is in a preview state and can be subject to changes at later point. */
  product?: Maybe<Product>;
};


export type ProductCreatedProductArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Deletes a product. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductDelete = {
  __typename?: 'ProductDelete';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductDeleted = {
  __typename?: 'ProductDeleted';
  /** Added in Saleor 3.2. Look up a category. Note: this feature is in a preview state and can be subject to changes at later point. */
  category?: Maybe<Category>;
  /** Added in Saleor 3.2. Look up a product. Note: this feature is in a preview state and can be subject to changes at later point. */
  product?: Maybe<Product>;
};


export type ProductDeletedProductArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ProductError = {
  __typename?: 'ProductError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum ProductErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MediaAlreadyAssigned = 'MEDIA_ALREADY_ASSIGNED',
  NotFound = 'NOT_FOUND',
  NotProductsImage = 'NOT_PRODUCTS_IMAGE',
  NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
  PreorderVariantCannotBeDeactivated = 'PREORDER_VARIANT_CANNOT_BE_DEACTIVATED',
  ProductNotAssignedToChannel = 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL',
  ProductWithoutCategory = 'PRODUCT_WITHOUT_CATEGORY',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  UnsupportedMediaProvider = 'UNSUPPORTED_MEDIA_PROVIDER',
  VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT'
}

export enum ProductFieldEnum {
  Category = 'CATEGORY',
  ChargeTaxes = 'CHARGE_TAXES',
  Collections = 'COLLECTIONS',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  ProductMedia = 'PRODUCT_MEDIA',
  ProductType = 'PRODUCT_TYPE',
  ProductWeight = 'PRODUCT_WEIGHT',
  VariantId = 'VARIANT_ID',
  VariantMedia = 'VARIANT_MEDIA',
  VariantSku = 'VARIANT_SKU',
  VariantWeight = 'VARIANT_WEIGHT'
}

export type ProductFilterInput = {
  attributes?: InputMaybe<Array<AttributeInput>>;
  categories?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']>;
  collections?: InputMaybe<Array<Scalars['ID']>>;
  giftCard?: InputMaybe<Scalars['Boolean']>;
  hasCategory?: InputMaybe<Scalars['Boolean']>;
  hasPreorderedVariants?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  minimalPrice?: InputMaybe<PriceRangeInput>;
  price?: InputMaybe<PriceRangeInput>;
  productTypes?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
  stockAvailability?: InputMaybe<StockAvailability>;
  stocks?: InputMaybe<ProductStockFilterInput>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/** Represents a product image. */
export type ProductImage = {
  __typename?: 'ProductImage';
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']>;
  /** The ID of the image. */
  id: Scalars['ID'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The URL of the image. */
  url: Scalars['String'];
};


/** Represents a product image. */
export type ProductImageUrlArgs = {
  size?: InputMaybe<Scalars['Int']>;
};

export type ProductInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars['ID']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: InputMaybe<Scalars['Boolean']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars['ID']>>;
  /** Product description (JSON). */
  description?: InputMaybe<Scalars['JSONString']>;
  /** Product name. */
  name?: InputMaybe<Scalars['String']>;
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars['Float']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars['String']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: InputMaybe<Scalars['String']>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

/** Represents a product media. */
export type ProductMedia = Node & {
  __typename?: 'ProductMedia';
  alt: Scalars['String'];
  id: Scalars['ID'];
  oembedData: Scalars['JSONString'];
  sortOrder?: Maybe<Scalars['Int']>;
  type: ProductMediaType;
  /** The URL of the media. */
  url: Scalars['String'];
};


/** Represents a product media. */
export type ProductMediaUrlArgs = {
  size?: InputMaybe<Scalars['Int']>;
};

/** Deletes product media. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductMediaBulkDelete = {
  __typename?: 'ProductMediaBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductMediaCreate = {
  __typename?: 'ProductMediaCreate';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaCreateInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars['String']>;
  /** Represents an image file in a multipart request. */
  image?: InputMaybe<Scalars['Upload']>;
  /** Represents an URL to an external media. */
  mediaUrl?: InputMaybe<Scalars['String']>;
  /** ID of an product. */
  product: Scalars['ID'];
};

/** Deletes a product media. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductMediaDelete = {
  __typename?: 'ProductMediaDelete';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** Changes ordering of the product media. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductMediaReorder = {
  __typename?: 'ProductMediaReorder';
  errors: Array<ProductError>;
  media?: Maybe<Array<ProductMedia>>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** An enumeration. */
export enum ProductMediaType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

/** Updates a product media. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductMediaUpdate = {
  __typename?: 'ProductMediaUpdate';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaUpdateInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars['String']>;
};

export type ProductOrder = {
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: InputMaybe<Scalars['ID']>;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort products by the selected field. */
  field?: InputMaybe<ProductOrderField>;
};

export enum ProductOrderField {
  /** Sort products by collection. Note: This option is available only for the `Collection.products` query. */
  Collection = 'COLLECTION',
  /** Sort products by update date. */
  Date = 'DATE',
  /** Sort products by update date. */
  LastModified = 'LAST_MODIFIED',
  /** Sort products by update date. */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Sort products by a minimal price of a product's variant. */
  MinimalPrice = 'MINIMAL_PRICE',
  /** Sort products by name. */
  Name = 'NAME',
  /** Sort products by price. */
  Price = 'PRICE',
  /** Sort products by publication date. */
  PublicationDate = 'PUBLICATION_DATE',
  /** Sort products by publication status. */
  Published = 'PUBLISHED',
  /** Sort products by publication date. */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort products by rank. Note: This option is available only with the `search` filter. */
  Rank = 'RANK',
  /** Sort products by rating. */
  Rating = 'RATING',
  /** Sort products by type. */
  Type = 'TYPE'
}

/** Represents availability of a product in the storefront. */
export type ProductPricingInfo = {
  __typename?: 'ProductPricingInfo';
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency?: Maybe<TaxedMoney>;
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** The discounted price range of the product variants. */
  priceRange?: Maybe<TaxedMoneyRange>;
  /** The discounted price range of the product variants in the local currency. */
  priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
  /** The undiscounted price range of the product variants. */
  priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
};

/** Reorder product attribute values. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductReorderAttributeValues = {
  __typename?: 'ProductReorderAttributeValues';
  errors: Array<ProductError>;
  /** Product from which attribute values are reordered. */
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductStockFilterInput = {
  quantity?: InputMaybe<IntRangeInput>;
  warehouseIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type ProductTranslatableContent = Node & {
  __typename?: 'ProductTranslatableContent';
  /** List of product attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
  description?: Maybe<Scalars['JSONString']>;
  /**
   * Description of the product (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /**
   * Represents an individual item for sale in the storefront.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  product?: Maybe<Product>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<ProductTranslation>;
};


export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for a product. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type ProductTranslate = {
  __typename?: 'ProductTranslate';
  errors: Array<TranslationError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ProductTranslation = Node & {
  __typename?: 'ProductTranslation';
  description?: Maybe<Scalars['JSONString']>;
  /**
   * Translated description of the product (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductType = Node & ObjectWithMetadata & {
  __typename?: 'ProductType';
  /** Added in Saleor 3.1. Variant attributes of that product type with attached variant selection. */
  assignedVariantAttributes?: Maybe<Array<AssignedVariantAttribute>>;
  /** List of attributes which can be assigned to this product type. Requires one of the following permissions: MANAGE_PRODUCTS. */
  availableAttributes?: Maybe<AttributeCountableConnection>;
  hasVariants: Scalars['Boolean'];
  id: Scalars['ID'];
  isDigital: Scalars['Boolean'];
  isShippingRequired: Scalars['Boolean'];
  /** The product type kind. */
  kind: ProductTypeKindEnum;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** Product attributes of that product type. */
  productAttributes?: Maybe<Array<Attribute>>;
  /**
   * List of products of this type.
   * @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter.
   */
  products?: Maybe<ProductCountableConnection>;
  slug: Scalars['String'];
  /** A type of tax. Assigned by enabled tax gateway */
  taxType?: Maybe<TaxType>;
  /**
   * Variant attributes of that product type.
   * @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead.
   */
  variantAttributes?: Maybe<Array<Attribute>>;
  weight?: Maybe<Weight>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAssignedVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};

/** Deletes product types. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type ProductTypeBulkDelete = {
  __typename?: 'ProductTypeBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export enum ProductTypeConfigurable {
  Configurable = 'CONFIGURABLE',
  Simple = 'SIMPLE'
}

export type ProductTypeCountableConnection = {
  __typename?: 'ProductTypeCountableConnection';
  edges: Array<ProductTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductTypeCountableEdge = {
  __typename?: 'ProductTypeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductType;
};

/** Creates a new product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type ProductTypeCreate = {
  __typename?: 'ProductTypeCreate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

/** Deletes a product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type ProductTypeDelete = {
  __typename?: 'ProductTypeDelete';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export enum ProductTypeEnum {
  Digital = 'DIGITAL',
  Shippable = 'SHIPPABLE'
}

export type ProductTypeFilterInput = {
  configurable?: InputMaybe<ProductTypeConfigurable>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  kind?: InputMaybe<ProductTypeKindEnum>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  productType?: InputMaybe<ProductTypeEnum>;
  search?: InputMaybe<Scalars['String']>;
};

export type ProductTypeInput = {
  /** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
  hasVariants?: InputMaybe<Scalars['Boolean']>;
  /** Determines if products are digital. */
  isDigital?: InputMaybe<Scalars['Boolean']>;
  /** Determines if shipping is required for products of this variant. */
  isShippingRequired?: InputMaybe<Scalars['Boolean']>;
  /** The product type kind. */
  kind?: InputMaybe<ProductTypeKindEnum>;
  /** Name of the product type. */
  name?: InputMaybe<Scalars['String']>;
  /** List of attributes shared among all product variants. */
  productAttributes?: InputMaybe<Array<Scalars['ID']>>;
  /** Product type slug. */
  slug?: InputMaybe<Scalars['String']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: InputMaybe<Scalars['String']>;
  /** List of attributes used to distinguish between different variants of a product. */
  variantAttributes?: InputMaybe<Array<Scalars['ID']>>;
  /** Weight of the ProductType items. */
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

/** An enumeration. */
export enum ProductTypeKindEnum {
  GiftCard = 'GIFT_CARD',
  Normal = 'NORMAL'
}

/** Reorder the attributes of a product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type ProductTypeReorderAttributes = {
  __typename?: 'ProductTypeReorderAttributes';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** Product type from which attributes are reordered. */
  productType?: Maybe<ProductType>;
};

export enum ProductTypeSortField {
  /** Sort products by type. */
  Digital = 'DIGITAL',
  /** Sort products by name. */
  Name = 'NAME',
  /** Sort products by shipping. */
  ShippingRequired = 'SHIPPING_REQUIRED'
}

export type ProductTypeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort product types by the selected field. */
  field: ProductTypeSortField;
};

/** Updates an existing product type. Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
export type ProductTypeUpdate = {
  __typename?: 'ProductTypeUpdate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

/** Updates an existing product. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductUpdate = {
  __typename?: 'ProductUpdate';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductUpdated = {
  __typename?: 'ProductUpdated';
  /** Added in Saleor 3.2. Look up a category. Note: this feature is in a preview state and can be subject to changes at later point. */
  category?: Maybe<Category>;
  /** Added in Saleor 3.2. Look up a product. Note: this feature is in a preview state and can be subject to changes at later point. */
  product?: Maybe<Product>;
};


export type ProductUpdatedProductArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariant = Node & ObjectWithMetadata & {
  __typename?: 'ProductVariant';
  /** List of attributes assigned to this variant. */
  attributes: Array<SelectedAttribute>;
  /** Channel given to retrieve this product variant. Also used by federation gateway to resolve this object in a federated query. */
  channel?: Maybe<Scalars['String']>;
  /** List of price information in channels for the product. Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER. */
  channelListings?: Maybe<Array<ProductVariantChannelListing>>;
  created: Scalars['DateTime'];
  /** Digital content for the product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
  digitalContent?: Maybe<DigitalContent>;
  id: Scalars['ID'];
  /**
   * List of images for the product variant.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  images?: Maybe<Array<ProductImage>>;
  /** Gross margin percentage value. */
  margin?: Maybe<Scalars['Int']>;
  /** List of media for the product variant. */
  media?: Maybe<Array<ProductMedia>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** Added in Saleor 3.1. Preorder data for product variant. Note: this feature is in a preview state and can be subject to changes at later point. */
  preorder?: Maybe<PreorderData>;
  /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<VariantPricingInfo>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  product: Product;
  /** Quantity of a product available for sale in one checkout. Field value will be `null` when no `limitQuantityPerCheckout` in global settings has been set, and `productVariant` stocks are not tracked. */
  quantityAvailable?: Maybe<Scalars['Int']>;
  quantityLimitPerCustomer?: Maybe<Scalars['Int']>;
  /** Total quantity ordered. Requires one of the following permissions: MANAGE_PRODUCTS. */
  quantityOrdered?: Maybe<Scalars['Int']>;
  /** Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations. Requires one of the following permissions: MANAGE_PRODUCTS. */
  revenue?: Maybe<TaxedMoney>;
  sku?: Maybe<Scalars['String']>;
  /** Stocks for the product variant. Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS. */
  stocks?: Maybe<Array<Stock>>;
  trackInventory: Scalars['Boolean'];
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Weight>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantQuantityAvailableArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantRevenueArgs = {
  period?: InputMaybe<ReportingPeriod>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantStocksArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductVariantBackInStock = {
  __typename?: 'ProductVariantBackInStock';
  /** Added in Saleor 3.2. Look up a product variant. Note: this feature is in a preview state and can be subject to changes at later point. */
  productVariant?: Maybe<ProductVariant>;
  /** Added in Saleor 3.2. Look up a warehouse. Note: this feature is in a preview state and can be subject to changes at later point. */
  warehouse?: Maybe<Warehouse>;
};


export type ProductVariantBackInStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Creates product variants for a given product. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantBulkCreate = {
  __typename?: 'ProductVariantBulkCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkProductErrors: Array<BulkProductError>;
  /** Returns how many objects were created. */
  count: Scalars['Int'];
  errors: Array<BulkProductError>;
  /** List of the created variants. */
  productVariants: Array<ProductVariant>;
};

export type ProductVariantBulkCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<BulkAttributeValueInput>;
  /** List of prices assigned to channels. */
  channelListings?: InputMaybe<Array<ProductVariantChannelListingAddInput>>;
  /** Added in Saleor 3.1. Determines if variant is in preorder. Note: this feature is in a preview state and can be subject to changes at later point. */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /** Added in Saleor 3.1. Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout. Note: this feature is in a preview state and can be subject to changes at later point. */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<StockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: InputMaybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

/** Deletes product variants. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantBulkDelete = {
  __typename?: 'ProductVariantBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** Represents product varaint channel listing. */
export type ProductVariantChannelListing = Node & {
  __typename?: 'ProductVariantChannelListing';
  channel: Channel;
  /** Cost price of the variant. */
  costPrice?: Maybe<Money>;
  id: Scalars['ID'];
  /** Gross margin percentage value. Requires one of the following permissions: MANAGE_PRODUCTS. */
  margin?: Maybe<Scalars['Int']>;
  /** Added in Saleor 3.1. Preorder variant data. Note: this feature is in a preview state and can be subject to changes at later point. */
  preorderThreshold?: Maybe<PreorderThreshold>;
  price?: Maybe<Money>;
};

export type ProductVariantChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Cost price of the variant in channel. */
  costPrice?: InputMaybe<Scalars['PositiveDecimal']>;
  /** Added in Saleor 3.1. The threshold for preorder variant in channel. Note: this feature is in a preview state and can be subject to changes at later point. */
  preorderThreshold?: InputMaybe<Scalars['Int']>;
  /** Price of the particular variant in channel. */
  price: Scalars['PositiveDecimal'];
};

/** Manage product variant prices in channels. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantChannelListingUpdate = {
  __typename?: 'ProductVariantChannelListingUpdate';
  errors: Array<ProductChannelListingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
  /** An updated product variant instance. */
  variant?: Maybe<ProductVariant>;
};

export type ProductVariantCountableConnection = {
  __typename?: 'ProductVariantCountableConnection';
  edges: Array<ProductVariantCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductVariantCountableEdge = {
  __typename?: 'ProductVariantCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductVariant;
};

/** Creates a new variant for a product. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantCreate = {
  __typename?: 'ProductVariantCreate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<AttributeValueInput>;
  /** Added in Saleor 3.1. Determines if variant is in preorder. Note: this feature is in a preview state and can be subject to changes at later point. */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /** Product ID of which type is the variant. */
  product: Scalars['ID'];
  /** Added in Saleor 3.1. Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout. Note: this feature is in a preview state and can be subject to changes at later point. */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<StockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: InputMaybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductVariantCreated = {
  __typename?: 'ProductVariantCreated';
  /** Added in Saleor 3.2. Look up a product variant. Note: this feature is in a preview state and can be subject to changes at later point. */
  productVariant?: Maybe<ProductVariant>;
};


export type ProductVariantCreatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Deletes a product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantDelete = {
  __typename?: 'ProductVariantDelete';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantDeleted = {
  __typename?: 'ProductVariantDeleted';
  /** Added in Saleor 3.2. Look up a product variant. Note: this feature is in a preview state and can be subject to changes at later point. */
  productVariant?: Maybe<ProductVariant>;
};


export type ProductVariantDeletedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ProductVariantFilterInput = {
  isPreorder?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type ProductVariantInput = {
  /** List of attributes specific to this variant. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** Added in Saleor 3.1. Determines if variant is in preorder. Note: this feature is in a preview state and can be subject to changes at later point. */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /** Added in Saleor 3.1. Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout. Note: this feature is in a preview state and can be subject to changes at later point. */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: InputMaybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductVariantOutOfStock = {
  __typename?: 'ProductVariantOutOfStock';
  /** Added in Saleor 3.2. Look up a product variant. Note: this feature is in a preview state and can be subject to changes at later point. */
  productVariant?: Maybe<ProductVariant>;
  /** Added in Saleor 3.2. Look up a warehouse. Note: this feature is in a preview state and can be subject to changes at later point. */
  warehouse?: Maybe<Warehouse>;
};


export type ProductVariantOutOfStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Added in Saleor 3.1. Deactivates product variant preorder. It changes all preorder allocation into regular allocation. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantPreorderDeactivate = {
  __typename?: 'ProductVariantPreorderDeactivate';
  errors: Array<ProductError>;
  /** Product variant with ended preorder. */
  productVariant?: Maybe<ProductVariant>;
};

/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantReorder = {
  __typename?: 'ProductVariantReorder';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** Reorder product variant attribute values. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantReorderAttributeValues = {
  __typename?: 'ProductVariantReorderAttributeValues';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** Product variant from which attribute values are reordered. */
  productVariant?: Maybe<ProductVariant>;
};

/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantSetDefault = {
  __typename?: 'ProductVariantSetDefault';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export enum ProductVariantSortField {
  /** Sort products variants by last modified at. */
  LastModifiedAt = 'LAST_MODIFIED_AT'
}

export type ProductVariantSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort productVariants by the selected field. */
  field: ProductVariantSortField;
};

/** Creates stocks for product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantStocksCreate = {
  __typename?: 'ProductVariantStocksCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
};

/** Delete stocks from product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantStocksDelete = {
  __typename?: 'ProductVariantStocksDelete';
  errors: Array<StockError>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  stockErrors: Array<StockError>;
};

/** Update stocks for product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantStocksUpdate = {
  __typename?: 'ProductVariantStocksUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantTranslatableContent = Node & {
  __typename?: 'ProductVariantTranslatableContent';
  /** List of product variant attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /**
   * Represents a version of a product such as different size or color.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  productVariant?: Maybe<ProductVariant>;
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<ProductVariantTranslation>;
};


export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for a product variant. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type ProductVariantTranslate = {
  __typename?: 'ProductVariantTranslate';
  errors: Array<TranslationError>;
  productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ProductVariantTranslation = Node & {
  __typename?: 'ProductVariantTranslation';
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
};

/** Updates an existing variant for product. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type ProductVariantUpdate = {
  __typename?: 'ProductVariantUpdate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantUpdated = {
  __typename?: 'ProductVariantUpdated';
  /** Added in Saleor 3.2. Look up a product variant. Note: this feature is in a preview state and can be subject to changes at later point. */
  productVariant?: Maybe<ProductVariant>;
};


export type ProductVariantUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type PublishableChannelListingInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['Date']>;
  /** Added in Saleor 3.3. Publication date time. ISO 8601 standard. */
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  _entities?: Maybe<Array<Maybe<_Entity>>>;
  _service?: Maybe<_Service>;
  /** Look up an address by ID. */
  address?: Maybe<Address>;
  /** Returns address validation rules. */
  addressValidationRules?: Maybe<AddressValidationData>;
  /** Look up an app by ID. If ID is not provided, return the currently authenticated app. Requires one of the following permissions: AuthorizationFilters.OWNER, AppPermission.MANAGE_APPS. */
  app?: Maybe<App>;
  /** Added in Saleor 3.1. Look up an app extension by ID. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP. */
  appExtension?: Maybe<AppExtension>;
  /** Added in Saleor 3.1. List of all extensions. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP. */
  appExtensions?: Maybe<AppExtensionCountableConnection>;
  /** List of the apps. Requires one of the following permissions: MANAGE_APPS. */
  apps?: Maybe<AppCountableConnection>;
  /** List of all apps installations Requires one of the following permissions: MANAGE_APPS. */
  appsInstallations: Array<AppInstallation>;
  /** Look up an attribute by ID. */
  attribute?: Maybe<Attribute>;
  /** List of the shop's attributes. */
  attributes?: Maybe<AttributeCountableConnection>;
  /** List of the shop's categories. */
  categories?: Maybe<CategoryCountableConnection>;
  /** Look up a category by ID or slug. */
  category?: Maybe<Category>;
  /** Look up a channel by ID. Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER. */
  channel?: Maybe<Channel>;
  /** List of all channels. Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER. */
  channels?: Maybe<Array<Channel>>;
  /** Look up a checkout by token and slug of channel. */
  checkout?: Maybe<Checkout>;
  /** List of checkout lines. Requires one of the following permissions: MANAGE_CHECKOUTS. */
  checkoutLines?: Maybe<CheckoutLineCountableConnection>;
  /** List of checkouts. Requires one of the following permissions: MANAGE_CHECKOUTS. */
  checkouts?: Maybe<CheckoutCountableConnection>;
  /** Look up a collection by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collection?: Maybe<Collection>;
  /** List of the shop's collections. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collections?: Maybe<CollectionCountableConnection>;
  /** List of the shop's customers. Requires one of the following permissions: MANAGE_ORDERS, MANAGE_USERS. */
  customers?: Maybe<UserCountableConnection>;
  /** Look up digital content by ID. Requires one of the following permissions: MANAGE_PRODUCTS. */
  digitalContent?: Maybe<DigitalContent>;
  /** List of digital content. Requires one of the following permissions: MANAGE_PRODUCTS. */
  digitalContents?: Maybe<DigitalContentCountableConnection>;
  /** List of draft orders. Requires one of the following permissions: MANAGE_ORDERS. */
  draftOrders?: Maybe<OrderCountableConnection>;
  /** Look up a export file by ID. Requires one of the following permissions: MANAGE_PRODUCTS. */
  exportFile?: Maybe<ExportFile>;
  /** List of export files. Requires one of the following permissions: MANAGE_PRODUCTS. */
  exportFiles?: Maybe<ExportFileCountableConnection>;
  /** Look up a gift card by ID. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCard?: Maybe<GiftCard>;
  /** Added in Saleor 3.1. List of gift card currencies. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardCurrencies: Array<Scalars['String']>;
  /** Gift card related settings from site settings. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardSettings: GiftCardSettings;
  /** Added in Saleor 3.1. List of gift card tags. Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCardTags?: Maybe<GiftCardTagCountableConnection>;
  /** List of gift cards. Requires one of the following permissions: MANAGE_GIFT_CARD. */
  giftCards?: Maybe<GiftCardCountableConnection>;
  /** List of activity events to display on homepage (at the moment it only contains order-events). Requires one of the following permissions: MANAGE_ORDERS. */
  homepageEvents?: Maybe<OrderEventCountableConnection>;
  /** Return the currently authenticated user. */
  me?: Maybe<User>;
  /** Look up a navigation menu by ID or name. */
  menu?: Maybe<Menu>;
  /** Look up a menu item by ID. */
  menuItem?: Maybe<MenuItem>;
  /** List of the storefronts's menu items. */
  menuItems?: Maybe<MenuItemCountableConnection>;
  /** List of the storefront's menus. */
  menus?: Maybe<MenuCountableConnection>;
  /** Look up an order by ID. Requires one of the following permissions: MANAGE_ORDERS. */
  order?: Maybe<Order>;
  /** {DEPRECATED_IN_3X_FIELD} Look up an order by token. */
  orderByToken?: Maybe<Order>;
  /** Order related settings from site settings. Requires one of the following permissions: MANAGE_ORDERS. */
  orderSettings?: Maybe<OrderSettings>;
  /** List of orders. Requires one of the following permissions: MANAGE_ORDERS. */
  orders?: Maybe<OrderCountableConnection>;
  /** Return the total sales amount from a specific period. Requires one of the following permissions: MANAGE_ORDERS. */
  ordersTotal?: Maybe<TaxedMoney>;
  /** Look up a page by ID or slug. */
  page?: Maybe<Page>;
  /** Look up a page type by ID. */
  pageType?: Maybe<PageType>;
  /** List of the page types. */
  pageTypes?: Maybe<PageTypeCountableConnection>;
  /** List of the shop's pages. */
  pages?: Maybe<PageCountableConnection>;
  /** Look up a payment by ID. Requires one of the following permissions: MANAGE_ORDERS. */
  payment?: Maybe<Payment>;
  /** List of payments. Requires one of the following permissions: MANAGE_ORDERS. */
  payments?: Maybe<PaymentCountableConnection>;
  /** Look up permission group by ID. Requires one of the following permissions: MANAGE_STAFF. */
  permissionGroup?: Maybe<Group>;
  /** List of permission groups. Requires one of the following permissions: MANAGE_STAFF. */
  permissionGroups?: Maybe<GroupCountableConnection>;
  /** Look up a plugin by ID. Requires one of the following permissions: MANAGE_PLUGINS. */
  plugin?: Maybe<Plugin>;
  /** List of plugins. Requires one of the following permissions: MANAGE_PLUGINS. */
  plugins?: Maybe<PluginCountableConnection>;
  /** Look up a product by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  product?: Maybe<Product>;
  /** Look up a product type by ID. */
  productType?: Maybe<ProductType>;
  /** List of the shop's product types. */
  productTypes?: Maybe<ProductTypeCountableConnection>;
  /** Look up a product variant by ID or SKU. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariant?: Maybe<ProductVariant>;
  /** List of product variants. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariants?: Maybe<ProductVariantCountableConnection>;
  /** List of the shop's products. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  products?: Maybe<ProductCountableConnection>;
  /** List of top selling products. Requires one of the following permissions: MANAGE_PRODUCTS. */
  reportProductSales?: Maybe<ProductVariantCountableConnection>;
  /** Look up a sale by ID. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  sale?: Maybe<Sale>;
  /** List of the shop's sales. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  sales?: Maybe<SaleCountableConnection>;
  /** Look up a shipping zone by ID. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingZone?: Maybe<ShippingZone>;
  /** List of the shop's shipping zones. Requires one of the following permissions: MANAGE_SHIPPING. */
  shippingZones?: Maybe<ShippingZoneCountableConnection>;
  /** Return information about the shop. */
  shop: Shop;
  /** List of the shop's staff users. Requires one of the following permissions: MANAGE_STAFF. */
  staffUsers?: Maybe<UserCountableConnection>;
  /** Look up a stock by ID Requires one of the following permissions: MANAGE_PRODUCTS. */
  stock?: Maybe<Stock>;
  /** List of stocks. Requires one of the following permissions: MANAGE_PRODUCTS. */
  stocks?: Maybe<StockCountableConnection>;
  /** List of all tax rates available from tax gateway. */
  taxTypes?: Maybe<Array<TaxType>>;
  /**  Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  translation?: Maybe<TranslatableItem>;
  /** Returns a list of all translatable items of a given kind. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
  translations?: Maybe<TranslatableItemConnection>;
  /** Look up a user by ID or email address. Requires one of the following permissions: MANAGE_STAFF, MANAGE_USERS, MANAGE_ORDERS. */
  user?: Maybe<User>;
  /** Look up a voucher by ID. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  voucher?: Maybe<Voucher>;
  /** List of the shop's vouchers. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  vouchers?: Maybe<VoucherCountableConnection>;
  /** Look up a warehouse by ID. Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING. */
  warehouse?: Maybe<Warehouse>;
  /** List of warehouses. Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING. */
  warehouses?: Maybe<WarehouseCountableConnection>;
  /** Look up a webhook by ID. Requires one of the following permissions: AppPermission.MANAGE_APPS, AuthorizationFilters.OWNER */
  webhook?: Maybe<Webhook>;
  /**
   * List of all available webhook events. Requires one of the following permissions: MANAGE_APPS.
   * @deprecated This field will be removed in Saleor 4.0. Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types.
   */
  webhookEvents?: Maybe<Array<WebhookEvent>>;
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  webhookSamplePayload?: Maybe<Scalars['JSONString']>;
};


export type Query_EntitiesArgs = {
  representations?: InputMaybe<Array<InputMaybe<Scalars['_Any']>>>;
};


export type QueryAddressArgs = {
  id: Scalars['ID'];
};


export type QueryAddressValidationRulesArgs = {
  city?: InputMaybe<Scalars['String']>;
  cityArea?: InputMaybe<Scalars['String']>;
  countryArea?: InputMaybe<Scalars['String']>;
  countryCode: CountryCode;
};


export type QueryAppArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAppExtensionArgs = {
  id: Scalars['ID'];
};


export type QueryAppExtensionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AppExtensionFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AppFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<AppSortingInput>;
};


export type QueryAttributeArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<AttributeSortingInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CategoryFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CategorySortingInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCheckoutArgs = {
  token?: InputMaybe<Scalars['UUID']>;
};


export type QueryCheckoutLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCheckoutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CheckoutFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CheckoutSortingInput>;
};


export type QueryCollectionArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CollectionSortingInput>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CustomerFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryDigitalContentArgs = {
  id: Scalars['ID'];
};


export type QueryDigitalContentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryDraftOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<OrderDraftFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryExportFileArgs = {
  id: Scalars['ID'];
};


export type QueryExportFilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ExportFileFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ExportFileSortingInput>;
};


export type QueryGiftCardArgs = {
  id: Scalars['ID'];
};


export type QueryGiftCardTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<GiftCardTagFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<GiftCardFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<GiftCardSortingInput>;
};


export type QueryHomepageEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryMenuArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type QueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MenuItemFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<MenuItemSortingInput>;
};


export type QueryMenusArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MenuFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<MenuSortingInput>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderByTokenArgs = {
  token: Scalars['UUID'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<OrderFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryOrdersTotalArgs = {
  channel?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<ReportingPeriod>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPageTypeArgs = {
  id: Scalars['ID'];
};


export type QueryPageTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<PageTypeSortingInput>;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<PageSortingInput>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PaymentFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryPermissionGroupArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PermissionGroupFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<PermissionGroupSortingInput>;
};


export type QueryPluginArgs = {
  id: Scalars['ID'];
};


export type QueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PluginFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<PluginSortingInput>;
};


export type QueryProductArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID'];
};


export type QueryProductTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductTypeSortingInput>;
};


export type QueryProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  sku?: InputMaybe<Scalars['String']>;
};


export type QueryProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductVariantFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductVariantSortingInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductOrder>;
};


export type QueryReportProductSalesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  period: ReportingPeriod;
};


export type QuerySaleArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type QuerySalesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SaleFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SaleSortingInput>;
};


export type QueryShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type QueryShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ShippingZoneFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryStaffUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<StaffUserInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryStockArgs = {
  id: Scalars['ID'];
};


export type QueryStocksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<StockFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryTranslationArgs = {
  id: Scalars['ID'];
  kind: TranslatableKinds;
};


export type QueryTranslationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  kind: TranslatableKinds;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryVoucherArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type QueryVouchersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryWarehouseArgs = {
  id: Scalars['ID'];
};


export type QueryWarehousesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WarehouseFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<WarehouseSortingInput>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID'];
};


export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum;
};

/** Represents a reduced VAT rate for a particular type of goods. */
export type ReducedRate = {
  __typename?: 'ReducedRate';
  /** Reduced VAT rate in percent. */
  rate: Scalars['Float'];
  /** A type of goods. */
  rateType: Scalars['String'];
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type ReorderInput = {
  /** The ID of the item to move. */
  id: Scalars['ID'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export enum ReportingPeriod {
  ThisMonth = 'THIS_MONTH',
  Today = 'TODAY'
}

/** Request email change of the logged in user. Requires one of the following permissions: AUTHENTICATED_USER. */
export type RequestEmailChange = {
  __typename?: 'RequestEmailChange';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** A user instance. */
  user?: Maybe<User>;
};

/** Sends an email with the account password modification link. */
export type RequestPasswordReset = {
  __typename?: 'RequestPasswordReset';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type Sale = Node & ObjectWithMetadata & {
  __typename?: 'Sale';
  /** List of categories this sale applies to. */
  categories?: Maybe<CategoryCountableConnection>;
  /** List of channels available for the sale. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  channelListings?: Maybe<Array<SaleChannelListing>>;
  /** List of collections this sale applies to. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  collections?: Maybe<CollectionCountableConnection>;
  created: Scalars['DateTime'];
  /** Currency code for sale. */
  currency?: Maybe<Scalars['String']>;
  /** Sale value. */
  discountValue?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** List of products this sale applies to. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  products?: Maybe<ProductCountableConnection>;
  startDate: Scalars['DateTime'];
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<SaleTranslation>;
  type: SaleType;
  updatedAt: Scalars['DateTime'];
  /** Added in Saleor 3.1. List of product variants this sale applies to. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  variants?: Maybe<ProductVariantCountableConnection>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldArgs = {
  key: Scalars['String'];
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Adds products, categories, collections to a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type SaleAddCatalogues = {
  __typename?: 'SaleAddCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>;
};

/** Deletes sales. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type SaleBulkDelete = {
  __typename?: 'SaleBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/** Represents sale channel listing. */
export type SaleChannelListing = Node & {
  __typename?: 'SaleChannelListing';
  channel: Channel;
  currency: Scalars['String'];
  discountValue: Scalars['Float'];
  id: Scalars['ID'];
};

export type SaleChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** The value of the discount. */
  discountValue: Scalars['PositiveDecimal'];
};

export type SaleChannelListingInput = {
  /** List of channels to which the sale should be assigned. */
  addChannels?: InputMaybe<Array<SaleChannelListingAddInput>>;
  /** List of channels from which the sale should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

/** Manage sale's availability in channels. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type SaleChannelListingUpdate = {
  __typename?: 'SaleChannelListingUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** An updated sale instance. */
  sale?: Maybe<Sale>;
};

export type SaleCountableConnection = {
  __typename?: 'SaleCountableConnection';
  edges: Array<SaleCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type SaleCountableEdge = {
  __typename?: 'SaleCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Sale;
};

/** Creates a new sale. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type SaleCreate = {
  __typename?: 'SaleCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleCreated = {
  __typename?: 'SaleCreated';
  /** Added in Saleor 3.2. Look up a sale. Note: this feature is in a preview state and can be subject to changes at later point. */
  sale?: Maybe<Sale>;
};


export type SaleCreatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Deletes a sale. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type SaleDelete = {
  __typename?: 'SaleDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleDeleted = {
  __typename?: 'SaleDeleted';
  /** Added in Saleor 3.2. Look up a sale. Note: this feature is in a preview state and can be subject to changes at later point. */
  sale?: Maybe<Sale>;
};


export type SaleDeletedSaleArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type SaleFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  saleType?: InputMaybe<DiscountValueTypeEnum>;
  search?: InputMaybe<Scalars['String']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type SaleInput = {
  /** Categories related to the discount. */
  categories?: InputMaybe<Array<Scalars['ID']>>;
  /** Collections related to the discount. */
  collections?: InputMaybe<Array<Scalars['ID']>>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']>;
  /** Voucher name. */
  name?: InputMaybe<Scalars['String']>;
  /** Products related to the discount. */
  products?: InputMaybe<Array<Scalars['ID']>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']>;
  /** Fixed or percentage. */
  type?: InputMaybe<DiscountValueTypeEnum>;
  /** Value of the voucher. */
  value?: InputMaybe<Scalars['PositiveDecimal']>;
  variants?: InputMaybe<Array<Scalars['ID']>>;
};

/** Removes products, categories, collections from a sale. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type SaleRemoveCatalogues = {
  __typename?: 'SaleRemoveCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>;
};

export enum SaleSortField {
  /** Sort sales by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort sales by end date. */
  EndDate = 'END_DATE',
  /** Sort sales by last modified at. */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Sort sales by name. */
  Name = 'NAME',
  /** Sort sales by start date. */
  StartDate = 'START_DATE',
  /** Sort sales by type. */
  Type = 'TYPE',
  /** Sort sales by value. */
  Value = 'VALUE'
}

export type SaleSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort sales by the selected field. */
  field: SaleSortField;
};

export type SaleTranslatableContent = Node & {
  __typename?: 'SaleTranslatableContent';
  id: Scalars['ID'];
  name: Scalars['String'];
  /**
   * Sales allow creating discounts for categories, collections or products and are visible to all the customers. Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  sale?: Maybe<Sale>;
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<SaleTranslation>;
};


export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for a sale. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type SaleTranslate = {
  __typename?: 'SaleTranslate';
  errors: Array<TranslationError>;
  sale?: Maybe<Sale>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type SaleTranslation = Node & {
  __typename?: 'SaleTranslation';
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
};

export enum SaleType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

/** Updates a sale. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type SaleUpdate = {
  __typename?: 'SaleUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleUpdated = {
  __typename?: 'SaleUpdated';
  /** Added in Saleor 3.2. Look up a sale. Note: this feature is in a preview state and can be subject to changes at later point. */
  sale?: Maybe<Sale>;
};


export type SaleUpdatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Represents a custom attribute. */
export type SelectedAttribute = {
  __typename?: 'SelectedAttribute';
  /** Name of an attribute displayed in the interface. */
  attribute: Attribute;
  /** Values of an attribute. */
  values: Array<AttributeValue>;
};

export type SeoInput = {
  /** SEO description. */
  description?: InputMaybe<Scalars['String']>;
  /** SEO title. */
  title?: InputMaybe<Scalars['String']>;
};

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type SetPassword = {
  __typename?: 'SetPassword';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']>;
  errors: Array<AccountError>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type ShippingError = {
  __typename?: 'ShippingError';
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: ShippingErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum ShippingErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MaxLessThanMin = 'MAX_LESS_THAN_MIN',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethod = Node & ObjectWithMetadata & {
  __typename?: 'ShippingMethod';
  /** Describes if this shipping method is active and can be selected. */
  active: Scalars['Boolean'];
  /** Shipping method description (JSON). */
  description?: Maybe<Scalars['JSONString']>;
  /** Unique ID of ShippingMethod available for Order. */
  id: Scalars['ID'];
  /** Maximum delivery days for this shipping method. */
  maximumDeliveryDays?: Maybe<Scalars['Int']>;
  /** Maximum order price for this shipping method. */
  maximumOrderPrice?: Maybe<Money>;
  /**
   * Maximum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  maximumOrderWeight?: Maybe<Weight>;
  /** Message connected to this shipping method. */
  message?: Maybe<Scalars['String']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** Minimum delivery days for this shipping method. */
  minimumDeliveryDays?: Maybe<Scalars['Int']>;
  /** Minimal order price for this shipping method. */
  minimumOrderPrice?: Maybe<Money>;
  /**
   * Minimum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  minimumOrderWeight?: Maybe<Weight>;
  /** Shipping method name. */
  name: Scalars['String'];
  /** The price of selected shipping method. */
  price: Money;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
  /**
   * Type of the shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  type?: Maybe<ShippingMethodTypeEnum>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldArgs = {
  key: Scalars['String'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents shipping method channel listing. */
export type ShippingMethodChannelListing = Node & {
  __typename?: 'ShippingMethodChannelListing';
  channel: Channel;
  id: Scalars['ID'];
  maximumOrderPrice?: Maybe<Money>;
  minimumOrderPrice?: Maybe<Money>;
  price?: Maybe<Money>;
};

export type ShippingMethodChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Maximum order price to use this shipping method. */
  maximumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']>;
  /** Minimum order price to use this shipping method. */
  minimumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']>;
  /** Shipping price of the shipping method in this channel. */
  price?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type ShippingMethodChannelListingInput = {
  /** List of channels to which the shipping method should be assigned. */
  addChannels?: InputMaybe<Array<ShippingMethodChannelListingAddInput>>;
  /** List of channels from which the shipping method should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

/** Manage shipping method's availability in channels. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingMethodChannelListingUpdate = {
  __typename?: 'ShippingMethodChannelListingUpdate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** An updated shipping method instance. */
  shippingMethod?: Maybe<ShippingMethodType>;
};

/** Represents shipping method postal code rule. */
export type ShippingMethodPostalCodeRule = Node & {
  __typename?: 'ShippingMethodPostalCodeRule';
  /** End address range. */
  end?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Inclusion type of the postal code rule. */
  inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
  /** Start address range. */
  start?: Maybe<Scalars['String']>;
};

export type ShippingMethodTranslatableContent = Node & {
  __typename?: 'ShippingMethodTranslatableContent';
  description?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /**
   * Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers. Requires one of the following permissions: MANAGE_SHIPPING.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
};


export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
  __typename?: 'ShippingMethodTranslation';
  description?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodType = Node & ObjectWithMetadata & {
  __typename?: 'ShippingMethodType';
  /** List of channels available for the method. Requires one of the following permissions: MANAGE_SHIPPING. */
  channelListings?: Maybe<Array<ShippingMethodChannelListing>>;
  /** Shipping method description. */
  description?: Maybe<Scalars['JSONString']>;
  /** List of excluded products for the shipping method. Requires one of the following permissions: MANAGE_SHIPPING. */
  excludedProducts?: Maybe<ProductCountableConnection>;
  /** Shipping method ID. */
  id: Scalars['ID'];
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: Maybe<Scalars['Int']>;
  /** The price of the cheapest variant (including discounts). */
  maximumOrderPrice?: Maybe<Money>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: Maybe<Weight>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: Maybe<Scalars['Int']>;
  /** The price of the cheapest variant (including discounts). */
  minimumOrderPrice?: Maybe<Money>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: Maybe<Weight>;
  /** Shipping method name. */
  name: Scalars['String'];
  /** Postal code ranges rule of exclusion or inclusion of the shipping method. */
  postalCodeRules?: Maybe<Array<ShippingMethodPostalCodeRule>>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
  /** Type of the shipping method. */
  type?: Maybe<ShippingMethodTypeEnum>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeExcludedProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldArgs = {
  key: Scalars['String'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** An enumeration. */
export enum ShippingMethodTypeEnum {
  Price = 'PRICE',
  Weight = 'WEIGHT'
}

export type ShippingPostalCodeRulesCreateInputRange = {
  /** End range of the postal code. */
  end?: InputMaybe<Scalars['String']>;
  /** Start range of the postal code. */
  start: Scalars['String'];
};

/** Deletes shipping prices. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingPriceBulkDelete = {
  __typename?: 'ShippingPriceBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
};

/** Creates a new shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingPriceCreate = {
  __typename?: 'ShippingPriceCreate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceCreated = {
  __typename?: 'ShippingPriceCreated';
  /** Added in Saleor 3.2. Look up a shipping method. Note: this feature is in a preview state and can be subject to changes at later point. */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** Added in Saleor 3.2. Look up a shipping zone. Note: this feature is in a preview state and can be subject to changes at later point. */
  shippingZone?: Maybe<ShippingZone>;
};


export type ShippingPriceCreatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']>;
};


export type ShippingPriceCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Deletes a shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingPriceDelete = {
  __typename?: 'ShippingPriceDelete';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** A shipping method to delete. */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceDeleted = {
  __typename?: 'ShippingPriceDeleted';
  /** Added in Saleor 3.2. Look up a shipping method. Note: this feature is in a preview state and can be subject to changes at later point. */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** Added in Saleor 3.2. Look up a shipping zone. Note: this feature is in a preview state and can be subject to changes at later point. */
  shippingZone?: Maybe<ShippingZone>;
};


export type ShippingPriceDeletedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']>;
};


export type ShippingPriceDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Exclude products from shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingPriceExcludeProducts = {
  __typename?: 'ShippingPriceExcludeProducts';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethodType>;
};

export type ShippingPriceExcludeProductsInput = {
  /** List of products which will be excluded. */
  products: Array<Scalars['ID']>;
};

export type ShippingPriceInput = {
  /** Postal code rules to add. */
  addPostalCodeRules?: InputMaybe<Array<ShippingPostalCodeRulesCreateInputRange>>;
  /** Postal code rules to delete. */
  deletePostalCodeRules?: InputMaybe<Array<Scalars['ID']>>;
  /** Shipping method description. */
  description?: InputMaybe<Scalars['JSONString']>;
  /** Inclusion type for currently assigned postal code rules. */
  inclusionType?: InputMaybe<PostalCodeRuleInclusionTypeEnum>;
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: InputMaybe<Scalars['Int']>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: InputMaybe<Scalars['WeightScalar']>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: InputMaybe<Scalars['Int']>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: InputMaybe<Scalars['WeightScalar']>;
  /** Name of the shipping method. */
  name?: InputMaybe<Scalars['String']>;
  /** Shipping zone this method belongs to. */
  shippingZone?: InputMaybe<Scalars['ID']>;
  /** Shipping type: price or weight based. */
  type?: InputMaybe<ShippingMethodTypeEnum>;
};

/** Remove product from excluded list for shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingPriceRemoveProductFromExclude = {
  __typename?: 'ShippingPriceRemoveProductFromExclude';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethodType>;
};

/** Creates/updates translations for a shipping method. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type ShippingPriceTranslate = {
  __typename?: 'ShippingPriceTranslate';
  errors: Array<TranslationError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ShippingPriceTranslationInput = {
  /** Translated shipping method description (JSON). */
  description?: InputMaybe<Scalars['JSONString']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Updates a new shipping price. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingPriceUpdate = {
  __typename?: 'ShippingPriceUpdate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceUpdated = {
  __typename?: 'ShippingPriceUpdated';
  /** Added in Saleor 3.2. Look up a shipping method. Note: this feature is in a preview state and can be subject to changes at later point. */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** Added in Saleor 3.2. Look up a shipping zone. Note: this feature is in a preview state and can be subject to changes at later point. */
  shippingZone?: Maybe<ShippingZone>;
};


export type ShippingPriceUpdatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']>;
};


export type ShippingPriceUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZone = Node & ObjectWithMetadata & {
  __typename?: 'ShippingZone';
  /** List of channels for shipping zone. */
  channels: Array<Channel>;
  /** List of countries available for the method. */
  countries: Array<CountryDisplay>;
  default: Scalars['Boolean'];
  /** Description of a shipping zone. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** Lowest and highest prices for the shipping. */
  priceRange?: Maybe<MoneyRange>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** List of shipping methods available for orders shipped to countries within this shipping zone. */
  shippingMethods?: Maybe<Array<ShippingMethodType>>;
  /** List of warehouses for shipping zone. */
  warehouses: Array<Warehouse>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

/** Deletes shipping zones. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingZoneBulkDelete = {
  __typename?: 'ShippingZoneBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
};

export type ShippingZoneCountableConnection = {
  __typename?: 'ShippingZoneCountableConnection';
  edges: Array<ShippingZoneCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ShippingZoneCountableEdge = {
  __typename?: 'ShippingZoneCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShippingZone;
};

/** Creates a new shipping zone. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingZoneCreate = {
  __typename?: 'ShippingZoneCreate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
  /** List of channels to assign to the shipping zone. */
  addChannels?: InputMaybe<Array<Scalars['ID']>>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars['ID']>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars['String']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: InputMaybe<Scalars['Boolean']>;
  /** Description of the shipping zone. */
  description?: InputMaybe<Scalars['String']>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneCreated = {
  __typename?: 'ShippingZoneCreated';
  /** Added in Saleor 3.2. Look up a shipping zone. Note: this feature is in a preview state and can be subject to changes at later point. */
  shippingZone?: Maybe<ShippingZone>;
};


export type ShippingZoneCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Deletes a shipping zone. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingZoneDelete = {
  __typename?: 'ShippingZoneDelete';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneDeleted = {
  __typename?: 'ShippingZoneDeleted';
  /** Added in Saleor 3.2. Look up a shipping zone. Note: this feature is in a preview state and can be subject to changes at later point. */
  shippingZone?: Maybe<ShippingZone>;
};


export type ShippingZoneDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
};

/** Updates a new shipping zone. Requires one of the following permissions: MANAGE_SHIPPING. */
export type ShippingZoneUpdate = {
  __typename?: 'ShippingZoneUpdate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
  /** List of channels to assign to the shipping zone. */
  addChannels?: InputMaybe<Array<Scalars['ID']>>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars['ID']>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars['String']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: InputMaybe<Scalars['Boolean']>;
  /** Description of the shipping zone. */
  description?: InputMaybe<Scalars['String']>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars['String']>;
  /** List of channels to unassign from the shipping zone. */
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
  /** List of warehouses to unassign from a shipping zone */
  removeWarehouses?: InputMaybe<Array<Scalars['ID']>>;
};

export type ShippingZoneUpdated = {
  __typename?: 'ShippingZoneUpdated';
  /** Added in Saleor 3.2. Look up a shipping zone. Note: this feature is in a preview state and can be subject to changes at later point. */
  shippingZone?: Maybe<ShippingZone>;
};


export type ShippingZoneUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type Shop = {
  __typename?: 'Shop';
  /** Enable automatic fulfillment for all digital products. Requires one of the following permissions: MANAGE_SETTINGS. */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>;
  /** List of available external authentications. */
  availableExternalAuthentications: Array<ExternalAuthentication>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** Shipping methods that are available for the shop. */
  availableShippingMethods?: Maybe<Array<ShippingMethod>>;
  /** Added in Saleor 3.1. List of all currencies supported by shop's channels. Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP. */
  channelCurrencies: Array<Scalars['String']>;
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping: Scalars['Boolean'];
  /** Company address. */
  companyAddress?: Maybe<Address>;
  /** List of countries available in the shop. */
  countries: Array<CountryDisplay>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars['String']>;
  /** Shop's default country. */
  defaultCountry?: Maybe<CountryDisplay>;
  /** Default number of max downloads per digital content URL. Requires one of the following permissions: MANAGE_SETTINGS. */
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>;
  /** Default number of days which digital content URL will be valid. Requires one of the following permissions: MANAGE_SETTINGS. */
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>;
  /** Default shop's email sender's address. Requires one of the following permissions: MANAGE_SETTINGS. */
  defaultMailSenderAddress?: Maybe<Scalars['String']>;
  /** Default shop's email sender's name. Requires one of the following permissions: MANAGE_SETTINGS. */
  defaultMailSenderName?: Maybe<Scalars['String']>;
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  /** Shop's description. */
  description?: Maybe<Scalars['String']>;
  /** Display prices with tax in store. */
  displayGrossPrices: Scalars['Boolean'];
  /** Shop's domain data. */
  domain: Domain;
  /** Added in Saleor 3.1. Allow to approve fulfillments which are unpaid. */
  fulfillmentAllowUnpaid: Scalars['Boolean'];
  /** Added in Saleor 3.1. Automatically approve all new fulfillments. */
  fulfillmentAutoApprove: Scalars['Boolean'];
  /** Header text. */
  headerText?: Maybe<Scalars['String']>;
  /** Include taxes in prices. */
  includeTaxesInPrices: Scalars['Boolean'];
  /** List of the shops's supported languages. */
  languages: Array<LanguageDisplay>;
  /** Added in Saleor 3.1. Default number of maximum line quantity in single checkout (per single checkout line). Note: this feature is in a preview state and can be subject to changes at later point. Requires one of the following permissions: MANAGE_SETTINGS. */
  limitQuantityPerCheckout?: Maybe<Scalars['Int']>;
  /** Resource limitations and current usage if any set for a shop Requires one of the following permissions: AUTHENTICATED_STAFF_USER. */
  limits: LimitInfo;
  /** Shop's name. */
  name: Scalars['String'];
  /** List of available permissions. */
  permissions: Array<Permission>;
  /** List of possible phone prefixes. */
  phonePrefixes: Array<Scalars['String']>;
  /** Added in Saleor 3.1. Default number of minutes stock will be reserved for anonymous checkout or null when stock reservation is disabled. Requires one of the following permissions: MANAGE_SETTINGS. */
  reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']>;
  /** Added in Saleor 3.1. Default number of minutes stock will be reserved for authenticated checkout or null when stock reservation is disabled. Requires one of the following permissions: MANAGE_SETTINGS. */
  reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']>;
  /** List of staff notification recipients. Requires one of the following permissions: MANAGE_SETTINGS. */
  staffNotificationRecipients?: Maybe<Array<StaffNotificationRecipient>>;
  /** Enable inventory tracking. */
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>;
  /** Returns translated shop fields for the given language code. */
  translation?: Maybe<ShopTranslation>;
  /** Saleor API version. Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP. */
  version: Scalars['String'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailablePaymentGatewaysArgs = {
  channel?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailableShippingMethodsArgs = {
  address?: InputMaybe<AddressInput>;
  channel: Scalars['String'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. Requires one of the following permissions: MANAGE_SETTINGS. */
export type ShopAddressUpdate = {
  __typename?: 'ShopAddressUpdate';
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

/** Updates site domain of the shop. Requires one of the following permissions: MANAGE_SETTINGS. */
export type ShopDomainUpdate = {
  __typename?: 'ShopDomainUpdate';
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopError = {
  __typename?: 'ShopError';
  /** The error code. */
  code: ShopErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ShopErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Fetch tax rates. Requires one of the following permissions: MANAGE_SETTINGS. */
export type ShopFetchTaxRates = {
  __typename?: 'ShopFetchTaxRates';
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopSettingsInput = {
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: InputMaybe<Scalars['Boolean']>;
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping?: InputMaybe<Scalars['Boolean']>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: InputMaybe<Scalars['String']>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: InputMaybe<Scalars['Int']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: InputMaybe<Scalars['Int']>;
  /** Default email sender's address. */
  defaultMailSenderAddress?: InputMaybe<Scalars['String']>;
  /** Default email sender's name. */
  defaultMailSenderName?: InputMaybe<Scalars['String']>;
  /** Default weight unit. */
  defaultWeightUnit?: InputMaybe<WeightUnitsEnum>;
  /** SEO description. */
  description?: InputMaybe<Scalars['String']>;
  /** Display prices with tax in store. */
  displayGrossPrices?: InputMaybe<Scalars['Boolean']>;
  /** Added in Saleor 3.1. Enable ability to approve fulfillments which are unpaid. */
  fulfillmentAllowUnpaid?: InputMaybe<Scalars['Boolean']>;
  /** Added in Saleor 3.1. Enable automatic approval of all new fulfillments. */
  fulfillmentAutoApprove?: InputMaybe<Scalars['Boolean']>;
  /** Header text. */
  headerText?: InputMaybe<Scalars['String']>;
  /** Include taxes in prices. */
  includeTaxesInPrices?: InputMaybe<Scalars['Boolean']>;
  /** Added in Saleor 3.1. Default number of maximum line quantity in single checkout. Minimum possible value is 1, default value is 50. Note: this feature is in a preview state and can be subject to changes at later point. */
  limitQuantityPerCheckout?: InputMaybe<Scalars['Int']>;
  /** Added in Saleor 3.1. Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable. */
  reserveStockDurationAnonymousUser?: InputMaybe<Scalars['Int']>;
  /** Added in Saleor 3.1. Default number of minutes stock will be reserved for authenticated checkout. Enter 0 or null to disable. */
  reserveStockDurationAuthenticatedUser?: InputMaybe<Scalars['Int']>;
  /** Enable inventory tracking. */
  trackInventoryByDefault?: InputMaybe<Scalars['Boolean']>;
};

/** Creates/updates translations for shop settings. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type ShopSettingsTranslate = {
  __typename?: 'ShopSettingsTranslate';
  errors: Array<TranslationError>;
  /** Updated shop settings. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ShopSettingsTranslationInput = {
  description?: InputMaybe<Scalars['String']>;
  headerText?: InputMaybe<Scalars['String']>;
};

/** Updates shop settings. Requires one of the following permissions: MANAGE_SETTINGS. */
export type ShopSettingsUpdate = {
  __typename?: 'ShopSettingsUpdate';
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopTranslation = Node & {
  __typename?: 'ShopTranslation';
  description: Scalars['String'];
  headerText: Scalars['String'];
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
};

export type SiteDomainInput = {
  /** Domain name for shop. */
  domain?: InputMaybe<Scalars['String']>;
  /** Shop site name. */
  name?: InputMaybe<Scalars['String']>;
};

/** Deletes staff users. Requires one of the following permissions: MANAGE_STAFF. */
export type StaffBulkDelete = {
  __typename?: 'StaffBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
};

/** Creates a new staff user. Requires one of the following permissions: MANAGE_STAFF. */
export type StaffCreate = {
  __typename?: 'StaffCreate';
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffCreateInput = {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars['ID']>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']>;
};

/** Deletes a staff user. Requires one of the following permissions: MANAGE_STAFF. */
export type StaffDelete = {
  __typename?: 'StaffDelete';
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffError = {
  __typename?: 'StaffError';
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** List of permission group IDs which cause the error. */
  groups?: Maybe<Array<Scalars['ID']>>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']>>;
};

export enum StaffMemberStatus {
  /** User account has been activated. */
  Active = 'ACTIVE',
  /** User account has not been activated yet. */
  Deactivated = 'DEACTIVATED'
}

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type StaffNotificationRecipient = Node & {
  __typename?: 'StaffNotificationRecipient';
  /** Determines if a notification active. */
  active?: Maybe<Scalars['Boolean']>;
  /** Returns email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Returns a user subscribed to email notifications. */
  user?: Maybe<User>;
};

/** Creates a new staff notification recipient. Requires one of the following permissions: MANAGE_SETTINGS. */
export type StaffNotificationRecipientCreate = {
  __typename?: 'StaffNotificationRecipientCreate';
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/** Delete staff notification recipient. Requires one of the following permissions: MANAGE_SETTINGS. */
export type StaffNotificationRecipientDelete = {
  __typename?: 'StaffNotificationRecipientDelete';
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
  /** Determines if a notification active. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Email address of a user subscribed to email notifications. */
  email?: InputMaybe<Scalars['String']>;
  /** The ID of the user subscribed to email notifications.. */
  user?: InputMaybe<Scalars['ID']>;
};

/** Updates a staff notification recipient. Requires one of the following permissions: MANAGE_SETTINGS. */
export type StaffNotificationRecipientUpdate = {
  __typename?: 'StaffNotificationRecipientUpdate';
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/** Updates an existing staff user. Requires one of the following permissions: MANAGE_STAFF. */
export type StaffUpdate = {
  __typename?: 'StaffUpdate';
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffUpdateInput = {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars['ID']>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']>;
  /** List of permission group IDs from which user should be unassigned. */
  removeGroups?: InputMaybe<Array<Scalars['ID']>>;
};

export type StaffUserInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StaffMemberStatus>;
};

/** Represents stock. */
export type Stock = Node & {
  __typename?: 'Stock';
  id: Scalars['ID'];
  productVariant: ProductVariant;
  /** Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment. Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS. */
  quantity: Scalars['Int'];
  /** Quantity allocated for orders. Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS. */
  quantityAllocated: Scalars['Int'];
  /** Quantity reserved for checkouts. Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS. */
  quantityReserved: Scalars['Int'];
  warehouse: Warehouse;
};

export enum StockAvailability {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

export type StockCountableConnection = {
  __typename?: 'StockCountableConnection';
  edges: Array<StockCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type StockCountableEdge = {
  __typename?: 'StockCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Stock;
};

export type StockError = {
  __typename?: 'StockError';
  /** The error code. */
  code: StockErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum StockErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type StockFilterInput = {
  quantity?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
};

export type StockInput = {
  /** Quantity of items available for sell. */
  quantity: Scalars['Int'];
  /** Warehouse in which stock is located. */
  warehouse: Scalars['ID'];
};

/** Enum representing the type of a payment storage in a gateway. */
export enum StorePaymentMethodEnum {
  /** Storage is disabled. The payment is not stored. */
  None = 'NONE',
  /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
  OffSession = 'OFF_SESSION',
  /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
  OnSession = 'ON_SESSION'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Added in Saleor 3.2. Look up subscription event. Note: this feature is in a preview state and can be subject to changes at later point. */
  event?: Maybe<Event>;
};

/** Representation of tax types fetched from tax gateway. */
export type TaxType = {
  __typename?: 'TaxType';
  /** Description of the tax type. */
  description?: Maybe<Scalars['String']>;
  /** External tax code used to identify given tax group. */
  taxCode?: Maybe<Scalars['String']>;
};

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type TaxedMoney = {
  __typename?: 'TaxedMoney';
  /** Currency code. */
  currency: Scalars['String'];
  /** Amount of money including taxes. */
  gross: Money;
  /** Amount of money without taxes. */
  net: Money;
  /** Amount of taxes. */
  tax: Money;
};

/** Represents a range of monetary values. */
export type TaxedMoneyRange = {
  __typename?: 'TaxedMoneyRange';
  /** Lower bound of a price range. */
  start?: Maybe<TaxedMoney>;
  /** Upper bound of a price range. */
  stop?: Maybe<TaxedMoney>;
};

export type TimePeriod = {
  __typename?: 'TimePeriod';
  /** The length of the period. */
  amount: Scalars['Int'];
  /** The type of the period. */
  type: TimePeriodTypeEnum;
};

export type TimePeriodInputType = {
  /** The length of the period. */
  amount: Scalars['Int'];
  /** The type of the period. */
  type: TimePeriodTypeEnum;
};

/** An enumeration. */
export enum TimePeriodTypeEnum {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

/** An object representing a single payment. */
export type Transaction = Node & {
  __typename?: 'Transaction';
  /** Total amount of the transaction. */
  amount?: Maybe<Money>;
  created: Scalars['DateTime'];
  error?: Maybe<Scalars['String']>;
  gatewayResponse: Scalars['JSONString'];
  id: Scalars['ID'];
  isSuccess: Scalars['Boolean'];
  kind: TransactionKind;
  payment: Payment;
  token: Scalars['String'];
};

/** An enumeration. */
export enum TransactionKind {
  ActionToConfirm = 'ACTION_TO_CONFIRM',
  Auth = 'AUTH',
  Cancel = 'CANCEL',
  Capture = 'CAPTURE',
  Confirm = 'CONFIRM',
  External = 'EXTERNAL',
  Pending = 'PENDING',
  Refund = 'REFUND',
  RefundOngoing = 'REFUND_ONGOING',
  Void = 'VOID'
}

export type TranslatableItem = AttributeTranslatableContent | AttributeValueTranslatableContent | CategoryTranslatableContent | CollectionTranslatableContent | MenuItemTranslatableContent | PageTranslatableContent | ProductTranslatableContent | ProductVariantTranslatableContent | SaleTranslatableContent | ShippingMethodTranslatableContent | VoucherTranslatableContent;

export type TranslatableItemConnection = {
  __typename?: 'TranslatableItemConnection';
  edges: Array<TranslatableItemEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type TranslatableItemEdge = {
  __typename?: 'TranslatableItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TranslatableItem;
};

export enum TranslatableKinds {
  Attribute = 'ATTRIBUTE',
  AttributeValue = 'ATTRIBUTE_VALUE',
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  MenuItem = 'MENU_ITEM',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Sale = 'SALE',
  ShippingMethod = 'SHIPPING_METHOD',
  Variant = 'VARIANT',
  Voucher = 'VOUCHER'
}

export type TranslationCreated = {
  __typename?: 'TranslationCreated';
  /** Added in Saleor 3.2. Look up a translation. Note: this feature is in a preview state and can be subject to changes at later point. */
  translation?: Maybe<TranslationTypes>;
};

export type TranslationError = {
  __typename?: 'TranslationError';
  /** The error code. */
  code: TranslationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum TranslationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type TranslationInput = {
  description?: InputMaybe<Scalars['JSONString']>;
  name?: InputMaybe<Scalars['String']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
};

export type TranslationTypes = AttributeTranslation | AttributeValueTranslation | CategoryTranslation | CollectionTranslation | MenuItemTranslation | PageTranslation | ProductTranslation | ProductVariantTranslation | SaleTranslation | ShippingMethodTranslation | VoucherTranslation;

export type TranslationUpdated = {
  __typename?: 'TranslationUpdated';
  /** Added in Saleor 3.2. Look up a translation. Note: this feature is in a preview state and can be subject to changes at later point. */
  translation?: Maybe<TranslationTypes>;
};

export type UpdateInvoiceInput = {
  /** Invoice number */
  number?: InputMaybe<Scalars['String']>;
  /** URL of an invoice to download. */
  url?: InputMaybe<Scalars['String']>;
};

/** Updates metadata of an object. To use it, you need to have access to the modified object. */
export type UpdateMetadata = {
  __typename?: 'UpdateMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

/** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type UpdatePrivateMetadata = {
  __typename?: 'UpdatePrivateMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

export type UploadError = {
  __typename?: 'UploadError';
  /** The error code. */
  code: UploadErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum UploadErrorCode {
  GraphqlError = 'GRAPHQL_ERROR'
}

/** Represents user data. */
export type User = Node & ObjectWithMetadata & {
  __typename?: 'User';
  /** List of all user's addresses. */
  addresses?: Maybe<Array<Address>>;
  avatar?: Maybe<Image>;
  /**
   * Returns the last open checkout of this user.
   * @deprecated This field will be removed in Saleor 4.0. Use the `checkoutTokens` field to fetch the user checkouts.
   */
  checkout?: Maybe<Checkout>;
  /** Returns the checkout UUID's assigned to this user. */
  checkoutTokens?: Maybe<Array<Scalars['UUID']>>;
  dateJoined: Scalars['DateTime'];
  defaultBillingAddress?: Maybe<Address>;
  defaultShippingAddress?: Maybe<Address>;
  /** List of user's permission groups which user can manage. */
  editableGroups?: Maybe<Array<Group>>;
  email: Scalars['String'];
  /** List of events associated with the user. Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF. */
  events?: Maybe<Array<CustomerEvent>>;
  firstName: Scalars['String'];
  /** List of the user gift cards. */
  giftCards?: Maybe<GiftCardCountableConnection>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  /** User language code. */
  languageCode: LanguageCodeEnum;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  /** A note about the customer. Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF. */
  note?: Maybe<Scalars['String']>;
  /** List of user's orders. Requires one of the following permissions: AccountPermissions.MANAGE_STAFF, AuthorizationFilters.OWNER */
  orders?: Maybe<OrderCountableConnection>;
  /** List of user's permission groups. */
  permissionGroups?: Maybe<Array<Group>>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** List of stored payment sources. */
  storedPaymentSources?: Maybe<Array<PaymentSource>>;
  updatedAt: Scalars['DateTime'];
  /** List of user's permissions. */
  userPermissions?: Maybe<Array<UserPermission>>;
};


/** Represents user data. */
export type UserAvatarArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserCheckoutTokensArgs = {
  channel?: InputMaybe<Scalars['String']>;
};


/** Represents user data. */
export type UserGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents user data. */
export type UserMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents user data. */
export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents user data. */
export type UserPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents user data. */
export type UserStoredPaymentSourcesArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

/** Deletes a user avatar. Only for staff members. Requires one of the following permissions: AUTHENTICATED_STAFF_USER. */
export type UserAvatarDelete = {
  __typename?: 'UserAvatarDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec Requires one of the following permissions: AUTHENTICATED_STAFF_USER. */
export type UserAvatarUpdate = {
  __typename?: 'UserAvatarUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/** Activate or deactivate users. Requires one of the following permissions: MANAGE_USERS. */
export type UserBulkSetActive = {
  __typename?: 'UserBulkSetActive';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<AccountError>;
};

export type UserCountableConnection = {
  __typename?: 'UserCountableConnection';
  edges: Array<UserCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type UserCountableEdge = {
  __typename?: 'UserCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

export type UserCreateInput = {
  /** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
  channel?: InputMaybe<Scalars['String']>;
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']>;
};

export type UserPermission = {
  __typename?: 'UserPermission';
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String'];
  /** List of user permission groups which contains this permission. */
  sourcePermissionGroups?: Maybe<Array<Group>>;
};


export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID'];
};

export enum UserSortField {
  /** Sort users by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort users by email. */
  Email = 'EMAIL',
  /** Sort users by first name. */
  FirstName = 'FIRST_NAME',
  /** Sort users by last modified at. */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Sort users by last name. */
  LastName = 'LAST_NAME',
  /** Sort users by order count. */
  OrderCount = 'ORDER_COUNT'
}

export type UserSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort users by the selected field. */
  field: UserSortField;
};

/** Represents a VAT rate for a country. */
export type Vat = {
  __typename?: 'VAT';
  /** Country code. */
  countryCode: Scalars['String'];
  /** Country's VAT rate exceptions for specific types of goods. */
  reducedRates: Array<ReducedRate>;
  /** Standard VAT rate in percent. */
  standardRate?: Maybe<Scalars['Float']>;
};

export enum VariantAttributeScope {
  All = 'ALL',
  NotVariantSelection = 'NOT_VARIANT_SELECTION',
  VariantSelection = 'VARIANT_SELECTION'
}

/** Assign an media to a product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type VariantMediaAssign = {
  __typename?: 'VariantMediaAssign';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

/** Unassign an media from a product variant. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type VariantMediaUnassign = {
  __typename?: 'VariantMediaUnassign';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

/** Represents availability of a variant in the storefront. */
export type VariantPricingInfo = {
  __typename?: 'VariantPricingInfo';
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency?: Maybe<TaxedMoney>;
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** The price, with any discount subtracted. */
  price?: Maybe<TaxedMoney>;
  /** The discounted price in the local currency. */
  priceLocalCurrency?: Maybe<TaxedMoney>;
  /** The price without any discount. */
  priceUndiscounted?: Maybe<TaxedMoney>;
};

/** Verify JWT token. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean'];
  /** JWT payload. */
  payload?: Maybe<Scalars['GenericScalar']>;
  /** User assigned to token. */
  user?: Maybe<User>;
};

/** An enumeration. */
export enum VolumeUnitsEnum {
  AcreFt = 'ACRE_FT',
  AcreIn = 'ACRE_IN',
  CubicCentimeter = 'CUBIC_CENTIMETER',
  CubicDecimeter = 'CUBIC_DECIMETER',
  CubicFoot = 'CUBIC_FOOT',
  CubicInch = 'CUBIC_INCH',
  CubicMeter = 'CUBIC_METER',
  CubicMillimeter = 'CUBIC_MILLIMETER',
  CubicYard = 'CUBIC_YARD',
  FlOz = 'FL_OZ',
  Liter = 'LITER',
  Pint = 'PINT',
  Qt = 'QT'
}

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type Voucher = Node & ObjectWithMetadata & {
  __typename?: 'Voucher';
  applyOncePerCustomer: Scalars['Boolean'];
  applyOncePerOrder: Scalars['Boolean'];
  /** List of categories this voucher applies to. */
  categories?: Maybe<CategoryCountableConnection>;
  /** List of availability in channels for the voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  channelListings?: Maybe<Array<VoucherChannelListing>>;
  code: Scalars['String'];
  /** List of collections this voucher applies to. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  collections?: Maybe<CollectionCountableConnection>;
  /** List of countries available for the shipping voucher. */
  countries?: Maybe<Array<CountryDisplay>>;
  /** Currency code for voucher. */
  currency?: Maybe<Scalars['String']>;
  /** Voucher value. */
  discountValue?: Maybe<Scalars['Float']>;
  /** Determines a type of discount for voucher - value or percentage */
  discountValueType: DiscountValueTypeEnum;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']>;
  /** Minimum order value to apply voucher. */
  minSpent?: Maybe<Money>;
  name?: Maybe<Scalars['String']>;
  onlyForStaff: Scalars['Boolean'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** List of products this voucher applies to. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  products?: Maybe<ProductCountableConnection>;
  startDate: Scalars['DateTime'];
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<VoucherTranslation>;
  /** Determines a type of voucher. */
  type: VoucherTypeEnum;
  usageLimit?: Maybe<Scalars['Int']>;
  used: Scalars['Int'];
  /** Added in Saleor 3.1. List of product variants this voucher applies to. Requires one of the following permissions: MANAGE_DISCOUNTS. */
  variants?: Maybe<ProductVariantCountableConnection>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldArgs = {
  key: Scalars['String'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Adds products, categories, collections to a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type VoucherAddCatalogues = {
  __typename?: 'VoucherAddCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>;
};

/** Deletes vouchers. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type VoucherBulkDelete = {
  __typename?: 'VoucherBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/** Represents voucher channel listing. */
export type VoucherChannelListing = Node & {
  __typename?: 'VoucherChannelListing';
  channel: Channel;
  currency: Scalars['String'];
  discountValue: Scalars['Float'];
  id: Scalars['ID'];
  minSpent?: Maybe<Money>;
};

export type VoucherChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Value of the voucher. */
  discountValue?: InputMaybe<Scalars['PositiveDecimal']>;
  /** Min purchase amount required to apply the voucher. */
  minAmountSpent?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type VoucherChannelListingInput = {
  /** List of channels to which the voucher should be assigned. */
  addChannels?: InputMaybe<Array<VoucherChannelListingAddInput>>;
  /** List of channels from which the voucher should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

/** Manage voucher's availability in channels. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type VoucherChannelListingUpdate = {
  __typename?: 'VoucherChannelListingUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** An updated voucher instance. */
  voucher?: Maybe<Voucher>;
};

export type VoucherCountableConnection = {
  __typename?: 'VoucherCountableConnection';
  edges: Array<VoucherCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type VoucherCountableEdge = {
  __typename?: 'VoucherCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Voucher;
};

/** Creates a new voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type VoucherCreate = {
  __typename?: 'VoucherCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

/** Deletes a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type VoucherDelete = {
  __typename?: 'VoucherDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export enum VoucherDiscountType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
  Shipping = 'SHIPPING'
}

export type VoucherFilterInput = {
  discountType?: InputMaybe<Array<VoucherDiscountType>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
  timesUsed?: InputMaybe<IntRangeInput>;
};

export type VoucherInput = {
  /** Voucher should be applied once per customer. */
  applyOncePerCustomer?: InputMaybe<Scalars['Boolean']>;
  /** Voucher should be applied to the cheapest item or entire order. */
  applyOncePerOrder?: InputMaybe<Scalars['Boolean']>;
  /** Categories discounted by the voucher. */
  categories?: InputMaybe<Array<Scalars['ID']>>;
  /** Code to use the voucher. */
  code?: InputMaybe<Scalars['String']>;
  /** Collections discounted by the voucher. */
  collections?: InputMaybe<Array<Scalars['ID']>>;
  /** Country codes that can be used with the shipping voucher. */
  countries?: InputMaybe<Array<Scalars['String']>>;
  /** Choices: fixed or percentage. */
  discountValueType?: InputMaybe<DiscountValueTypeEnum>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']>;
  /** Voucher name. */
  name?: InputMaybe<Scalars['String']>;
  /** Voucher can be used only by staff user. */
  onlyForStaff?: InputMaybe<Scalars['Boolean']>;
  /** Products discounted by the voucher. */
  products?: InputMaybe<Array<Scalars['ID']>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']>;
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  type?: InputMaybe<VoucherTypeEnum>;
  /** Limit number of times this voucher can be used in total. */
  usageLimit?: InputMaybe<Scalars['Int']>;
  /** Added in Saleor 3.1. Variants discounted by the voucher. */
  variants?: InputMaybe<Array<Scalars['ID']>>;
};

/** Removes products, categories, collections from a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type VoucherRemoveCatalogues = {
  __typename?: 'VoucherRemoveCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>;
};

export enum VoucherSortField {
  /** Sort vouchers by code. */
  Code = 'CODE',
  /** Sort vouchers by end date. */
  EndDate = 'END_DATE',
  /** Sort vouchers by minimum spent amount. */
  MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT',
  /** Sort vouchers by start date. */
  StartDate = 'START_DATE',
  /** Sort vouchers by type. */
  Type = 'TYPE',
  /** Sort vouchers by usage limit. */
  UsageLimit = 'USAGE_LIMIT',
  /** Sort vouchers by value. */
  Value = 'VALUE'
}

export type VoucherSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort vouchers by the selected field. */
  field: VoucherSortField;
};

export type VoucherTranslatableContent = Node & {
  __typename?: 'VoucherTranslatableContent';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<VoucherTranslation>;
  /**
   * Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  voucher?: Maybe<Voucher>;
};


export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for a voucher. Requires one of the following permissions: MANAGE_TRANSLATIONS. */
export type VoucherTranslate = {
  __typename?: 'VoucherTranslate';
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
  __typename?: 'VoucherTranslation';
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
};

export enum VoucherTypeEnum {
  EntireOrder = 'ENTIRE_ORDER',
  Shipping = 'SHIPPING',
  SpecificProduct = 'SPECIFIC_PRODUCT'
}

/** Updates a voucher. Requires one of the following permissions: MANAGE_DISCOUNTS. */
export type VoucherUpdate = {
  __typename?: 'VoucherUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

/** Represents warehouse. */
export type Warehouse = Node & ObjectWithMetadata & {
  __typename?: 'Warehouse';
  address: Address;
  /** Added in Saleor 3.1. Click and collect options: local, all or disabled. Note: this feature is in a preview state and can be subject to changes at later point. */
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
  /**
   * Warehouse company name.
   * @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead.
   */
  companyName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this feature is in a preview state and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']>;
  shippingZones: ShippingZoneCountableConnection;
  slug: Scalars['String'];
};


/** Represents warehouse. */
export type WarehouseMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents warehouse. */
export type WarehouseMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents warehouse. */
export type WarehouseShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** An enumeration. */
export enum WarehouseClickAndCollectOptionEnum {
  All = 'ALL',
  Disabled = 'DISABLED',
  Local = 'LOCAL'
}

export type WarehouseCountableConnection = {
  __typename?: 'WarehouseCountableConnection';
  edges: Array<WarehouseCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type WarehouseCountableEdge = {
  __typename?: 'WarehouseCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Warehouse;
};

/** Creates new warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type WarehouseCreate = {
  __typename?: 'WarehouseCreate';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseCreateInput = {
  /** Address of the warehouse. */
  address: AddressInput;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars['String']>;
  /** Warehouse name. */
  name: Scalars['String'];
  /** Shipping zones supported by the warehouse. */
  shippingZones?: InputMaybe<Array<Scalars['ID']>>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Deletes selected warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type WarehouseDelete = {
  __typename?: 'WarehouseDelete';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseError = {
  __typename?: 'WarehouseError';
  /** The error code. */
  code: WarehouseErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum WarehouseErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type WarehouseFilterInput = {
  clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
};

/** Add shipping zone to given warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type WarehouseShippingZoneAssign = {
  __typename?: 'WarehouseShippingZoneAssign';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

/** Remove shipping zone from given warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type WarehouseShippingZoneUnassign = {
  __typename?: 'WarehouseShippingZoneUnassign';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export enum WarehouseSortField {
  /** Sort warehouses by name. */
  Name = 'NAME'
}

export type WarehouseSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort warehouses by the selected field. */
  field: WarehouseSortField;
};

/** Updates given warehouse. Requires one of the following permissions: MANAGE_PRODUCTS. */
export type WarehouseUpdate = {
  __typename?: 'WarehouseUpdate';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseUpdateInput = {
  /** Address of the warehouse. */
  address?: InputMaybe<AddressInput>;
  /** Added in Saleor 3.1. Click and collect options: local, all or disabled. Note: this feature is in a preview state and can be subject to changes at later point. */
  clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars['String']>;
  /** Added in Saleor 3.1. Visibility of warehouse stocks. Note: this feature is in a preview state and can be subject to changes at later point. */
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  /** Warehouse name. */
  name?: InputMaybe<Scalars['String']>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Webhook. */
export type Webhook = Node & {
  __typename?: 'Webhook';
  app: App;
  /** List of asynchronous webhook events. */
  asyncEvents: Array<WebhookEventAsync>;
  /** Event deliveries. */
  eventDeliveries?: Maybe<EventDeliveryCountableConnection>;
  /**
   * List of webhook events.
   * @deprecated This field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events: Array<WebhookEvent>;
  id: Scalars['ID'];
  /** Informs if webhook is activated. */
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  /** Used to create a hash signature with each payload. */
  secretKey?: Maybe<Scalars['String']>;
  /** Used to define payloads for specific events. */
  subscriptionQuery?: Maybe<Scalars['String']>;
  /** List of synchronous webhook events. */
  syncEvents: Array<WebhookEventSync>;
  /** Target URL for webhook. */
  targetUrl: Scalars['String'];
};


/** Webhook. */
export type WebhookEventDeliveriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EventDeliveryFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<EventDeliverySortingInput>;
};

/** Creates a new webhook subscription. Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP. */
export type WebhookCreate = {
  __typename?: 'WebhookCreate';
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookCreateInput = {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars['ID']>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** The name of the webhook. */
  name?: InputMaybe<Scalars['String']>;
  /** Added in Saleor 3.2. Subscription query used to define a webhook payload. Note: this feature is in a preview state and can be subject to changes at later point. */
  query?: InputMaybe<Scalars['String']>;
  /** The secret key used to create a hash signature with each payload. */
  secretKey?: InputMaybe<Scalars['String']>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars['String']>;
};

/** Deletes a webhook subscription. Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP. */
export type WebhookDelete = {
  __typename?: 'WebhookDelete';
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookError = {
  __typename?: 'WebhookError';
  /** The error code. */
  code: WebhookErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum WebhookErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Webhook event. */
export type WebhookEvent = {
  __typename?: 'WebhookEvent';
  /** Internal name of the event type. */
  eventType: WebhookEventTypeEnum;
  /** Display name of the event. */
  name: Scalars['String'];
};

/** Asynchronous webhook event. */
export type WebhookEventAsync = {
  __typename?: 'WebhookEventAsync';
  /** Internal name of the event type. */
  eventType: WebhookEventTypeAsyncEnum;
  /** Display name of the event. */
  name: Scalars['String'];
};

/** Synchronous webhook event. */
export type WebhookEventSync = {
  __typename?: 'WebhookEventSync';
  /** Internal name of the event type. */
  eventType: WebhookEventTypeSyncEnum;
  /** Display name of the event. */
  name: Scalars['String'];
};

/** Enum determining type of webhook. */
export enum WebhookEventTypeAsyncEnum {
  /** All the events. */
  AnyEvents = 'ANY_EVENTS',
  /** A new category created. */
  CategoryCreated = 'CATEGORY_CREATED',
  /** A category is deleted. */
  CategoryDeleted = 'CATEGORY_DELETED',
  /** A category is updated. */
  CategoryUpdated = 'CATEGORY_UPDATED',
  /** A new channel created. */
  ChannelCreated = 'CHANNEL_CREATED',
  /** A channel is deleted. */
  ChannelDeleted = 'CHANNEL_DELETED',
  /** A channel status is changed. */
  ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
  /** A channel is updated. */
  ChannelUpdated = 'CHANNEL_UPDATED',
  /** A new checkout is created. */
  CheckoutCreated = 'CHECKOUT_CREATED',
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  /** A new collection is created. */
  CollectionCreated = 'COLLECTION_CREATED',
  /** A collection is deleted. */
  CollectionDeleted = 'COLLECTION_DELETED',
  /** A collection is updated. */
  CollectionUpdated = 'COLLECTION_UPDATED',
  /** A new customer account is created. */
  CustomerCreated = 'CUSTOMER_CREATED',
  /** A customer account is updated. */
  CustomerUpdated = 'CUSTOMER_UPDATED',
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  /** A fulfillment is cancelled. */
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  /** A new fulfillment is created. */
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  /** A new gift card created. */
  GiftCardCreated = 'GIFT_CARD_CREATED',
  /** A gift card is deleted. */
  GiftCardDeleted = 'GIFT_CARD_DELETED',
  /** A gift card status is changed. */
  GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
  /** A gift card is updated. */
  GiftCardUpdated = 'GIFT_CARD_UPDATED',
  /** An invoice is deleted. */
  InvoiceDeleted = 'INVOICE_DELETED',
  /** An invoice for order requested. */
  InvoiceRequested = 'INVOICE_REQUESTED',
  /** Invoice has been sent. */
  InvoiceSent = 'INVOICE_SENT',
  /** User notification triggered. */
  NotifyUser = 'NOTIFY_USER',
  /** An order is cancelled. */
  OrderCancelled = 'ORDER_CANCELLED',
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  OrderConfirmed = 'ORDER_CONFIRMED',
  /** A new order is placed. */
  OrderCreated = 'ORDER_CREATED',
  /** An order is fulfilled. */
  OrderFulfilled = 'ORDER_FULFILLED',
  /** Payment is made and an order is fully paid. */
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  OrderUpdated = 'ORDER_UPDATED',
  /** A new page is created. */
  PageCreated = 'PAGE_CREATED',
  /** A page is deleted. */
  PageDeleted = 'PAGE_DELETED',
  /** A page is updated. */
  PageUpdated = 'PAGE_UPDATED',
  /** A new product is created. */
  ProductCreated = 'PRODUCT_CREATED',
  /** A product is deleted. */
  ProductDeleted = 'PRODUCT_DELETED',
  /** A product is updated. */
  ProductUpdated = 'PRODUCT_UPDATED',
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  /** A new product variant is created. */
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  /** A product variant is deleted. */
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  /** A product variant is updated. */
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  SaleCreated = 'SALE_CREATED',
  SaleDeleted = 'SALE_DELETED',
  SaleUpdated = 'SALE_UPDATED',
  /** A new shipping price is created. */
  ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
  /** A shipping price is deleted. */
  ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
  /** A shipping price is updated. */
  ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
  /** A new shipping zone is created. */
  ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
  /** A shipping zone is deleted. */
  ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
  /** A shipping zone is updated. */
  ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
  TranslationCreated = 'TRANSLATION_CREATED',
  TranslationUpdated = 'TRANSLATION_UPDATED'
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeEnum {
  /** All the events. */
  AnyEvents = 'ANY_EVENTS',
  /** A new category created. */
  CategoryCreated = 'CATEGORY_CREATED',
  /** A category is deleted. */
  CategoryDeleted = 'CATEGORY_DELETED',
  /** A category is updated. */
  CategoryUpdated = 'CATEGORY_UPDATED',
  /** A new channel created. */
  ChannelCreated = 'CHANNEL_CREATED',
  /** A channel is deleted. */
  ChannelDeleted = 'CHANNEL_DELETED',
  /** A channel status is changed. */
  ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
  /** A channel is updated. */
  ChannelUpdated = 'CHANNEL_UPDATED',
  /** A new checkout is created. */
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS',
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  /** A new collection is created. */
  CollectionCreated = 'COLLECTION_CREATED',
  /** A collection is deleted. */
  CollectionDeleted = 'COLLECTION_DELETED',
  /** A collection is updated. */
  CollectionUpdated = 'COLLECTION_UPDATED',
  /** A new customer account is created. */
  CustomerCreated = 'CUSTOMER_CREATED',
  /** A customer account is updated. */
  CustomerUpdated = 'CUSTOMER_UPDATED',
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  /** A fulfillment is cancelled. */
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  /** A new fulfillment is created. */
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  /** A new gift card created. */
  GiftCardCreated = 'GIFT_CARD_CREATED',
  /** A gift card is deleted. */
  GiftCardDeleted = 'GIFT_CARD_DELETED',
  /** A gift card status is changed. */
  GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
  /** A gift card is updated. */
  GiftCardUpdated = 'GIFT_CARD_UPDATED',
  /** An invoice is deleted. */
  InvoiceDeleted = 'INVOICE_DELETED',
  /** An invoice for order requested. */
  InvoiceRequested = 'INVOICE_REQUESTED',
  /** Invoice has been sent. */
  InvoiceSent = 'INVOICE_SENT',
  /** User notification triggered. */
  NotifyUser = 'NOTIFY_USER',
  /** An order is cancelled. */
  OrderCancelled = 'ORDER_CANCELLED',
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  OrderConfirmed = 'ORDER_CONFIRMED',
  /** A new order is placed. */
  OrderCreated = 'ORDER_CREATED',
  OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
  /** An order is fulfilled. */
  OrderFulfilled = 'ORDER_FULFILLED',
  /** Payment is made and an order is fully paid. */
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  OrderUpdated = 'ORDER_UPDATED',
  /** A new page is created. */
  PageCreated = 'PAGE_CREATED',
  /** A page is deleted. */
  PageDeleted = 'PAGE_DELETED',
  /** A page is updated. */
  PageUpdated = 'PAGE_UPDATED',
  PaymentAuthorize = 'PAYMENT_AUTHORIZE',
  PaymentCapture = 'PAYMENT_CAPTURE',
  PaymentConfirm = 'PAYMENT_CONFIRM',
  PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
  PaymentProcess = 'PAYMENT_PROCESS',
  PaymentRefund = 'PAYMENT_REFUND',
  PaymentVoid = 'PAYMENT_VOID',
  /** A new product is created. */
  ProductCreated = 'PRODUCT_CREATED',
  /** A product is deleted. */
  ProductDeleted = 'PRODUCT_DELETED',
  /** A product is updated. */
  ProductUpdated = 'PRODUCT_UPDATED',
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  /** A new product variant is created. */
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  /** A product variant is deleted. */
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  /** A product variant is updated. */
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  SaleCreated = 'SALE_CREATED',
  SaleDeleted = 'SALE_DELETED',
  SaleUpdated = 'SALE_UPDATED',
  ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
  /** A new shipping price is created. */
  ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
  /** A shipping price is deleted. */
  ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
  /** A shipping price is updated. */
  ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
  /** A new shipping zone is created. */
  ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
  /** A shipping zone is deleted. */
  ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
  /** A shipping zone is updated. */
  ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
  TranslationCreated = 'TRANSLATION_CREATED',
  TranslationUpdated = 'TRANSLATION_UPDATED'
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeSyncEnum {
  CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS',
  OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
  PaymentAuthorize = 'PAYMENT_AUTHORIZE',
  PaymentCapture = 'PAYMENT_CAPTURE',
  PaymentConfirm = 'PAYMENT_CONFIRM',
  PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
  PaymentProcess = 'PAYMENT_PROCESS',
  PaymentRefund = 'PAYMENT_REFUND',
  PaymentVoid = 'PAYMENT_VOID',
  ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT'
}

/** An enumeration. */
export enum WebhookSampleEventTypeEnum {
  CategoryCreated = 'CATEGORY_CREATED',
  CategoryDeleted = 'CATEGORY_DELETED',
  CategoryUpdated = 'CATEGORY_UPDATED',
  ChannelCreated = 'CHANNEL_CREATED',
  ChannelDeleted = 'CHANNEL_DELETED',
  ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
  ChannelUpdated = 'CHANNEL_UPDATED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  CollectionCreated = 'COLLECTION_CREATED',
  CollectionDeleted = 'COLLECTION_DELETED',
  CollectionUpdated = 'COLLECTION_UPDATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerUpdated = 'CUSTOMER_UPDATED',
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  GiftCardCreated = 'GIFT_CARD_CREATED',
  GiftCardDeleted = 'GIFT_CARD_DELETED',
  GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
  GiftCardUpdated = 'GIFT_CARD_UPDATED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  NotifyUser = 'NOTIFY_USER',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderConfirmed = 'ORDER_CONFIRMED',
  OrderCreated = 'ORDER_CREATED',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  PageCreated = 'PAGE_CREATED',
  PageDeleted = 'PAGE_DELETED',
  PageUpdated = 'PAGE_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductDeleted = 'PRODUCT_DELETED',
  ProductUpdated = 'PRODUCT_UPDATED',
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  SaleCreated = 'SALE_CREATED',
  SaleDeleted = 'SALE_DELETED',
  SaleUpdated = 'SALE_UPDATED',
  ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
  ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
  ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
  ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
  ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
  ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
  TranslationCreated = 'TRANSLATION_CREATED',
  TranslationUpdated = 'TRANSLATION_UPDATED'
}

/** Updates a webhook subscription. Requires one of the following permissions: MANAGE_APPS. */
export type WebhookUpdate = {
  __typename?: 'WebhookUpdate';
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookUpdateInput = {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars['ID']>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** The new name of the webhook. */
  name?: InputMaybe<Scalars['String']>;
  /** Added in Saleor 3.2. Subscription query used to define a webhook payload. Note: this feature is in a preview state and can be subject to changes at later point. */
  query?: InputMaybe<Scalars['String']>;
  /** Use to create a hash signature with each payload. */
  secretKey?: InputMaybe<Scalars['String']>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars['String']>;
};

/** Represents weight value in a specific weight unit. */
export type Weight = {
  __typename?: 'Weight';
  /** Weight unit. */
  unit: WeightUnitsEnum;
  /** Weight value. */
  value: Scalars['Float'];
};

/** An enumeration. */
export enum WeightUnitsEnum {
  G = 'G',
  Kg = 'KG',
  Lb = 'LB',
  Oz = 'OZ',
  Tonne = 'TONNE'
}

/** _Entity union as defined by Federation spec. */
export type _Entity = Address | App | Category | Collection | Group | PageType | Product | ProductMedia | ProductType | ProductVariant | User;

/** _Service manifest as defined by Federation spec. */
export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type FilterProductsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type FilterProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', totalCount?: number | null, edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, thumbnail?: { __typename?: 'Image', url: string } | null, category?: { __typename?: 'Category', name: string } | null, pricing?: { __typename?: 'ProductPricingInfo', priceRange?: { __typename?: 'TaxedMoneyRange', start?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', amount: number } } | null, stop?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', amount: number } } | null } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };

export type LatestProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, thumbnail?: { __typename?: 'Image', url: string } | null, category?: { __typename?: 'Category', name: string } | null } }> } | null };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductByIdQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description?: any | null, media?: Array<{ __typename?: 'ProductMedia', url: string }> | null, category?: { __typename?: 'Category', name: string } | null, variants?: Array<{ __typename?: 'ProductVariant', id: string, name: string }> | null } | null };

export type TShirtProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type TShirtProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, thumbnail?: { __typename?: 'Image', url: string } | null, category?: { __typename?: 'Category', name: string } | null } }> } | null };


export const FilterProductsDocument = gql`
    query FilterProducts($first: Int = 4, $after: String) {
  products(first: $first, channel: "default-channel", after: $after) {
    edges {
      node {
        id
        name
        thumbnail {
          url
        }
        category {
          name
        }
        pricing {
          priceRange {
            start {
              gross {
                amount
              }
            }
            stop {
              gross {
                amount
              }
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;

/**
 * __useFilterProductsQuery__
 *
 * To run a query within a React component, call `useFilterProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useFilterProductsQuery(baseOptions?: Apollo.QueryHookOptions<FilterProductsQuery, FilterProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterProductsQuery, FilterProductsQueryVariables>(FilterProductsDocument, options);
      }
export function useFilterProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterProductsQuery, FilterProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterProductsQuery, FilterProductsQueryVariables>(FilterProductsDocument, options);
        }
export type FilterProductsQueryHookResult = ReturnType<typeof useFilterProductsQuery>;
export type FilterProductsLazyQueryHookResult = ReturnType<typeof useFilterProductsLazyQuery>;
export type FilterProductsQueryResult = Apollo.QueryResult<FilterProductsQuery, FilterProductsQueryVariables>;
export const LatestProductsDocument = gql`
    query LatestProducts {
  products(first: 12, channel: "default-channel") {
    edges {
      node {
        id
        name
        thumbnail {
          url
        }
        category {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useLatestProductsQuery__
 *
 * To run a query within a React component, call `useLatestProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestProductsQuery(baseOptions?: Apollo.QueryHookOptions<LatestProductsQuery, LatestProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestProductsQuery, LatestProductsQueryVariables>(LatestProductsDocument, options);
      }
export function useLatestProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestProductsQuery, LatestProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestProductsQuery, LatestProductsQueryVariables>(LatestProductsDocument, options);
        }
export type LatestProductsQueryHookResult = ReturnType<typeof useLatestProductsQuery>;
export type LatestProductsLazyQueryHookResult = ReturnType<typeof useLatestProductsLazyQuery>;
export type LatestProductsQueryResult = Apollo.QueryResult<LatestProductsQuery, LatestProductsQueryVariables>;
export const ProductByIdDocument = gql`
    query ProductByID($id: ID!) {
  product(id: $id, channel: "default-channel") {
    id
    name
    description
    media {
      url
    }
    category {
      name
    }
    variants {
      id
      name
    }
  }
}
    `;

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions: Apollo.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
      }
export function useProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdQueryResult = Apollo.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export const TShirtProductsDocument = gql`
    query TShirtProducts {
  products(first: 12, channel: "default-channel", filter: {search: "t-shirt"}) {
    edges {
      node {
        id
        name
        thumbnail {
          url
        }
        category {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useTShirtProductsQuery__
 *
 * To run a query within a React component, call `useTShirtProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTShirtProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTShirtProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTShirtProductsQuery(baseOptions?: Apollo.QueryHookOptions<TShirtProductsQuery, TShirtProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TShirtProductsQuery, TShirtProductsQueryVariables>(TShirtProductsDocument, options);
      }
export function useTShirtProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TShirtProductsQuery, TShirtProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TShirtProductsQuery, TShirtProductsQueryVariables>(TShirtProductsDocument, options);
        }
export type TShirtProductsQueryHookResult = ReturnType<typeof useTShirtProductsQuery>;
export type TShirtProductsLazyQueryHookResult = ReturnType<typeof useTShirtProductsLazyQuery>;
export type TShirtProductsQueryResult = Apollo.QueryResult<TShirtProductsQuery, TShirtProductsQueryVariables>;
export type AccountAddressCreateKeySpecifier = ('accountErrors' | 'address' | 'errors' | 'user' | AccountAddressCreateKeySpecifier)[];
export type AccountAddressCreateFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountAddressDeleteKeySpecifier = ('accountErrors' | 'address' | 'errors' | 'user' | AccountAddressDeleteKeySpecifier)[];
export type AccountAddressDeleteFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountAddressUpdateKeySpecifier = ('accountErrors' | 'address' | 'errors' | 'user' | AccountAddressUpdateKeySpecifier)[];
export type AccountAddressUpdateFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountDeleteKeySpecifier = ('accountErrors' | 'errors' | 'user' | AccountDeleteKeySpecifier)[];
export type AccountDeleteFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountErrorKeySpecifier = ('addressType' | 'code' | 'field' | 'message' | AccountErrorKeySpecifier)[];
export type AccountErrorFieldPolicy = {
	addressType?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountRegisterKeySpecifier = ('accountErrors' | 'errors' | 'requiresConfirmation' | 'user' | AccountRegisterKeySpecifier)[];
export type AccountRegisterFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresConfirmation?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountRequestDeletionKeySpecifier = ('accountErrors' | 'errors' | AccountRequestDeletionKeySpecifier)[];
export type AccountRequestDeletionFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountSetDefaultAddressKeySpecifier = ('accountErrors' | 'errors' | 'user' | AccountSetDefaultAddressKeySpecifier)[];
export type AccountSetDefaultAddressFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountUpdateKeySpecifier = ('accountErrors' | 'errors' | 'user' | AccountUpdateKeySpecifier)[];
export type AccountUpdateFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressKeySpecifier = ('city' | 'cityArea' | 'companyName' | 'country' | 'countryArea' | 'firstName' | 'id' | 'isDefaultBillingAddress' | 'isDefaultShippingAddress' | 'lastName' | 'phone' | 'postalCode' | 'streetAddress1' | 'streetAddress2' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	cityArea?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	countryArea?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefaultBillingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefaultShippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	streetAddress1?: FieldPolicy<any> | FieldReadFunction<any>,
	streetAddress2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressCreateKeySpecifier = ('accountErrors' | 'address' | 'errors' | 'user' | AddressCreateKeySpecifier)[];
export type AddressCreateFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressDeleteKeySpecifier = ('accountErrors' | 'address' | 'errors' | 'user' | AddressDeleteKeySpecifier)[];
export type AddressDeleteFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressSetDefaultKeySpecifier = ('accountErrors' | 'errors' | 'user' | AddressSetDefaultKeySpecifier)[];
export type AddressSetDefaultFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressUpdateKeySpecifier = ('accountErrors' | 'address' | 'errors' | 'user' | AddressUpdateKeySpecifier)[];
export type AddressUpdateFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressValidationDataKeySpecifier = ('addressFormat' | 'addressLatinFormat' | 'allowedFields' | 'cityAreaChoices' | 'cityAreaType' | 'cityChoices' | 'cityType' | 'countryAreaChoices' | 'countryAreaType' | 'countryCode' | 'countryName' | 'postalCodeExamples' | 'postalCodeMatchers' | 'postalCodePrefix' | 'postalCodeType' | 'requiredFields' | 'upperFields' | AddressValidationDataKeySpecifier)[];
export type AddressValidationDataFieldPolicy = {
	addressFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	addressLatinFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	allowedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	cityAreaChoices?: FieldPolicy<any> | FieldReadFunction<any>,
	cityAreaType?: FieldPolicy<any> | FieldReadFunction<any>,
	cityChoices?: FieldPolicy<any> | FieldReadFunction<any>,
	cityType?: FieldPolicy<any> | FieldReadFunction<any>,
	countryAreaChoices?: FieldPolicy<any> | FieldReadFunction<any>,
	countryAreaType?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	countryName?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCodeExamples?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCodeMatchers?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCodePrefix?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCodeType?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredFields?: FieldPolicy<any> | FieldReadFunction<any>,
	upperFields?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllocationKeySpecifier = ('id' | 'quantity' | 'warehouse' | AllocationKeySpecifier)[];
export type AllocationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppKeySpecifier = ('aboutApp' | 'accessToken' | 'appUrl' | 'configurationUrl' | 'created' | 'dataPrivacy' | 'dataPrivacyUrl' | 'extensions' | 'homepageUrl' | 'id' | 'isActive' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'permissions' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'supportUrl' | 'tokens' | 'type' | 'version' | 'webhooks' | AppKeySpecifier)[];
export type AppFieldPolicy = {
	aboutApp?: FieldPolicy<any> | FieldReadFunction<any>,
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	appUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	dataPrivacy?: FieldPolicy<any> | FieldReadFunction<any>,
	dataPrivacyUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	supportUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	webhooks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppActivateKeySpecifier = ('app' | 'appErrors' | 'errors' | AppActivateKeySpecifier)[];
export type AppActivateFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | AppCountableConnectionKeySpecifier)[];
export type AppCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppCountableEdgeKeySpecifier = ('cursor' | 'node' | AppCountableEdgeKeySpecifier)[];
export type AppCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppCreateKeySpecifier = ('app' | 'appErrors' | 'authToken' | 'errors' | AppCreateKeySpecifier)[];
export type AppCreateFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppDeactivateKeySpecifier = ('app' | 'appErrors' | 'errors' | AppDeactivateKeySpecifier)[];
export type AppDeactivateFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppDeleteKeySpecifier = ('app' | 'appErrors' | 'errors' | AppDeleteKeySpecifier)[];
export type AppDeleteFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppDeleteFailedInstallationKeySpecifier = ('appErrors' | 'appInstallation' | 'errors' | AppDeleteFailedInstallationKeySpecifier)[];
export type AppDeleteFailedInstallationFieldPolicy = {
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppErrorKeySpecifier = ('code' | 'field' | 'message' | 'permissions' | AppErrorKeySpecifier)[];
export type AppErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppExtensionKeySpecifier = ('accessToken' | 'app' | 'id' | 'label' | 'mount' | 'permissions' | 'target' | 'url' | AppExtensionKeySpecifier)[];
export type AppExtensionFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	mount?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppExtensionCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | AppExtensionCountableConnectionKeySpecifier)[];
export type AppExtensionCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppExtensionCountableEdgeKeySpecifier = ('cursor' | 'node' | AppExtensionCountableEdgeKeySpecifier)[];
export type AppExtensionCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppFetchManifestKeySpecifier = ('appErrors' | 'errors' | 'manifest' | AppFetchManifestKeySpecifier)[];
export type AppFetchManifestFieldPolicy = {
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	manifest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppInstallKeySpecifier = ('appErrors' | 'appInstallation' | 'errors' | AppInstallKeySpecifier)[];
export type AppInstallFieldPolicy = {
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppInstallationKeySpecifier = ('appName' | 'createdAt' | 'id' | 'manifestUrl' | 'message' | 'status' | 'updatedAt' | AppInstallationKeySpecifier)[];
export type AppInstallationFieldPolicy = {
	appName?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	manifestUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppManifestExtensionKeySpecifier = ('label' | 'mount' | 'permissions' | 'target' | 'url' | AppManifestExtensionKeySpecifier)[];
export type AppManifestExtensionFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	mount?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppRetryInstallKeySpecifier = ('appErrors' | 'appInstallation' | 'errors' | AppRetryInstallKeySpecifier)[];
export type AppRetryInstallFieldPolicy = {
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenKeySpecifier = ('authToken' | 'id' | 'name' | AppTokenKeySpecifier)[];
export type AppTokenFieldPolicy = {
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenCreateKeySpecifier = ('appErrors' | 'appToken' | 'authToken' | 'errors' | AppTokenCreateKeySpecifier)[];
export type AppTokenCreateFieldPolicy = {
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appToken?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenDeleteKeySpecifier = ('appErrors' | 'appToken' | 'errors' | AppTokenDeleteKeySpecifier)[];
export type AppTokenDeleteFieldPolicy = {
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenVerifyKeySpecifier = ('appErrors' | 'errors' | 'valid' | AppTokenVerifyKeySpecifier)[];
export type AppTokenVerifyFieldPolicy = {
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	valid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppUpdateKeySpecifier = ('app' | 'appErrors' | 'errors' | AppUpdateKeySpecifier)[];
export type AppUpdateFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignNavigationKeySpecifier = ('errors' | 'menu' | 'menuErrors' | AssignNavigationKeySpecifier)[];
export type AssignNavigationFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedVariantAttributeKeySpecifier = ('attribute' | 'variantSelection' | AssignedVariantAttributeKeySpecifier)[];
export type AssignedVariantAttributeFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	variantSelection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeKeySpecifier = ('availableInGrid' | 'choices' | 'entityType' | 'filterableInDashboard' | 'filterableInStorefront' | 'id' | 'inputType' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'productTypes' | 'productVariantTypes' | 'slug' | 'storefrontSearchPosition' | 'translation' | 'type' | 'unit' | 'valueRequired' | 'visibleInStorefront' | 'withChoices' | AttributeKeySpecifier)[];
export type AttributeFieldPolicy = {
	availableInGrid?: FieldPolicy<any> | FieldReadFunction<any>,
	choices?: FieldPolicy<any> | FieldReadFunction<any>,
	entityType?: FieldPolicy<any> | FieldReadFunction<any>,
	filterableInDashboard?: FieldPolicy<any> | FieldReadFunction<any>,
	filterableInStorefront?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inputType?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	storefrontSearchPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	valueRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	visibleInStorefront?: FieldPolicy<any> | FieldReadFunction<any>,
	withChoices?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeBulkDeleteKeySpecifier = ('attributeErrors' | 'count' | 'errors' | AttributeBulkDeleteKeySpecifier)[];
export type AttributeBulkDeleteFieldPolicy = {
	attributeErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | AttributeCountableConnectionKeySpecifier)[];
export type AttributeCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeCountableEdgeKeySpecifier = ('cursor' | 'node' | AttributeCountableEdgeKeySpecifier)[];
export type AttributeCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeCreateKeySpecifier = ('attribute' | 'attributeErrors' | 'errors' | AttributeCreateKeySpecifier)[];
export type AttributeCreateFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeDeleteKeySpecifier = ('attribute' | 'attributeErrors' | 'errors' | AttributeDeleteKeySpecifier)[];
export type AttributeDeleteFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeErrorKeySpecifier = ('code' | 'field' | 'message' | AttributeErrorKeySpecifier)[];
export type AttributeErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeReorderValuesKeySpecifier = ('attribute' | 'attributeErrors' | 'errors' | AttributeReorderValuesKeySpecifier)[];
export type AttributeReorderValuesFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeTranslatableContentKeySpecifier = ('attribute' | 'id' | 'name' | 'translation' | AttributeTranslatableContentKeySpecifier)[];
export type AttributeTranslatableContentFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeTranslateKeySpecifier = ('attribute' | 'errors' | 'translationErrors' | AttributeTranslateKeySpecifier)[];
export type AttributeTranslateFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeTranslationKeySpecifier = ('id' | 'language' | 'name' | AttributeTranslationKeySpecifier)[];
export type AttributeTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeUpdateKeySpecifier = ('attribute' | 'attributeErrors' | 'errors' | AttributeUpdateKeySpecifier)[];
export type AttributeUpdateFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueKeySpecifier = ('boolean' | 'date' | 'dateTime' | 'file' | 'id' | 'inputType' | 'name' | 'reference' | 'richText' | 'slug' | 'translation' | 'value' | AttributeValueKeySpecifier)[];
export type AttributeValueFieldPolicy = {
	boolean?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	dateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inputType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	reference?: FieldPolicy<any> | FieldReadFunction<any>,
	richText?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueBulkDeleteKeySpecifier = ('attributeErrors' | 'count' | 'errors' | AttributeValueBulkDeleteKeySpecifier)[];
export type AttributeValueBulkDeleteFieldPolicy = {
	attributeErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | AttributeValueCountableConnectionKeySpecifier)[];
export type AttributeValueCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueCountableEdgeKeySpecifier = ('cursor' | 'node' | AttributeValueCountableEdgeKeySpecifier)[];
export type AttributeValueCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueCreateKeySpecifier = ('attribute' | 'attributeErrors' | 'attributeValue' | 'errors' | AttributeValueCreateKeySpecifier)[];
export type AttributeValueCreateFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueDeleteKeySpecifier = ('attribute' | 'attributeErrors' | 'attributeValue' | 'errors' | AttributeValueDeleteKeySpecifier)[];
export type AttributeValueDeleteFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueTranslatableContentKeySpecifier = ('attributeValue' | 'id' | 'name' | 'richText' | 'translation' | AttributeValueTranslatableContentKeySpecifier)[];
export type AttributeValueTranslatableContentFieldPolicy = {
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	richText?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueTranslateKeySpecifier = ('attributeValue' | 'errors' | 'translationErrors' | AttributeValueTranslateKeySpecifier)[];
export type AttributeValueTranslateFieldPolicy = {
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueTranslationKeySpecifier = ('id' | 'language' | 'name' | 'richText' | AttributeValueTranslationKeySpecifier)[];
export type AttributeValueTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	richText?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueUpdateKeySpecifier = ('attribute' | 'attributeErrors' | 'attributeValue' | 'errors' | AttributeValueUpdateKeySpecifier)[];
export type AttributeValueUpdateFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BulkProductErrorKeySpecifier = ('attributes' | 'channels' | 'code' | 'field' | 'index' | 'message' | 'values' | 'warehouses' | BulkProductErrorKeySpecifier)[];
export type BulkProductErrorFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BulkStockErrorKeySpecifier = ('attributes' | 'code' | 'field' | 'index' | 'message' | 'values' | BulkStockErrorKeySpecifier)[];
export type BulkStockErrorFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('ancestors' | 'backgroundImage' | 'children' | 'description' | 'descriptionJson' | 'id' | 'level' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'parent' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'products' | 'seoDescription' | 'seoTitle' | 'slug' | 'translation' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	backgroundImage?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryBulkDeleteKeySpecifier = ('count' | 'errors' | 'productErrors' | CategoryBulkDeleteKeySpecifier)[];
export type CategoryBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CategoryCountableConnectionKeySpecifier)[];
export type CategoryCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCountableEdgeKeySpecifier = ('cursor' | 'node' | CategoryCountableEdgeKeySpecifier)[];
export type CategoryCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCreateKeySpecifier = ('category' | 'errors' | 'productErrors' | CategoryCreateKeySpecifier)[];
export type CategoryCreateFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCreatedKeySpecifier = ('category' | CategoryCreatedKeySpecifier)[];
export type CategoryCreatedFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryDeleteKeySpecifier = ('category' | 'errors' | 'productErrors' | CategoryDeleteKeySpecifier)[];
export type CategoryDeleteFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryDeletedKeySpecifier = ('category' | CategoryDeletedKeySpecifier)[];
export type CategoryDeletedFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryTranslatableContentKeySpecifier = ('category' | 'description' | 'descriptionJson' | 'id' | 'name' | 'seoDescription' | 'seoTitle' | 'translation' | CategoryTranslatableContentKeySpecifier)[];
export type CategoryTranslatableContentFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryTranslateKeySpecifier = ('category' | 'errors' | 'translationErrors' | CategoryTranslateKeySpecifier)[];
export type CategoryTranslateFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryTranslationKeySpecifier = ('description' | 'descriptionJson' | 'id' | 'language' | 'name' | 'seoDescription' | 'seoTitle' | CategoryTranslationKeySpecifier)[];
export type CategoryTranslationFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryUpdateKeySpecifier = ('category' | 'errors' | 'productErrors' | CategoryUpdateKeySpecifier)[];
export type CategoryUpdateFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryUpdatedKeySpecifier = ('category' | CategoryUpdatedKeySpecifier)[];
export type CategoryUpdatedFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelKeySpecifier = ('currencyCode' | 'defaultCountry' | 'hasOrders' | 'id' | 'isActive' | 'name' | 'slug' | ChannelKeySpecifier)[];
export type ChannelFieldPolicy = {
	currencyCode?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultCountry?: FieldPolicy<any> | FieldReadFunction<any>,
	hasOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelActivateKeySpecifier = ('channel' | 'channelErrors' | 'errors' | ChannelActivateKeySpecifier)[];
export type ChannelActivateFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelCreateKeySpecifier = ('channel' | 'channelErrors' | 'errors' | ChannelCreateKeySpecifier)[];
export type ChannelCreateFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelCreatedKeySpecifier = ('channel' | ChannelCreatedKeySpecifier)[];
export type ChannelCreatedFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelDeactivateKeySpecifier = ('channel' | 'channelErrors' | 'errors' | ChannelDeactivateKeySpecifier)[];
export type ChannelDeactivateFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelDeleteKeySpecifier = ('channel' | 'channelErrors' | 'errors' | ChannelDeleteKeySpecifier)[];
export type ChannelDeleteFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelDeletedKeySpecifier = ('channel' | ChannelDeletedKeySpecifier)[];
export type ChannelDeletedFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelErrorKeySpecifier = ('code' | 'field' | 'message' | 'shippingZones' | ChannelErrorKeySpecifier)[];
export type ChannelErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZones?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelStatusChangedKeySpecifier = ('channel' | ChannelStatusChangedKeySpecifier)[];
export type ChannelStatusChangedFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelUpdateKeySpecifier = ('channel' | 'channelErrors' | 'errors' | ChannelUpdateKeySpecifier)[];
export type ChannelUpdateFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelUpdatedKeySpecifier = ('channel' | ChannelUpdatedKeySpecifier)[];
export type ChannelUpdatedFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutKeySpecifier = ('availableCollectionPoints' | 'availablePaymentGateways' | 'availableShippingMethods' | 'billingAddress' | 'channel' | 'created' | 'deliveryMethod' | 'discount' | 'discountName' | 'email' | 'giftCards' | 'id' | 'isShippingRequired' | 'languageCode' | 'lastChange' | 'lines' | 'metadata' | 'metafield' | 'metafields' | 'note' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'quantity' | 'shippingAddress' | 'shippingMethod' | 'shippingMethods' | 'shippingPrice' | 'stockReservationExpires' | 'subtotalPrice' | 'token' | 'totalPrice' | 'translatedDiscountName' | 'user' | 'voucherCode' | CheckoutKeySpecifier)[];
export type CheckoutFieldPolicy = {
	availableCollectionPoints?: FieldPolicy<any> | FieldReadFunction<any>,
	availablePaymentGateways?: FieldPolicy<any> | FieldReadFunction<any>,
	availableShippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isShippingRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	languageCode?: FieldPolicy<any> | FieldReadFunction<any>,
	lastChange?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	stockReservationExpires?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedDiscountName?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutAddPromoCodeKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutAddPromoCodeKeySpecifier)[];
export type CheckoutAddPromoCodeFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutBillingAddressUpdateKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutBillingAddressUpdateKeySpecifier)[];
export type CheckoutBillingAddressUpdateFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCompleteKeySpecifier = ('checkoutErrors' | 'confirmationData' | 'confirmationNeeded' | 'errors' | 'order' | CheckoutCompleteKeySpecifier)[];
export type CheckoutCompleteFieldPolicy = {
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmationData?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmationNeeded?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CheckoutCountableConnectionKeySpecifier)[];
export type CheckoutCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCountableEdgeKeySpecifier = ('cursor' | 'node' | CheckoutCountableEdgeKeySpecifier)[];
export type CheckoutCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCreateKeySpecifier = ('checkout' | 'checkoutErrors' | 'created' | 'errors' | CheckoutCreateKeySpecifier)[];
export type CheckoutCreateFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCreatedKeySpecifier = ('checkout' | CheckoutCreatedKeySpecifier)[];
export type CheckoutCreatedFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCustomerAttachKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutCustomerAttachKeySpecifier)[];
export type CheckoutCustomerAttachFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCustomerDetachKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutCustomerDetachKeySpecifier)[];
export type CheckoutCustomerDetachFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutDeliveryMethodUpdateKeySpecifier = ('checkout' | 'errors' | CheckoutDeliveryMethodUpdateKeySpecifier)[];
export type CheckoutDeliveryMethodUpdateFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutEmailUpdateKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutEmailUpdateKeySpecifier)[];
export type CheckoutEmailUpdateFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutErrorKeySpecifier = ('addressType' | 'code' | 'field' | 'lines' | 'message' | 'variants' | CheckoutErrorKeySpecifier)[];
export type CheckoutErrorFieldPolicy = {
	addressType?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLanguageCodeUpdateKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutLanguageCodeUpdateKeySpecifier)[];
export type CheckoutLanguageCodeUpdateFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineKeySpecifier = ('id' | 'quantity' | 'requiresShipping' | 'totalPrice' | 'variant' | CheckoutLineKeySpecifier)[];
export type CheckoutLineFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresShipping?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CheckoutLineCountableConnectionKeySpecifier)[];
export type CheckoutLineCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineCountableEdgeKeySpecifier = ('cursor' | 'node' | CheckoutLineCountableEdgeKeySpecifier)[];
export type CheckoutLineCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineDeleteKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutLineDeleteKeySpecifier)[];
export type CheckoutLineDeleteFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLinesAddKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutLinesAddKeySpecifier)[];
export type CheckoutLinesAddFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLinesDeleteKeySpecifier = ('checkout' | 'errors' | CheckoutLinesDeleteKeySpecifier)[];
export type CheckoutLinesDeleteFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLinesUpdateKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutLinesUpdateKeySpecifier)[];
export type CheckoutLinesUpdateFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutPaymentCreateKeySpecifier = ('checkout' | 'errors' | 'payment' | 'paymentErrors' | CheckoutPaymentCreateKeySpecifier)[];
export type CheckoutPaymentCreateFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutRemovePromoCodeKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutRemovePromoCodeKeySpecifier)[];
export type CheckoutRemovePromoCodeFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutShippingAddressUpdateKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutShippingAddressUpdateKeySpecifier)[];
export type CheckoutShippingAddressUpdateFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutShippingMethodUpdateKeySpecifier = ('checkout' | 'checkoutErrors' | 'errors' | CheckoutShippingMethodUpdateKeySpecifier)[];
export type CheckoutShippingMethodUpdateFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutUpdatedKeySpecifier = ('checkout' | CheckoutUpdatedKeySpecifier)[];
export type CheckoutUpdatedFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChoiceValueKeySpecifier = ('raw' | 'verbose' | ChoiceValueKeySpecifier)[];
export type ChoiceValueFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	verbose?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionKeySpecifier = ('backgroundImage' | 'channel' | 'channelListings' | 'description' | 'descriptionJson' | 'id' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'products' | 'seoDescription' | 'seoTitle' | 'slug' | 'translation' | CollectionKeySpecifier)[];
export type CollectionFieldPolicy = {
	backgroundImage?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelListings?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionAddProductsKeySpecifier = ('collection' | 'collectionErrors' | 'errors' | CollectionAddProductsKeySpecifier)[];
export type CollectionAddProductsFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionBulkDeleteKeySpecifier = ('collectionErrors' | 'count' | 'errors' | CollectionBulkDeleteKeySpecifier)[];
export type CollectionBulkDeleteFieldPolicy = {
	collectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionChannelListingKeySpecifier = ('channel' | 'id' | 'isPublished' | 'publicationDate' | 'publishedAt' | CollectionChannelListingKeySpecifier)[];
export type CollectionChannelListingFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionChannelListingErrorKeySpecifier = ('attributes' | 'channels' | 'code' | 'field' | 'message' | 'values' | CollectionChannelListingErrorKeySpecifier)[];
export type CollectionChannelListingErrorFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionChannelListingUpdateKeySpecifier = ('collection' | 'collectionChannelListingErrors' | 'errors' | CollectionChannelListingUpdateKeySpecifier)[];
export type CollectionChannelListingUpdateFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionChannelListingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CollectionCountableConnectionKeySpecifier)[];
export type CollectionCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionCountableEdgeKeySpecifier = ('cursor' | 'node' | CollectionCountableEdgeKeySpecifier)[];
export type CollectionCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionCreateKeySpecifier = ('collection' | 'collectionErrors' | 'errors' | CollectionCreateKeySpecifier)[];
export type CollectionCreateFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionCreatedKeySpecifier = ('collection' | CollectionCreatedKeySpecifier)[];
export type CollectionCreatedFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionDeleteKeySpecifier = ('collection' | 'collectionErrors' | 'errors' | CollectionDeleteKeySpecifier)[];
export type CollectionDeleteFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionDeletedKeySpecifier = ('collection' | CollectionDeletedKeySpecifier)[];
export type CollectionDeletedFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionErrorKeySpecifier = ('code' | 'field' | 'message' | 'products' | CollectionErrorKeySpecifier)[];
export type CollectionErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionRemoveProductsKeySpecifier = ('collection' | 'collectionErrors' | 'errors' | CollectionRemoveProductsKeySpecifier)[];
export type CollectionRemoveProductsFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionReorderProductsKeySpecifier = ('collection' | 'collectionErrors' | 'errors' | CollectionReorderProductsKeySpecifier)[];
export type CollectionReorderProductsFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionTranslatableContentKeySpecifier = ('collection' | 'description' | 'descriptionJson' | 'id' | 'name' | 'seoDescription' | 'seoTitle' | 'translation' | CollectionTranslatableContentKeySpecifier)[];
export type CollectionTranslatableContentFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionTranslateKeySpecifier = ('collection' | 'errors' | 'translationErrors' | CollectionTranslateKeySpecifier)[];
export type CollectionTranslateFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionTranslationKeySpecifier = ('description' | 'descriptionJson' | 'id' | 'language' | 'name' | 'seoDescription' | 'seoTitle' | CollectionTranslationKeySpecifier)[];
export type CollectionTranslationFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionUpdateKeySpecifier = ('collection' | 'collectionErrors' | 'errors' | CollectionUpdateKeySpecifier)[];
export type CollectionUpdateFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionUpdatedKeySpecifier = ('collection' | CollectionUpdatedKeySpecifier)[];
export type CollectionUpdatedFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurationItemKeySpecifier = ('helpText' | 'label' | 'name' | 'type' | 'value' | ConfigurationItemKeySpecifier)[];
export type ConfigurationItemFieldPolicy = {
	helpText?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfirmAccountKeySpecifier = ('accountErrors' | 'errors' | 'user' | ConfirmAccountKeySpecifier)[];
export type ConfirmAccountFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfirmEmailChangeKeySpecifier = ('accountErrors' | 'errors' | 'user' | ConfirmEmailChangeKeySpecifier)[];
export type ConfirmEmailChangeFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryDisplayKeySpecifier = ('code' | 'country' | 'vat' | CountryDisplayKeySpecifier)[];
export type CountryDisplayFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	vat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTokenKeySpecifier = ('accountErrors' | 'csrfToken' | 'errors' | 'refreshToken' | 'token' | 'user' | CreateTokenKeySpecifier)[];
export type CreateTokenFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditCardKeySpecifier = ('brand' | 'expMonth' | 'expYear' | 'firstDigits' | 'lastDigits' | CreditCardKeySpecifier)[];
export type CreditCardFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	expMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	expYear?: FieldPolicy<any> | FieldReadFunction<any>,
	firstDigits?: FieldPolicy<any> | FieldReadFunction<any>,
	lastDigits?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerBulkDeleteKeySpecifier = ('accountErrors' | 'count' | 'errors' | CustomerBulkDeleteKeySpecifier)[];
export type CustomerBulkDeleteFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerCreateKeySpecifier = ('accountErrors' | 'errors' | 'user' | CustomerCreateKeySpecifier)[];
export type CustomerCreateFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerCreatedKeySpecifier = ('user' | CustomerCreatedKeySpecifier)[];
export type CustomerCreatedFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerDeleteKeySpecifier = ('accountErrors' | 'errors' | 'user' | CustomerDeleteKeySpecifier)[];
export type CustomerDeleteFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerEventKeySpecifier = ('app' | 'count' | 'date' | 'id' | 'message' | 'order' | 'orderLine' | 'type' | 'user' | CustomerEventKeySpecifier)[];
export type CustomerEventFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerUpdateKeySpecifier = ('accountErrors' | 'errors' | 'user' | CustomerUpdateKeySpecifier)[];
export type CustomerUpdateFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerUpdatedKeySpecifier = ('user' | CustomerUpdatedKeySpecifier)[];
export type CustomerUpdatedFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeactivateAllUserTokensKeySpecifier = ('accountErrors' | 'errors' | DeactivateAllUserTokensKeySpecifier)[];
export type DeactivateAllUserTokensFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteMetadataKeySpecifier = ('errors' | 'item' | 'metadataErrors' | DeleteMetadataKeySpecifier)[];
export type DeleteMetadataFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePrivateMetadataKeySpecifier = ('errors' | 'item' | 'metadataErrors' | DeletePrivateMetadataKeySpecifier)[];
export type DeletePrivateMetadataFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentKeySpecifier = ('automaticFulfillment' | 'contentFile' | 'id' | 'maxDownloads' | 'metadata' | 'metafield' | 'metafields' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'productVariant' | 'urlValidDays' | 'urls' | 'useDefaultSettings' | DigitalContentKeySpecifier)[];
export type DigitalContentFieldPolicy = {
	automaticFulfillment?: FieldPolicy<any> | FieldReadFunction<any>,
	contentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maxDownloads?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	urlValidDays?: FieldPolicy<any> | FieldReadFunction<any>,
	urls?: FieldPolicy<any> | FieldReadFunction<any>,
	useDefaultSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | DigitalContentCountableConnectionKeySpecifier)[];
export type DigitalContentCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentCountableEdgeKeySpecifier = ('cursor' | 'node' | DigitalContentCountableEdgeKeySpecifier)[];
export type DigitalContentCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentCreateKeySpecifier = ('content' | 'errors' | 'productErrors' | 'variant' | DigitalContentCreateKeySpecifier)[];
export type DigitalContentCreateFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentDeleteKeySpecifier = ('errors' | 'productErrors' | 'variant' | DigitalContentDeleteKeySpecifier)[];
export type DigitalContentDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentUpdateKeySpecifier = ('content' | 'errors' | 'productErrors' | 'variant' | DigitalContentUpdateKeySpecifier)[];
export type DigitalContentUpdateFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentUrlKeySpecifier = ('content' | 'created' | 'downloadNum' | 'id' | 'token' | 'url' | DigitalContentUrlKeySpecifier)[];
export type DigitalContentUrlFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadNum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentUrlCreateKeySpecifier = ('digitalContentUrl' | 'errors' | 'productErrors' | DigitalContentUrlCreateKeySpecifier)[];
export type DigitalContentUrlCreateFieldPolicy = {
	digitalContentUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountErrorKeySpecifier = ('channels' | 'code' | 'field' | 'message' | 'products' | DiscountErrorKeySpecifier)[];
export type DiscountErrorFieldPolicy = {
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DomainKeySpecifier = ('host' | 'sslEnabled' | 'url' | DomainKeySpecifier)[];
export type DomainFieldPolicy = {
	host?: FieldPolicy<any> | FieldReadFunction<any>,
	sslEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderBulkDeleteKeySpecifier = ('count' | 'errors' | 'orderErrors' | DraftOrderBulkDeleteKeySpecifier)[];
export type DraftOrderBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderCompleteKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderCompleteKeySpecifier)[];
export type DraftOrderCompleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderCreateKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderCreateKeySpecifier)[];
export type DraftOrderCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderCreatedKeySpecifier = ('order' | DraftOrderCreatedKeySpecifier)[];
export type DraftOrderCreatedFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderDeleteKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderDeleteKeySpecifier)[];
export type DraftOrderDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderDeletedKeySpecifier = ('order' | DraftOrderDeletedKeySpecifier)[];
export type DraftOrderDeletedFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderLinesBulkDeleteKeySpecifier = ('count' | 'errors' | 'orderErrors' | DraftOrderLinesBulkDeleteKeySpecifier)[];
export type DraftOrderLinesBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderUpdateKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderUpdateKeySpecifier)[];
export type DraftOrderUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderUpdatedKeySpecifier = ('order' | DraftOrderUpdatedKeySpecifier)[];
export type DraftOrderUpdatedFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventDeliveryKeySpecifier = ('attempts' | 'createdAt' | 'eventType' | 'id' | 'payload' | 'status' | EventDeliveryKeySpecifier)[];
export type EventDeliveryFieldPolicy = {
	attempts?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventDeliveryAttemptKeySpecifier = ('createdAt' | 'duration' | 'id' | 'requestHeaders' | 'response' | 'responseHeaders' | 'responseStatusCode' | 'status' | 'taskId' | EventDeliveryAttemptKeySpecifier)[];
export type EventDeliveryAttemptFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	requestHeaders?: FieldPolicy<any> | FieldReadFunction<any>,
	response?: FieldPolicy<any> | FieldReadFunction<any>,
	responseHeaders?: FieldPolicy<any> | FieldReadFunction<any>,
	responseStatusCode?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventDeliveryAttemptCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | EventDeliveryAttemptCountableConnectionKeySpecifier)[];
export type EventDeliveryAttemptCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventDeliveryAttemptCountableEdgeKeySpecifier = ('cursor' | 'node' | EventDeliveryAttemptCountableEdgeKeySpecifier)[];
export type EventDeliveryAttemptCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventDeliveryCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | EventDeliveryCountableConnectionKeySpecifier)[];
export type EventDeliveryCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventDeliveryCountableEdgeKeySpecifier = ('cursor' | 'node' | EventDeliveryCountableEdgeKeySpecifier)[];
export type EventDeliveryCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventDeliveryRetryKeySpecifier = ('delivery' | 'errors' | EventDeliveryRetryKeySpecifier)[];
export type EventDeliveryRetryFieldPolicy = {
	delivery?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportErrorKeySpecifier = ('code' | 'field' | 'message' | ExportErrorKeySpecifier)[];
export type ExportErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportEventKeySpecifier = ('app' | 'date' | 'id' | 'message' | 'type' | 'user' | ExportEventKeySpecifier)[];
export type ExportEventFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportFileKeySpecifier = ('app' | 'createdAt' | 'events' | 'id' | 'message' | 'status' | 'updatedAt' | 'url' | 'user' | ExportFileKeySpecifier)[];
export type ExportFileFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportFileCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ExportFileCountableConnectionKeySpecifier)[];
export type ExportFileCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportFileCountableEdgeKeySpecifier = ('cursor' | 'node' | ExportFileCountableEdgeKeySpecifier)[];
export type ExportFileCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportGiftCardsKeySpecifier = ('errors' | 'exportFile' | ExportGiftCardsKeySpecifier)[];
export type ExportGiftCardsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportProductsKeySpecifier = ('errors' | 'exportErrors' | 'exportFile' | ExportProductsKeySpecifier)[];
export type ExportProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	exportErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalAuthenticationKeySpecifier = ('id' | 'name' | ExternalAuthenticationKeySpecifier)[];
export type ExternalAuthenticationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalAuthenticationUrlKeySpecifier = ('accountErrors' | 'authenticationData' | 'errors' | ExternalAuthenticationUrlKeySpecifier)[];
export type ExternalAuthenticationUrlFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticationData?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalLogoutKeySpecifier = ('accountErrors' | 'errors' | 'logoutData' | ExternalLogoutKeySpecifier)[];
export type ExternalLogoutFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	logoutData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalNotificationErrorKeySpecifier = ('code' | 'field' | 'message' | ExternalNotificationErrorKeySpecifier)[];
export type ExternalNotificationErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalNotificationTriggerKeySpecifier = ('errors' | ExternalNotificationTriggerKeySpecifier)[];
export type ExternalNotificationTriggerFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalObtainAccessTokensKeySpecifier = ('accountErrors' | 'csrfToken' | 'errors' | 'refreshToken' | 'token' | 'user' | ExternalObtainAccessTokensKeySpecifier)[];
export type ExternalObtainAccessTokensFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalRefreshKeySpecifier = ('accountErrors' | 'csrfToken' | 'errors' | 'refreshToken' | 'token' | 'user' | ExternalRefreshKeySpecifier)[];
export type ExternalRefreshFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalVerifyKeySpecifier = ('accountErrors' | 'errors' | 'isValid' | 'user' | 'verifyData' | ExternalVerifyKeySpecifier)[];
export type ExternalVerifyFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('contentType' | 'url' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileUploadKeySpecifier = ('errors' | 'uploadErrors' | 'uploadedFile' | FileUploadKeySpecifier)[];
export type FileUploadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadedFile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentKeySpecifier = ('created' | 'fulfillmentOrder' | 'id' | 'lines' | 'metadata' | 'metafield' | 'metafields' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'status' | 'statusDisplay' | 'trackingNumber' | 'warehouse' | FulfillmentKeySpecifier)[];
export type FulfillmentFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillmentOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	statusDisplay?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentApproveKeySpecifier = ('errors' | 'fulfillment' | 'order' | 'orderErrors' | FulfillmentApproveKeySpecifier)[];
export type FulfillmentApproveFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentCancelKeySpecifier = ('errors' | 'fulfillment' | 'order' | 'orderErrors' | FulfillmentCancelKeySpecifier)[];
export type FulfillmentCancelFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentCanceledKeySpecifier = ('fulfillment' | FulfillmentCanceledKeySpecifier)[];
export type FulfillmentCanceledFieldPolicy = {
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentCreatedKeySpecifier = ('fulfillment' | FulfillmentCreatedKeySpecifier)[];
export type FulfillmentCreatedFieldPolicy = {
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentLineKeySpecifier = ('id' | 'orderLine' | 'quantity' | FulfillmentLineKeySpecifier)[];
export type FulfillmentLineFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentRefundProductsKeySpecifier = ('errors' | 'fulfillment' | 'order' | 'orderErrors' | FulfillmentRefundProductsKeySpecifier)[];
export type FulfillmentRefundProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentReturnProductsKeySpecifier = ('errors' | 'order' | 'orderErrors' | 'replaceFulfillment' | 'replaceOrder' | 'returnFulfillment' | FulfillmentReturnProductsKeySpecifier)[];
export type FulfillmentReturnProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	replaceFulfillment?: FieldPolicy<any> | FieldReadFunction<any>,
	replaceOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	returnFulfillment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentUpdateTrackingKeySpecifier = ('errors' | 'fulfillment' | 'order' | 'orderErrors' | FulfillmentUpdateTrackingKeySpecifier)[];
export type FulfillmentUpdateTrackingFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GatewayConfigLineKeySpecifier = ('field' | 'value' | GatewayConfigLineKeySpecifier)[];
export type GatewayConfigLineFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardKeySpecifier = ('app' | 'boughtInChannel' | 'code' | 'created' | 'createdBy' | 'createdByEmail' | 'currentBalance' | 'displayCode' | 'endDate' | 'events' | 'expiryDate' | 'id' | 'initialBalance' | 'isActive' | 'last4CodeChars' | 'lastUsedOn' | 'metadata' | 'metafield' | 'metafields' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'product' | 'startDate' | 'tags' | 'usedBy' | 'usedByEmail' | 'user' | GiftCardKeySpecifier)[];
export type GiftCardFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	boughtInChannel?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdByEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	currentBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	displayCode?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	expiryDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initialBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	last4CodeChars?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUsedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	usedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	usedByEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardActivateKeySpecifier = ('errors' | 'giftCard' | 'giftCardErrors' | GiftCardActivateKeySpecifier)[];
export type GiftCardActivateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardAddNoteKeySpecifier = ('errors' | 'event' | 'giftCard' | GiftCardAddNoteKeySpecifier)[];
export type GiftCardAddNoteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardBulkActivateKeySpecifier = ('count' | 'errors' | GiftCardBulkActivateKeySpecifier)[];
export type GiftCardBulkActivateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardBulkCreateKeySpecifier = ('count' | 'errors' | 'giftCards' | GiftCardBulkCreateKeySpecifier)[];
export type GiftCardBulkCreateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardBulkDeactivateKeySpecifier = ('count' | 'errors' | GiftCardBulkDeactivateKeySpecifier)[];
export type GiftCardBulkDeactivateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardBulkDeleteKeySpecifier = ('count' | 'errors' | GiftCardBulkDeleteKeySpecifier)[];
export type GiftCardBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | GiftCardCountableConnectionKeySpecifier)[];
export type GiftCardCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardCountableEdgeKeySpecifier = ('cursor' | 'node' | GiftCardCountableEdgeKeySpecifier)[];
export type GiftCardCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardCreateKeySpecifier = ('errors' | 'giftCard' | 'giftCardErrors' | GiftCardCreateKeySpecifier)[];
export type GiftCardCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardCreatedKeySpecifier = ('giftCard' | GiftCardCreatedKeySpecifier)[];
export type GiftCardCreatedFieldPolicy = {
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardDeactivateKeySpecifier = ('errors' | 'giftCard' | 'giftCardErrors' | GiftCardDeactivateKeySpecifier)[];
export type GiftCardDeactivateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardDeleteKeySpecifier = ('errors' | 'giftCard' | 'giftCardErrors' | GiftCardDeleteKeySpecifier)[];
export type GiftCardDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardDeletedKeySpecifier = ('giftCard' | GiftCardDeletedKeySpecifier)[];
export type GiftCardDeletedFieldPolicy = {
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardErrorKeySpecifier = ('code' | 'field' | 'message' | 'tags' | GiftCardErrorKeySpecifier)[];
export type GiftCardErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardEventKeySpecifier = ('app' | 'balance' | 'date' | 'email' | 'expiryDate' | 'id' | 'message' | 'oldExpiryDate' | 'oldTags' | 'orderId' | 'orderNumber' | 'tags' | 'type' | 'user' | GiftCardEventKeySpecifier)[];
export type GiftCardEventFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	expiryDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	oldExpiryDate?: FieldPolicy<any> | FieldReadFunction<any>,
	oldTags?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	orderNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardEventBalanceKeySpecifier = ('currentBalance' | 'initialBalance' | 'oldCurrentBalance' | 'oldInitialBalance' | GiftCardEventBalanceKeySpecifier)[];
export type GiftCardEventBalanceFieldPolicy = {
	currentBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	initialBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	oldCurrentBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	oldInitialBalance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardResendKeySpecifier = ('errors' | 'giftCard' | GiftCardResendKeySpecifier)[];
export type GiftCardResendFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardSettingsKeySpecifier = ('expiryPeriod' | 'expiryType' | GiftCardSettingsKeySpecifier)[];
export type GiftCardSettingsFieldPolicy = {
	expiryPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	expiryType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardSettingsErrorKeySpecifier = ('code' | 'field' | 'message' | GiftCardSettingsErrorKeySpecifier)[];
export type GiftCardSettingsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardSettingsUpdateKeySpecifier = ('errors' | 'giftCardSettings' | GiftCardSettingsUpdateKeySpecifier)[];
export type GiftCardSettingsUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardStatusChangedKeySpecifier = ('giftCard' | GiftCardStatusChangedKeySpecifier)[];
export type GiftCardStatusChangedFieldPolicy = {
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardTagKeySpecifier = ('id' | 'name' | GiftCardTagKeySpecifier)[];
export type GiftCardTagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardTagCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | GiftCardTagCountableConnectionKeySpecifier)[];
export type GiftCardTagCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardTagCountableEdgeKeySpecifier = ('cursor' | 'node' | GiftCardTagCountableEdgeKeySpecifier)[];
export type GiftCardTagCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardUpdateKeySpecifier = ('errors' | 'giftCard' | 'giftCardErrors' | GiftCardUpdateKeySpecifier)[];
export type GiftCardUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardUpdatedKeySpecifier = ('giftCard' | GiftCardUpdatedKeySpecifier)[];
export type GiftCardUpdatedFieldPolicy = {
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupKeySpecifier = ('id' | 'name' | 'permissions' | 'userCanManage' | 'users' | GroupKeySpecifier)[];
export type GroupFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	userCanManage?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | GroupCountableConnectionKeySpecifier)[];
export type GroupCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupCountableEdgeKeySpecifier = ('cursor' | 'node' | GroupCountableEdgeKeySpecifier)[];
export type GroupCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageKeySpecifier = ('alt' | 'url' | ImageKeySpecifier)[];
export type ImageFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceKeySpecifier = ('createdAt' | 'externalUrl' | 'id' | 'message' | 'metadata' | 'metafield' | 'metafields' | 'number' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'status' | 'updatedAt' | 'url' | InvoiceKeySpecifier)[];
export type InvoiceFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	externalUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceCreateKeySpecifier = ('errors' | 'invoice' | 'invoiceErrors' | InvoiceCreateKeySpecifier)[];
export type InvoiceCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceDeleteKeySpecifier = ('errors' | 'invoice' | 'invoiceErrors' | InvoiceDeleteKeySpecifier)[];
export type InvoiceDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceDeletedKeySpecifier = ('invoice' | InvoiceDeletedKeySpecifier)[];
export type InvoiceDeletedFieldPolicy = {
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceErrorKeySpecifier = ('code' | 'field' | 'message' | InvoiceErrorKeySpecifier)[];
export type InvoiceErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceRequestKeySpecifier = ('errors' | 'invoice' | 'invoiceErrors' | 'order' | InvoiceRequestKeySpecifier)[];
export type InvoiceRequestFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceRequestDeleteKeySpecifier = ('errors' | 'invoice' | 'invoiceErrors' | InvoiceRequestDeleteKeySpecifier)[];
export type InvoiceRequestDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceRequestedKeySpecifier = ('invoice' | InvoiceRequestedKeySpecifier)[];
export type InvoiceRequestedFieldPolicy = {
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceSendNotificationKeySpecifier = ('errors' | 'invoice' | 'invoiceErrors' | InvoiceSendNotificationKeySpecifier)[];
export type InvoiceSendNotificationFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceSentKeySpecifier = ('invoice' | InvoiceSentKeySpecifier)[];
export type InvoiceSentFieldPolicy = {
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceUpdateKeySpecifier = ('errors' | 'invoice' | 'invoiceErrors' | InvoiceUpdateKeySpecifier)[];
export type InvoiceUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobKeySpecifier = ('createdAt' | 'message' | 'status' | 'updatedAt' | JobKeySpecifier)[];
export type JobFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageDisplayKeySpecifier = ('code' | 'language' | LanguageDisplayKeySpecifier)[];
export type LanguageDisplayFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LimitInfoKeySpecifier = ('allowedUsage' | 'currentUsage' | LimitInfoKeySpecifier)[];
export type LimitInfoFieldPolicy = {
	allowedUsage?: FieldPolicy<any> | FieldReadFunction<any>,
	currentUsage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LimitsKeySpecifier = ('channels' | 'orders' | 'productVariants' | 'staffUsers' | 'warehouses' | LimitsKeySpecifier)[];
export type LimitsFieldPolicy = {
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	staffUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ManifestKeySpecifier = ('about' | 'appUrl' | 'configurationUrl' | 'dataPrivacy' | 'dataPrivacyUrl' | 'extensions' | 'homepageUrl' | 'identifier' | 'name' | 'permissions' | 'supportUrl' | 'tokenTargetUrl' | 'version' | ManifestKeySpecifier)[];
export type ManifestFieldPolicy = {
	about?: FieldPolicy<any> | FieldReadFunction<any>,
	appUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	dataPrivacy?: FieldPolicy<any> | FieldReadFunction<any>,
	dataPrivacyUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	supportUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenTargetUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarginKeySpecifier = ('start' | 'stop' | MarginKeySpecifier)[];
export type MarginFieldPolicy = {
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	stop?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuKeySpecifier = ('id' | 'items' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'slug' | MenuKeySpecifier)[];
export type MenuFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuBulkDeleteKeySpecifier = ('count' | 'errors' | 'menuErrors' | MenuBulkDeleteKeySpecifier)[];
export type MenuBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | MenuCountableConnectionKeySpecifier)[];
export type MenuCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuCountableEdgeKeySpecifier = ('cursor' | 'node' | MenuCountableEdgeKeySpecifier)[];
export type MenuCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuCreateKeySpecifier = ('errors' | 'menu' | 'menuErrors' | MenuCreateKeySpecifier)[];
export type MenuCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuDeleteKeySpecifier = ('errors' | 'menu' | 'menuErrors' | MenuDeleteKeySpecifier)[];
export type MenuDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuErrorKeySpecifier = ('code' | 'field' | 'message' | MenuErrorKeySpecifier)[];
export type MenuErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemKeySpecifier = ('category' | 'children' | 'collection' | 'id' | 'level' | 'menu' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'page' | 'parent' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'translation' | 'url' | MenuItemKeySpecifier)[];
export type MenuItemFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemBulkDeleteKeySpecifier = ('count' | 'errors' | 'menuErrors' | MenuItemBulkDeleteKeySpecifier)[];
export type MenuItemBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | MenuItemCountableConnectionKeySpecifier)[];
export type MenuItemCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemCountableEdgeKeySpecifier = ('cursor' | 'node' | MenuItemCountableEdgeKeySpecifier)[];
export type MenuItemCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemCreateKeySpecifier = ('errors' | 'menuErrors' | 'menuItem' | MenuItemCreateKeySpecifier)[];
export type MenuItemCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemDeleteKeySpecifier = ('errors' | 'menuErrors' | 'menuItem' | MenuItemDeleteKeySpecifier)[];
export type MenuItemDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemMoveKeySpecifier = ('errors' | 'menu' | 'menuErrors' | MenuItemMoveKeySpecifier)[];
export type MenuItemMoveFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemTranslatableContentKeySpecifier = ('id' | 'menuItem' | 'name' | 'translation' | MenuItemTranslatableContentKeySpecifier)[];
export type MenuItemTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemTranslateKeySpecifier = ('errors' | 'menuItem' | 'translationErrors' | MenuItemTranslateKeySpecifier)[];
export type MenuItemTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemTranslationKeySpecifier = ('id' | 'language' | 'name' | MenuItemTranslationKeySpecifier)[];
export type MenuItemTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemUpdateKeySpecifier = ('errors' | 'menuErrors' | 'menuItem' | MenuItemUpdateKeySpecifier)[];
export type MenuItemUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuUpdateKeySpecifier = ('errors' | 'menu' | 'menuErrors' | MenuUpdateKeySpecifier)[];
export type MenuUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataErrorKeySpecifier = ('code' | 'field' | 'message' | MetadataErrorKeySpecifier)[];
export type MetadataErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataItemKeySpecifier = ('key' | 'value' | MetadataItemKeySpecifier)[];
export type MetadataItemFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyKeySpecifier = ('amount' | 'currency' | MoneyKeySpecifier)[];
export type MoneyFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyRangeKeySpecifier = ('start' | 'stop' | MoneyRangeKeySpecifier)[];
export type MoneyRangeFieldPolicy = {
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	stop?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('accountAddressCreate' | 'accountAddressDelete' | 'accountAddressUpdate' | 'accountDelete' | 'accountRegister' | 'accountRequestDeletion' | 'accountSetDefaultAddress' | 'accountUpdate' | 'addressCreate' | 'addressDelete' | 'addressSetDefault' | 'addressUpdate' | 'appActivate' | 'appCreate' | 'appDeactivate' | 'appDelete' | 'appDeleteFailedInstallation' | 'appFetchManifest' | 'appInstall' | 'appRetryInstall' | 'appTokenCreate' | 'appTokenDelete' | 'appTokenVerify' | 'appUpdate' | 'assignNavigation' | 'assignWarehouseShippingZone' | 'attributeBulkDelete' | 'attributeCreate' | 'attributeDelete' | 'attributeReorderValues' | 'attributeTranslate' | 'attributeUpdate' | 'attributeValueBulkDelete' | 'attributeValueCreate' | 'attributeValueDelete' | 'attributeValueTranslate' | 'attributeValueUpdate' | 'categoryBulkDelete' | 'categoryCreate' | 'categoryDelete' | 'categoryTranslate' | 'categoryUpdate' | 'channelActivate' | 'channelCreate' | 'channelDeactivate' | 'channelDelete' | 'channelUpdate' | 'checkoutAddPromoCode' | 'checkoutBillingAddressUpdate' | 'checkoutComplete' | 'checkoutCreate' | 'checkoutCustomerAttach' | 'checkoutCustomerDetach' | 'checkoutDeliveryMethodUpdate' | 'checkoutEmailUpdate' | 'checkoutLanguageCodeUpdate' | 'checkoutLineDelete' | 'checkoutLinesAdd' | 'checkoutLinesDelete' | 'checkoutLinesUpdate' | 'checkoutPaymentCreate' | 'checkoutRemovePromoCode' | 'checkoutShippingAddressUpdate' | 'checkoutShippingMethodUpdate' | 'collectionAddProducts' | 'collectionBulkDelete' | 'collectionChannelListingUpdate' | 'collectionCreate' | 'collectionDelete' | 'collectionRemoveProducts' | 'collectionReorderProducts' | 'collectionTranslate' | 'collectionUpdate' | 'confirmAccount' | 'confirmEmailChange' | 'createWarehouse' | 'customerBulkDelete' | 'customerCreate' | 'customerDelete' | 'customerUpdate' | 'deleteMetadata' | 'deletePrivateMetadata' | 'deleteWarehouse' | 'digitalContentCreate' | 'digitalContentDelete' | 'digitalContentUpdate' | 'digitalContentUrlCreate' | 'draftOrderBulkDelete' | 'draftOrderComplete' | 'draftOrderCreate' | 'draftOrderDelete' | 'draftOrderLinesBulkDelete' | 'draftOrderUpdate' | 'eventDeliveryRetry' | 'exportGiftCards' | 'exportProducts' | 'externalAuthenticationUrl' | 'externalLogout' | 'externalNotificationTrigger' | 'externalObtainAccessTokens' | 'externalRefresh' | 'externalVerify' | 'fileUpload' | 'giftCardActivate' | 'giftCardAddNote' | 'giftCardBulkActivate' | 'giftCardBulkCreate' | 'giftCardBulkDeactivate' | 'giftCardBulkDelete' | 'giftCardCreate' | 'giftCardDeactivate' | 'giftCardDelete' | 'giftCardResend' | 'giftCardSettingsUpdate' | 'giftCardUpdate' | 'invoiceCreate' | 'invoiceDelete' | 'invoiceRequest' | 'invoiceRequestDelete' | 'invoiceSendNotification' | 'invoiceUpdate' | 'menuBulkDelete' | 'menuCreate' | 'menuDelete' | 'menuItemBulkDelete' | 'menuItemCreate' | 'menuItemDelete' | 'menuItemMove' | 'menuItemTranslate' | 'menuItemUpdate' | 'menuUpdate' | 'orderAddNote' | 'orderBulkCancel' | 'orderCancel' | 'orderCapture' | 'orderConfirm' | 'orderCreateFromCheckout' | 'orderDiscountAdd' | 'orderDiscountDelete' | 'orderDiscountUpdate' | 'orderFulfill' | 'orderFulfillmentApprove' | 'orderFulfillmentCancel' | 'orderFulfillmentRefundProducts' | 'orderFulfillmentReturnProducts' | 'orderFulfillmentUpdateTracking' | 'orderLineDelete' | 'orderLineDiscountRemove' | 'orderLineDiscountUpdate' | 'orderLineUpdate' | 'orderLinesCreate' | 'orderMarkAsPaid' | 'orderRefund' | 'orderSettingsUpdate' | 'orderUpdate' | 'orderUpdateShipping' | 'orderVoid' | 'pageAttributeAssign' | 'pageAttributeUnassign' | 'pageBulkDelete' | 'pageBulkPublish' | 'pageCreate' | 'pageDelete' | 'pageReorderAttributeValues' | 'pageTranslate' | 'pageTypeBulkDelete' | 'pageTypeCreate' | 'pageTypeDelete' | 'pageTypeReorderAttributes' | 'pageTypeUpdate' | 'pageUpdate' | 'passwordChange' | 'paymentCapture' | 'paymentCheckBalance' | 'paymentInitialize' | 'paymentRefund' | 'paymentVoid' | 'permissionGroupCreate' | 'permissionGroupDelete' | 'permissionGroupUpdate' | 'pluginUpdate' | 'productAttributeAssign' | 'productAttributeAssignmentUpdate' | 'productAttributeUnassign' | 'productBulkDelete' | 'productChannelListingUpdate' | 'productCreate' | 'productDelete' | 'productMediaBulkDelete' | 'productMediaCreate' | 'productMediaDelete' | 'productMediaReorder' | 'productMediaUpdate' | 'productReorderAttributeValues' | 'productTranslate' | 'productTypeBulkDelete' | 'productTypeCreate' | 'productTypeDelete' | 'productTypeReorderAttributes' | 'productTypeUpdate' | 'productUpdate' | 'productVariantBulkCreate' | 'productVariantBulkDelete' | 'productVariantChannelListingUpdate' | 'productVariantCreate' | 'productVariantDelete' | 'productVariantPreorderDeactivate' | 'productVariantReorder' | 'productVariantReorderAttributeValues' | 'productVariantSetDefault' | 'productVariantStocksCreate' | 'productVariantStocksDelete' | 'productVariantStocksUpdate' | 'productVariantTranslate' | 'productVariantUpdate' | 'requestEmailChange' | 'requestPasswordReset' | 'saleBulkDelete' | 'saleCataloguesAdd' | 'saleCataloguesRemove' | 'saleChannelListingUpdate' | 'saleCreate' | 'saleDelete' | 'saleTranslate' | 'saleUpdate' | 'setPassword' | 'shippingMethodChannelListingUpdate' | 'shippingPriceBulkDelete' | 'shippingPriceCreate' | 'shippingPriceDelete' | 'shippingPriceExcludeProducts' | 'shippingPriceRemoveProductFromExclude' | 'shippingPriceTranslate' | 'shippingPriceUpdate' | 'shippingZoneBulkDelete' | 'shippingZoneCreate' | 'shippingZoneDelete' | 'shippingZoneUpdate' | 'shopAddressUpdate' | 'shopDomainUpdate' | 'shopFetchTaxRates' | 'shopSettingsTranslate' | 'shopSettingsUpdate' | 'staffBulkDelete' | 'staffCreate' | 'staffDelete' | 'staffNotificationRecipientCreate' | 'staffNotificationRecipientDelete' | 'staffNotificationRecipientUpdate' | 'staffUpdate' | 'tokenCreate' | 'tokenRefresh' | 'tokenVerify' | 'tokensDeactivateAll' | 'unassignWarehouseShippingZone' | 'updateMetadata' | 'updatePrivateMetadata' | 'updateWarehouse' | 'userAvatarDelete' | 'userAvatarUpdate' | 'userBulkSetActive' | 'variantMediaAssign' | 'variantMediaUnassign' | 'voucherBulkDelete' | 'voucherCataloguesAdd' | 'voucherCataloguesRemove' | 'voucherChannelListingUpdate' | 'voucherCreate' | 'voucherDelete' | 'voucherTranslate' | 'voucherUpdate' | 'webhookCreate' | 'webhookDelete' | 'webhookUpdate' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	accountAddressCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	accountAddressDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	accountAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	accountDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	accountRegister?: FieldPolicy<any> | FieldReadFunction<any>,
	accountRequestDeletion?: FieldPolicy<any> | FieldReadFunction<any>,
	accountSetDefaultAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	accountUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	addressCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	addressDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	addressSetDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	addressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	appActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	appCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	appDeactivate?: FieldPolicy<any> | FieldReadFunction<any>,
	appDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	appDeleteFailedInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	appFetchManifest?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstall?: FieldPolicy<any> | FieldReadFunction<any>,
	appRetryInstall?: FieldPolicy<any> | FieldReadFunction<any>,
	appTokenCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	appTokenDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	appTokenVerify?: FieldPolicy<any> | FieldReadFunction<any>,
	appUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	assignNavigation?: FieldPolicy<any> | FieldReadFunction<any>,
	assignWarehouseShippingZone?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeReorderValues?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelDeactivate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	channelUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutAddPromoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutBillingAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutComplete?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCustomerAttach?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCustomerDetach?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutDeliveryMethodUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutEmailUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLanguageCodeUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLineDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLinesAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLinesDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLinesUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutPaymentCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutRemovePromoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutShippingAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutShippingMethodUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionAddProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionChannelListingUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionRemoveProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionReorderProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmEmailChange?: FieldPolicy<any> | FieldReadFunction<any>,
	createWarehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	customerBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	customerCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWarehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentUrlCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderComplete?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderLinesBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	eventDeliveryRetry?: FieldPolicy<any> | FieldReadFunction<any>,
	exportGiftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	exportProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	externalAuthenticationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	externalLogout?: FieldPolicy<any> | FieldReadFunction<any>,
	externalNotificationTrigger?: FieldPolicy<any> | FieldReadFunction<any>,
	externalObtainAccessTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	externalRefresh?: FieldPolicy<any> | FieldReadFunction<any>,
	externalVerify?: FieldPolicy<any> | FieldReadFunction<any>,
	fileUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardAddNote?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardBulkActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardBulkCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardBulkDeactivate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardDeactivate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardResend?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardSettingsUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceRequestDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceSendNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	menuCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemMove?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	orderAddNote?: FieldPolicy<any> | FieldReadFunction<any>,
	orderBulkCancel?: FieldPolicy<any> | FieldReadFunction<any>,
	orderCancel?: FieldPolicy<any> | FieldReadFunction<any>,
	orderCapture?: FieldPolicy<any> | FieldReadFunction<any>,
	orderConfirm?: FieldPolicy<any> | FieldReadFunction<any>,
	orderCreateFromCheckout?: FieldPolicy<any> | FieldReadFunction<any>,
	orderDiscountAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	orderDiscountDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	orderDiscountUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfill?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentApprove?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentCancel?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentRefundProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentReturnProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentUpdateTracking?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLineDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLineDiscountRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLineDiscountUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLineUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLinesCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	orderMarkAsPaid?: FieldPolicy<any> | FieldReadFunction<any>,
	orderRefund?: FieldPolicy<any> | FieldReadFunction<any>,
	orderSettingsUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	orderUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	orderUpdateShipping?: FieldPolicy<any> | FieldReadFunction<any>,
	orderVoid?: FieldPolicy<any> | FieldReadFunction<any>,
	pageAttributeAssign?: FieldPolicy<any> | FieldReadFunction<any>,
	pageAttributeUnassign?: FieldPolicy<any> | FieldReadFunction<any>,
	pageBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	pageBulkPublish?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	pageDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	pageReorderAttributeValues?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTypeBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTypeCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTypeDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTypeReorderAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTypeUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	pageUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordChange?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentCapture?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentCheckBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentInitialize?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentRefund?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentVoid?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	pluginUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productAttributeAssign?: FieldPolicy<any> | FieldReadFunction<any>,
	productAttributeAssignmentUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productAttributeUnassign?: FieldPolicy<any> | FieldReadFunction<any>,
	productBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productChannelListingUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productMediaBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productMediaCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productMediaDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productMediaReorder?: FieldPolicy<any> | FieldReadFunction<any>,
	productMediaUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productReorderAttributeValues?: FieldPolicy<any> | FieldReadFunction<any>,
	productTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeReorderAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantBulkCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantChannelListingUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantPreorderDeactivate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantReorder?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantReorderAttributeValues?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantSetDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantStocksCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantStocksDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantStocksUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	requestEmailChange?: FieldPolicy<any> | FieldReadFunction<any>,
	requestPasswordReset?: FieldPolicy<any> | FieldReadFunction<any>,
	saleBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	saleCataloguesAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	saleCataloguesRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	saleChannelListingUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	saleCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	saleDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	saleTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	saleUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	setPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethodChannelListingUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceExcludeProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceRemoveProductFromExclude?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZoneBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZoneCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZoneDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZoneUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopDomainUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopFetchTaxRates?: FieldPolicy<any> | FieldReadFunction<any>,
	shopSettingsTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopSettingsUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	staffBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	staffCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	staffDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipientCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipientDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipientUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	staffUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenRefresh?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenVerify?: FieldPolicy<any> | FieldReadFunction<any>,
	tokensDeactivateAll?: FieldPolicy<any> | FieldReadFunction<any>,
	unassignWarehouseShippingZone?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWarehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	userAvatarDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	userAvatarUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	userBulkSetActive?: FieldPolicy<any> | FieldReadFunction<any>,
	variantMediaAssign?: FieldPolicy<any> | FieldReadFunction<any>,
	variantMediaUnassign?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherCataloguesAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherCataloguesRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherChannelListingUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookUpdate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ObjectWithMetadataKeySpecifier = ('metadata' | 'metafield' | 'metafields' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | ObjectWithMetadataKeySpecifier)[];
export type ObjectWithMetadataFieldPolicy = {
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('actions' | 'availableCollectionPoints' | 'availableShippingMethods' | 'billingAddress' | 'canFinalize' | 'channel' | 'collectionPointName' | 'created' | 'customerNote' | 'deliveryMethod' | 'discount' | 'discountName' | 'discounts' | 'displayGrossPrices' | 'errors' | 'events' | 'fulfillments' | 'giftCards' | 'id' | 'invoices' | 'isPaid' | 'isShippingRequired' | 'languageCode' | 'languageCodeEnum' | 'lines' | 'metadata' | 'metafield' | 'metafields' | 'number' | 'origin' | 'original' | 'paymentStatus' | 'paymentStatusDisplay' | 'payments' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'redirectUrl' | 'shippingAddress' | 'shippingMethod' | 'shippingMethodName' | 'shippingMethods' | 'shippingPrice' | 'shippingTaxRate' | 'status' | 'statusDisplay' | 'subtotal' | 'token' | 'total' | 'totalAuthorized' | 'totalBalance' | 'totalCaptured' | 'trackingClientId' | 'translatedDiscountName' | 'undiscountedTotal' | 'updatedAt' | 'user' | 'userEmail' | 'voucher' | 'weight' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	actions?: FieldPolicy<any> | FieldReadFunction<any>,
	availableCollectionPoints?: FieldPolicy<any> | FieldReadFunction<any>,
	availableShippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	canFinalize?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionPointName?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	customerNote?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountName?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	displayGrossPrices?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillments?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invoices?: FieldPolicy<any> | FieldReadFunction<any>,
	isPaid?: FieldPolicy<any> | FieldReadFunction<any>,
	isShippingRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	languageCode?: FieldPolicy<any> | FieldReadFunction<any>,
	languageCodeEnum?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	original?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentStatusDisplay?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	redirectUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethodName?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingTaxRate?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	statusDisplay?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAuthorized?: FieldPolicy<any> | FieldReadFunction<any>,
	totalBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCaptured?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingClientId?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedDiscountName?: FieldPolicy<any> | FieldReadFunction<any>,
	undiscountedTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderAddNoteKeySpecifier = ('errors' | 'event' | 'order' | 'orderErrors' | OrderAddNoteKeySpecifier)[];
export type OrderAddNoteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderBulkCancelKeySpecifier = ('count' | 'errors' | 'orderErrors' | OrderBulkCancelKeySpecifier)[];
export type OrderBulkCancelFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCancelKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderCancelKeySpecifier)[];
export type OrderCancelFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCancelledKeySpecifier = ('order' | OrderCancelledKeySpecifier)[];
export type OrderCancelledFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCaptureKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderCaptureKeySpecifier)[];
export type OrderCaptureFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderConfirmKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderConfirmKeySpecifier)[];
export type OrderConfirmFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderConfirmedKeySpecifier = ('order' | OrderConfirmedKeySpecifier)[];
export type OrderConfirmedFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | OrderCountableConnectionKeySpecifier)[];
export type OrderCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCountableEdgeKeySpecifier = ('cursor' | 'node' | OrderCountableEdgeKeySpecifier)[];
export type OrderCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCreateFromCheckoutKeySpecifier = ('errors' | 'order' | OrderCreateFromCheckoutKeySpecifier)[];
export type OrderCreateFromCheckoutFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCreateFromCheckoutErrorKeySpecifier = ('code' | 'field' | 'lines' | 'message' | 'variants' | OrderCreateFromCheckoutErrorKeySpecifier)[];
export type OrderCreateFromCheckoutErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCreatedKeySpecifier = ('order' | OrderCreatedKeySpecifier)[];
export type OrderCreatedFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderDiscountKeySpecifier = ('amount' | 'id' | 'name' | 'reason' | 'translatedName' | 'type' | 'value' | 'valueType' | OrderDiscountKeySpecifier)[];
export type OrderDiscountFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedName?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	valueType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderDiscountAddKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderDiscountAddKeySpecifier)[];
export type OrderDiscountAddFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderDiscountDeleteKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderDiscountDeleteKeySpecifier)[];
export type OrderDiscountDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderDiscountUpdateKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderDiscountUpdateKeySpecifier)[];
export type OrderDiscountUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderErrorKeySpecifier = ('addressType' | 'code' | 'field' | 'message' | 'orderLines' | 'variants' | 'warehouse' | OrderErrorKeySpecifier)[];
export type OrderErrorFieldPolicy = {
	addressType?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLines?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEventKeySpecifier = ('amount' | 'app' | 'composedId' | 'date' | 'discount' | 'email' | 'emailType' | 'fulfilledItems' | 'id' | 'invoiceNumber' | 'lines' | 'message' | 'orderNumber' | 'oversoldItems' | 'paymentGateway' | 'paymentId' | 'quantity' | 'relatedOrder' | 'shippingCostsIncluded' | 'transactionReference' | 'type' | 'user' | 'warehouse' | OrderEventKeySpecifier)[];
export type OrderEventFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	composedId?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailType?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfilledItems?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	orderNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	oversoldItems?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentGateway?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentId?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingCostsIncluded?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionReference?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEventCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | OrderEventCountableConnectionKeySpecifier)[];
export type OrderEventCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEventCountableEdgeKeySpecifier = ('cursor' | 'node' | OrderEventCountableEdgeKeySpecifier)[];
export type OrderEventCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEventDiscountObjectKeySpecifier = ('amount' | 'oldAmount' | 'oldValue' | 'oldValueType' | 'reason' | 'value' | 'valueType' | OrderEventDiscountObjectKeySpecifier)[];
export type OrderEventDiscountObjectFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	oldAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	oldValue?: FieldPolicy<any> | FieldReadFunction<any>,
	oldValueType?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	valueType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEventOrderLineObjectKeySpecifier = ('discount' | 'itemName' | 'orderLine' | 'quantity' | OrderEventOrderLineObjectKeySpecifier)[];
export type OrderEventOrderLineObjectFieldPolicy = {
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	itemName?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderFulfillKeySpecifier = ('errors' | 'fulfillments' | 'order' | 'orderErrors' | OrderFulfillKeySpecifier)[];
export type OrderFulfillFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillments?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderFulfilledKeySpecifier = ('order' | OrderFulfilledKeySpecifier)[];
export type OrderFulfilledFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderFullyPaidKeySpecifier = ('order' | OrderFullyPaidKeySpecifier)[];
export type OrderFullyPaidFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineKeySpecifier = ('allocations' | 'digitalContentUrl' | 'id' | 'isShippingRequired' | 'productName' | 'productSku' | 'productVariantId' | 'quantity' | 'quantityFulfilled' | 'quantityToFulfill' | 'taxRate' | 'thumbnail' | 'totalPrice' | 'translatedProductName' | 'translatedVariantName' | 'undiscountedUnitPrice' | 'unitDiscount' | 'unitDiscountReason' | 'unitDiscountType' | 'unitDiscountValue' | 'unitPrice' | 'variant' | 'variantName' | OrderLineKeySpecifier)[];
export type OrderLineFieldPolicy = {
	allocations?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isShippingRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	productName?: FieldPolicy<any> | FieldReadFunction<any>,
	productSku?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantId?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityFulfilled?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityToFulfill?: FieldPolicy<any> | FieldReadFunction<any>,
	taxRate?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedProductName?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedVariantName?: FieldPolicy<any> | FieldReadFunction<any>,
	undiscountedUnitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	unitDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	unitDiscountReason?: FieldPolicy<any> | FieldReadFunction<any>,
	unitDiscountType?: FieldPolicy<any> | FieldReadFunction<any>,
	unitDiscountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	variantName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineDeleteKeySpecifier = ('errors' | 'order' | 'orderErrors' | 'orderLine' | OrderLineDeleteKeySpecifier)[];
export type OrderLineDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineDiscountRemoveKeySpecifier = ('errors' | 'order' | 'orderErrors' | 'orderLine' | OrderLineDiscountRemoveKeySpecifier)[];
export type OrderLineDiscountRemoveFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineDiscountUpdateKeySpecifier = ('errors' | 'order' | 'orderErrors' | 'orderLine' | OrderLineDiscountUpdateKeySpecifier)[];
export type OrderLineDiscountUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineUpdateKeySpecifier = ('errors' | 'order' | 'orderErrors' | 'orderLine' | OrderLineUpdateKeySpecifier)[];
export type OrderLineUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLinesCreateKeySpecifier = ('errors' | 'order' | 'orderErrors' | 'orderLines' | OrderLinesCreateKeySpecifier)[];
export type OrderLinesCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLines?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderMarkAsPaidKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderMarkAsPaidKeySpecifier)[];
export type OrderMarkAsPaidFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderRefundKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderRefundKeySpecifier)[];
export type OrderRefundFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderSettingsKeySpecifier = ('automaticallyConfirmAllNewOrders' | 'automaticallyFulfillNonShippableGiftCard' | OrderSettingsKeySpecifier)[];
export type OrderSettingsFieldPolicy = {
	automaticallyConfirmAllNewOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	automaticallyFulfillNonShippableGiftCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderSettingsErrorKeySpecifier = ('code' | 'field' | 'message' | OrderSettingsErrorKeySpecifier)[];
export type OrderSettingsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderSettingsUpdateKeySpecifier = ('errors' | 'orderSettings' | 'orderSettingsErrors' | OrderSettingsUpdateKeySpecifier)[];
export type OrderSettingsUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	orderSettingsErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderUpdateKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderUpdateKeySpecifier)[];
export type OrderUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderUpdateShippingKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderUpdateShippingKeySpecifier)[];
export type OrderUpdateShippingFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderUpdatedKeySpecifier = ('order' | OrderUpdatedKeySpecifier)[];
export type OrderUpdatedFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderVoidKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderVoidKeySpecifier)[];
export type OrderVoidFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('attributes' | 'content' | 'contentJson' | 'created' | 'id' | 'isPublished' | 'metadata' | 'metafield' | 'metafields' | 'pageType' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'publicationDate' | 'publishedAt' | 'seoDescription' | 'seoTitle' | 'slug' | 'title' | 'translation' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentJson?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageAttributeAssignKeySpecifier = ('errors' | 'pageErrors' | 'pageType' | PageAttributeAssignKeySpecifier)[];
export type PageAttributeAssignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageAttributeUnassignKeySpecifier = ('errors' | 'pageErrors' | 'pageType' | PageAttributeUnassignKeySpecifier)[];
export type PageAttributeUnassignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageBulkDeleteKeySpecifier = ('count' | 'errors' | 'pageErrors' | PageBulkDeleteKeySpecifier)[];
export type PageBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageBulkPublishKeySpecifier = ('count' | 'errors' | 'pageErrors' | PageBulkPublishKeySpecifier)[];
export type PageBulkPublishFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | PageCountableConnectionKeySpecifier)[];
export type PageCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageCountableEdgeKeySpecifier = ('cursor' | 'node' | PageCountableEdgeKeySpecifier)[];
export type PageCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageCreateKeySpecifier = ('errors' | 'page' | 'pageErrors' | PageCreateKeySpecifier)[];
export type PageCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageCreatedKeySpecifier = ('page' | PageCreatedKeySpecifier)[];
export type PageCreatedFieldPolicy = {
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageDeleteKeySpecifier = ('errors' | 'page' | 'pageErrors' | PageDeleteKeySpecifier)[];
export type PageDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageDeletedKeySpecifier = ('page' | PageDeletedKeySpecifier)[];
export type PageDeletedFieldPolicy = {
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageErrorKeySpecifier = ('attributes' | 'code' | 'field' | 'message' | 'values' | PageErrorKeySpecifier)[];
export type PageErrorFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageReorderAttributeValuesKeySpecifier = ('errors' | 'page' | 'pageErrors' | PageReorderAttributeValuesKeySpecifier)[];
export type PageReorderAttributeValuesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTranslatableContentKeySpecifier = ('attributeValues' | 'content' | 'contentJson' | 'id' | 'page' | 'seoDescription' | 'seoTitle' | 'title' | 'translation' | PageTranslatableContentKeySpecifier)[];
export type PageTranslatableContentFieldPolicy = {
	attributeValues?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTranslateKeySpecifier = ('errors' | 'page' | 'translationErrors' | PageTranslateKeySpecifier)[];
export type PageTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTranslationKeySpecifier = ('content' | 'contentJson' | 'id' | 'language' | 'seoDescription' | 'seoTitle' | 'title' | PageTranslationKeySpecifier)[];
export type PageTranslationFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTypeKeySpecifier = ('attributes' | 'availableAttributes' | 'hasPages' | 'id' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'slug' | PageTypeKeySpecifier)[];
export type PageTypeFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	availableAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTypeBulkDeleteKeySpecifier = ('count' | 'errors' | 'pageErrors' | PageTypeBulkDeleteKeySpecifier)[];
export type PageTypeBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTypeCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | PageTypeCountableConnectionKeySpecifier)[];
export type PageTypeCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTypeCountableEdgeKeySpecifier = ('cursor' | 'node' | PageTypeCountableEdgeKeySpecifier)[];
export type PageTypeCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTypeCreateKeySpecifier = ('errors' | 'pageErrors' | 'pageType' | PageTypeCreateKeySpecifier)[];
export type PageTypeCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTypeDeleteKeySpecifier = ('errors' | 'pageErrors' | 'pageType' | PageTypeDeleteKeySpecifier)[];
export type PageTypeDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTypeReorderAttributesKeySpecifier = ('errors' | 'pageErrors' | 'pageType' | PageTypeReorderAttributesKeySpecifier)[];
export type PageTypeReorderAttributesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTypeUpdateKeySpecifier = ('errors' | 'pageErrors' | 'pageType' | PageTypeUpdateKeySpecifier)[];
export type PageTypeUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageUpdateKeySpecifier = ('errors' | 'page' | 'pageErrors' | PageUpdateKeySpecifier)[];
export type PageUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageUpdatedKeySpecifier = ('page' | PageUpdatedKeySpecifier)[];
export type PageUpdatedFieldPolicy = {
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordChangeKeySpecifier = ('accountErrors' | 'errors' | 'user' | PasswordChangeKeySpecifier)[];
export type PasswordChangeFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentKeySpecifier = ('actions' | 'availableCaptureAmount' | 'availableRefundAmount' | 'capturedAmount' | 'chargeStatus' | 'checkout' | 'created' | 'creditCard' | 'customerIpAddress' | 'gateway' | 'id' | 'isActive' | 'metadata' | 'metafield' | 'metafields' | 'modified' | 'order' | 'paymentMethodType' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'token' | 'total' | 'transactions' | PaymentKeySpecifier)[];
export type PaymentFieldPolicy = {
	actions?: FieldPolicy<any> | FieldReadFunction<any>,
	availableCaptureAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	availableRefundAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	capturedAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	chargeStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	creditCard?: FieldPolicy<any> | FieldReadFunction<any>,
	customerIpAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	gateway?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethodType?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentCaptureKeySpecifier = ('errors' | 'payment' | 'paymentErrors' | PaymentCaptureKeySpecifier)[];
export type PaymentCaptureFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentCheckBalanceKeySpecifier = ('data' | 'errors' | 'paymentErrors' | PaymentCheckBalanceKeySpecifier)[];
export type PaymentCheckBalanceFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | PaymentCountableConnectionKeySpecifier)[];
export type PaymentCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentCountableEdgeKeySpecifier = ('cursor' | 'node' | PaymentCountableEdgeKeySpecifier)[];
export type PaymentCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentErrorKeySpecifier = ('code' | 'field' | 'message' | 'variants' | PaymentErrorKeySpecifier)[];
export type PaymentErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentGatewayKeySpecifier = ('config' | 'currencies' | 'id' | 'name' | PaymentGatewayKeySpecifier)[];
export type PaymentGatewayFieldPolicy = {
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentInitializeKeySpecifier = ('errors' | 'initializedPayment' | 'paymentErrors' | PaymentInitializeKeySpecifier)[];
export type PaymentInitializeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	initializedPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentInitializedKeySpecifier = ('data' | 'gateway' | 'name' | PaymentInitializedKeySpecifier)[];
export type PaymentInitializedFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	gateway?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentRefundKeySpecifier = ('errors' | 'payment' | 'paymentErrors' | PaymentRefundKeySpecifier)[];
export type PaymentRefundFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentSourceKeySpecifier = ('creditCardInfo' | 'gateway' | 'metadata' | 'paymentMethodId' | PaymentSourceKeySpecifier)[];
export type PaymentSourceFieldPolicy = {
	creditCardInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	gateway?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethodId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentVoidKeySpecifier = ('errors' | 'payment' | 'paymentErrors' | PaymentVoidKeySpecifier)[];
export type PaymentVoidFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionKeySpecifier = ('code' | 'name' | PermissionKeySpecifier)[];
export type PermissionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupCreateKeySpecifier = ('errors' | 'group' | 'permissionGroupErrors' | PermissionGroupCreateKeySpecifier)[];
export type PermissionGroupCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupDeleteKeySpecifier = ('errors' | 'group' | 'permissionGroupErrors' | PermissionGroupDeleteKeySpecifier)[];
export type PermissionGroupDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupErrorKeySpecifier = ('code' | 'field' | 'message' | 'permissions' | 'users' | PermissionGroupErrorKeySpecifier)[];
export type PermissionGroupErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupUpdateKeySpecifier = ('errors' | 'group' | 'permissionGroupErrors' | PermissionGroupUpdateKeySpecifier)[];
export type PermissionGroupUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginKeySpecifier = ('channelConfigurations' | 'description' | 'globalConfiguration' | 'id' | 'name' | PluginKeySpecifier)[];
export type PluginFieldPolicy = {
	channelConfigurations?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	globalConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginConfigurationKeySpecifier = ('active' | 'channel' | 'configuration' | PluginConfigurationKeySpecifier)[];
export type PluginConfigurationFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	configuration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | PluginCountableConnectionKeySpecifier)[];
export type PluginCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginCountableEdgeKeySpecifier = ('cursor' | 'node' | PluginCountableEdgeKeySpecifier)[];
export type PluginCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginErrorKeySpecifier = ('code' | 'field' | 'message' | PluginErrorKeySpecifier)[];
export type PluginErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginUpdateKeySpecifier = ('errors' | 'plugin' | 'pluginsErrors' | PluginUpdateKeySpecifier)[];
export type PluginUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	plugin?: FieldPolicy<any> | FieldReadFunction<any>,
	pluginsErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreorderDataKeySpecifier = ('endDate' | 'globalSoldUnits' | 'globalThreshold' | PreorderDataKeySpecifier)[];
export type PreorderDataFieldPolicy = {
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	globalSoldUnits?: FieldPolicy<any> | FieldReadFunction<any>,
	globalThreshold?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreorderThresholdKeySpecifier = ('quantity' | 'soldUnits' | PreorderThresholdKeySpecifier)[];
export type PreorderThresholdFieldPolicy = {
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	soldUnits?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('attributes' | 'availableForPurchase' | 'availableForPurchaseAt' | 'category' | 'channel' | 'channelListings' | 'chargeTaxes' | 'collections' | 'created' | 'defaultVariant' | 'description' | 'descriptionJson' | 'id' | 'imageById' | 'images' | 'isAvailable' | 'isAvailableForPurchase' | 'media' | 'mediaById' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'pricing' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'productType' | 'rating' | 'seoDescription' | 'seoTitle' | 'slug' | 'taxType' | 'thumbnail' | 'translation' | 'updatedAt' | 'variants' | 'weight' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	availableForPurchase?: FieldPolicy<any> | FieldReadFunction<any>,
	availableForPurchaseAt?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelListings?: FieldPolicy<any> | FieldReadFunction<any>,
	chargeTaxes?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageById?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	isAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	isAvailableForPurchase?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaById?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pricing?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	taxType?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductAttributeAssignKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductAttributeAssignKeySpecifier)[];
export type ProductAttributeAssignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductAttributeAssignmentUpdateKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductAttributeAssignmentUpdateKeySpecifier)[];
export type ProductAttributeAssignmentUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductAttributeUnassignKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductAttributeUnassignKeySpecifier)[];
export type ProductAttributeUnassignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductBulkDeleteKeySpecifier = ('count' | 'errors' | 'productErrors' | ProductBulkDeleteKeySpecifier)[];
export type ProductBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductChannelListingKeySpecifier = ('availableForPurchase' | 'availableForPurchaseAt' | 'channel' | 'discountedPrice' | 'id' | 'isAvailableForPurchase' | 'isPublished' | 'margin' | 'pricing' | 'publicationDate' | 'publishedAt' | 'purchaseCost' | 'visibleInListings' | ProductChannelListingKeySpecifier)[];
export type ProductChannelListingFieldPolicy = {
	availableForPurchase?: FieldPolicy<any> | FieldReadFunction<any>,
	availableForPurchaseAt?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	discountedPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAvailableForPurchase?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	margin?: FieldPolicy<any> | FieldReadFunction<any>,
	pricing?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	purchaseCost?: FieldPolicy<any> | FieldReadFunction<any>,
	visibleInListings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductChannelListingErrorKeySpecifier = ('attributes' | 'channels' | 'code' | 'field' | 'message' | 'values' | 'variants' | ProductChannelListingErrorKeySpecifier)[];
export type ProductChannelListingErrorFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductChannelListingUpdateKeySpecifier = ('errors' | 'product' | 'productChannelListingErrors' | ProductChannelListingUpdateKeySpecifier)[];
export type ProductChannelListingUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productChannelListingErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ProductCountableConnectionKeySpecifier)[];
export type ProductCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCountableEdgeKeySpecifier = ('cursor' | 'node' | ProductCountableEdgeKeySpecifier)[];
export type ProductCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCreateKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductCreateKeySpecifier)[];
export type ProductCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCreatedKeySpecifier = ('category' | 'product' | ProductCreatedKeySpecifier)[];
export type ProductCreatedFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDeleteKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductDeleteKeySpecifier)[];
export type ProductDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDeletedKeySpecifier = ('category' | 'product' | ProductDeletedKeySpecifier)[];
export type ProductDeletedFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductErrorKeySpecifier = ('attributes' | 'code' | 'field' | 'message' | 'values' | ProductErrorKeySpecifier)[];
export type ProductErrorFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageKeySpecifier = ('alt' | 'id' | 'sortOrder' | 'url' | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sortOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaKeySpecifier = ('alt' | 'id' | 'oembedData' | 'sortOrder' | 'type' | 'url' | ProductMediaKeySpecifier)[];
export type ProductMediaFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	oembedData?: FieldPolicy<any> | FieldReadFunction<any>,
	sortOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaBulkDeleteKeySpecifier = ('count' | 'errors' | 'productErrors' | ProductMediaBulkDeleteKeySpecifier)[];
export type ProductMediaBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaCreateKeySpecifier = ('errors' | 'media' | 'product' | 'productErrors' | ProductMediaCreateKeySpecifier)[];
export type ProductMediaCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaDeleteKeySpecifier = ('errors' | 'media' | 'product' | 'productErrors' | ProductMediaDeleteKeySpecifier)[];
export type ProductMediaDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaReorderKeySpecifier = ('errors' | 'media' | 'product' | 'productErrors' | ProductMediaReorderKeySpecifier)[];
export type ProductMediaReorderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaUpdateKeySpecifier = ('errors' | 'media' | 'product' | 'productErrors' | ProductMediaUpdateKeySpecifier)[];
export type ProductMediaUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPricingInfoKeySpecifier = ('discount' | 'discountLocalCurrency' | 'onSale' | 'priceRange' | 'priceRangeLocalCurrency' | 'priceRangeUndiscounted' | ProductPricingInfoKeySpecifier)[];
export type ProductPricingInfoFieldPolicy = {
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountLocalCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	onSale?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRange?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRangeLocalCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRangeUndiscounted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReorderAttributeValuesKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductReorderAttributeValuesKeySpecifier)[];
export type ProductReorderAttributeValuesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTranslatableContentKeySpecifier = ('attributeValues' | 'description' | 'descriptionJson' | 'id' | 'name' | 'product' | 'seoDescription' | 'seoTitle' | 'translation' | ProductTranslatableContentKeySpecifier)[];
export type ProductTranslatableContentFieldPolicy = {
	attributeValues?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTranslateKeySpecifier = ('errors' | 'product' | 'translationErrors' | ProductTranslateKeySpecifier)[];
export type ProductTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTranslationKeySpecifier = ('description' | 'descriptionJson' | 'id' | 'language' | 'name' | 'seoDescription' | 'seoTitle' | ProductTranslationKeySpecifier)[];
export type ProductTranslationFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeKeySpecifier = ('assignedVariantAttributes' | 'availableAttributes' | 'hasVariants' | 'id' | 'isDigital' | 'isShippingRequired' | 'kind' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'productAttributes' | 'products' | 'slug' | 'taxType' | 'variantAttributes' | 'weight' | ProductTypeKeySpecifier)[];
export type ProductTypeFieldPolicy = {
	assignedVariantAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	availableAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	hasVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDigital?: FieldPolicy<any> | FieldReadFunction<any>,
	isShippingRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	productAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	taxType?: FieldPolicy<any> | FieldReadFunction<any>,
	variantAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeBulkDeleteKeySpecifier = ('count' | 'errors' | 'productErrors' | ProductTypeBulkDeleteKeySpecifier)[];
export type ProductTypeBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ProductTypeCountableConnectionKeySpecifier)[];
export type ProductTypeCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeCountableEdgeKeySpecifier = ('cursor' | 'node' | ProductTypeCountableEdgeKeySpecifier)[];
export type ProductTypeCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeCreateKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeCreateKeySpecifier)[];
export type ProductTypeCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeDeleteKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeDeleteKeySpecifier)[];
export type ProductTypeDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeReorderAttributesKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeReorderAttributesKeySpecifier)[];
export type ProductTypeReorderAttributesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeUpdateKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeUpdateKeySpecifier)[];
export type ProductTypeUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductUpdateKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductUpdateKeySpecifier)[];
export type ProductUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductUpdatedKeySpecifier = ('category' | 'product' | ProductUpdatedKeySpecifier)[];
export type ProductUpdatedFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantKeySpecifier = ('attributes' | 'channel' | 'channelListings' | 'created' | 'digitalContent' | 'id' | 'images' | 'margin' | 'media' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'preorder' | 'pricing' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'product' | 'quantityAvailable' | 'quantityLimitPerCustomer' | 'quantityOrdered' | 'revenue' | 'sku' | 'stocks' | 'trackInventory' | 'translation' | 'updatedAt' | 'weight' | ProductVariantKeySpecifier)[];
export type ProductVariantFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelListings?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContent?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	margin?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	preorder?: FieldPolicy<any> | FieldReadFunction<any>,
	pricing?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityLimitPerCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityOrdered?: FieldPolicy<any> | FieldReadFunction<any>,
	revenue?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	stocks?: FieldPolicy<any> | FieldReadFunction<any>,
	trackInventory?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantBackInStockKeySpecifier = ('productVariant' | 'warehouse' | ProductVariantBackInStockKeySpecifier)[];
export type ProductVariantBackInStockFieldPolicy = {
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantBulkCreateKeySpecifier = ('bulkProductErrors' | 'count' | 'errors' | 'productVariants' | ProductVariantBulkCreateKeySpecifier)[];
export type ProductVariantBulkCreateFieldPolicy = {
	bulkProductErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantBulkDeleteKeySpecifier = ('count' | 'errors' | 'productErrors' | ProductVariantBulkDeleteKeySpecifier)[];
export type ProductVariantBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantChannelListingKeySpecifier = ('channel' | 'costPrice' | 'id' | 'margin' | 'preorderThreshold' | 'price' | ProductVariantChannelListingKeySpecifier)[];
export type ProductVariantChannelListingFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	costPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	margin?: FieldPolicy<any> | FieldReadFunction<any>,
	preorderThreshold?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantChannelListingUpdateKeySpecifier = ('errors' | 'productChannelListingErrors' | 'variant' | ProductVariantChannelListingUpdateKeySpecifier)[];
export type ProductVariantChannelListingUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productChannelListingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ProductVariantCountableConnectionKeySpecifier)[];
export type ProductVariantCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantCountableEdgeKeySpecifier = ('cursor' | 'node' | ProductVariantCountableEdgeKeySpecifier)[];
export type ProductVariantCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantCreateKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantCreateKeySpecifier)[];
export type ProductVariantCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantCreatedKeySpecifier = ('productVariant' | ProductVariantCreatedKeySpecifier)[];
export type ProductVariantCreatedFieldPolicy = {
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantDeleteKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantDeleteKeySpecifier)[];
export type ProductVariantDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantDeletedKeySpecifier = ('productVariant' | ProductVariantDeletedKeySpecifier)[];
export type ProductVariantDeletedFieldPolicy = {
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantOutOfStockKeySpecifier = ('productVariant' | 'warehouse' | ProductVariantOutOfStockKeySpecifier)[];
export type ProductVariantOutOfStockFieldPolicy = {
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantPreorderDeactivateKeySpecifier = ('errors' | 'productVariant' | ProductVariantPreorderDeactivateKeySpecifier)[];
export type ProductVariantPreorderDeactivateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantReorderKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductVariantReorderKeySpecifier)[];
export type ProductVariantReorderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantReorderAttributeValuesKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantReorderAttributeValuesKeySpecifier)[];
export type ProductVariantReorderAttributeValuesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantSetDefaultKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductVariantSetDefaultKeySpecifier)[];
export type ProductVariantSetDefaultFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantStocksCreateKeySpecifier = ('bulkStockErrors' | 'errors' | 'productVariant' | ProductVariantStocksCreateKeySpecifier)[];
export type ProductVariantStocksCreateFieldPolicy = {
	bulkStockErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantStocksDeleteKeySpecifier = ('errors' | 'productVariant' | 'stockErrors' | ProductVariantStocksDeleteKeySpecifier)[];
export type ProductVariantStocksDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	stockErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantStocksUpdateKeySpecifier = ('bulkStockErrors' | 'errors' | 'productVariant' | ProductVariantStocksUpdateKeySpecifier)[];
export type ProductVariantStocksUpdateFieldPolicy = {
	bulkStockErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantTranslatableContentKeySpecifier = ('attributeValues' | 'id' | 'name' | 'productVariant' | 'translation' | ProductVariantTranslatableContentKeySpecifier)[];
export type ProductVariantTranslatableContentFieldPolicy = {
	attributeValues?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantTranslateKeySpecifier = ('errors' | 'productVariant' | 'translationErrors' | ProductVariantTranslateKeySpecifier)[];
export type ProductVariantTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantTranslationKeySpecifier = ('id' | 'language' | 'name' | ProductVariantTranslationKeySpecifier)[];
export type ProductVariantTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantUpdateKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantUpdateKeySpecifier)[];
export type ProductVariantUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantUpdatedKeySpecifier = ('productVariant' | ProductVariantUpdatedKeySpecifier)[];
export type ProductVariantUpdatedFieldPolicy = {
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_entities' | '_service' | 'address' | 'addressValidationRules' | 'app' | 'appExtension' | 'appExtensions' | 'apps' | 'appsInstallations' | 'attribute' | 'attributes' | 'categories' | 'category' | 'channel' | 'channels' | 'checkout' | 'checkoutLines' | 'checkouts' | 'collection' | 'collections' | 'customers' | 'digitalContent' | 'digitalContents' | 'draftOrders' | 'exportFile' | 'exportFiles' | 'giftCard' | 'giftCardCurrencies' | 'giftCardSettings' | 'giftCardTags' | 'giftCards' | 'homepageEvents' | 'me' | 'menu' | 'menuItem' | 'menuItems' | 'menus' | 'order' | 'orderByToken' | 'orderSettings' | 'orders' | 'ordersTotal' | 'page' | 'pageType' | 'pageTypes' | 'pages' | 'payment' | 'payments' | 'permissionGroup' | 'permissionGroups' | 'plugin' | 'plugins' | 'product' | 'productType' | 'productTypes' | 'productVariant' | 'productVariants' | 'products' | 'reportProductSales' | 'sale' | 'sales' | 'shippingZone' | 'shippingZones' | 'shop' | 'staffUsers' | 'stock' | 'stocks' | 'taxTypes' | 'translation' | 'translations' | 'user' | 'voucher' | 'vouchers' | 'warehouse' | 'warehouses' | 'webhook' | 'webhookEvents' | 'webhookSamplePayload' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_entities?: FieldPolicy<any> | FieldReadFunction<any>,
	_service?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	addressValidationRules?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	appExtension?: FieldPolicy<any> | FieldReadFunction<any>,
	appExtensions?: FieldPolicy<any> | FieldReadFunction<any>,
	apps?: FieldPolicy<any> | FieldReadFunction<any>,
	appsInstallations?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLines?: FieldPolicy<any> | FieldReadFunction<any>,
	checkouts?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	customers?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContent?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContents?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFile?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardCurrencies?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardTags?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItems?: FieldPolicy<any> | FieldReadFunction<any>,
	menus?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderByToken?: FieldPolicy<any> | FieldReadFunction<any>,
	orderSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	ordersTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	plugin?: FieldPolicy<any> | FieldReadFunction<any>,
	plugins?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	reportProductSales?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	sales?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZones?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	staffUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	stock?: FieldPolicy<any> | FieldReadFunction<any>,
	stocks?: FieldPolicy<any> | FieldReadFunction<any>,
	taxTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	translations?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>,
	vouchers?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookSamplePayload?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReducedRateKeySpecifier = ('rate' | 'rateType' | ReducedRateKeySpecifier)[];
export type ReducedRateFieldPolicy = {
	rate?: FieldPolicy<any> | FieldReadFunction<any>,
	rateType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefreshTokenKeySpecifier = ('accountErrors' | 'errors' | 'token' | 'user' | RefreshTokenKeySpecifier)[];
export type RefreshTokenFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestEmailChangeKeySpecifier = ('accountErrors' | 'errors' | 'user' | RequestEmailChangeKeySpecifier)[];
export type RequestEmailChangeFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestPasswordResetKeySpecifier = ('accountErrors' | 'errors' | RequestPasswordResetKeySpecifier)[];
export type RequestPasswordResetFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleKeySpecifier = ('categories' | 'channelListings' | 'collections' | 'created' | 'currency' | 'discountValue' | 'endDate' | 'id' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'products' | 'startDate' | 'translation' | 'type' | 'updatedAt' | 'variants' | SaleKeySpecifier)[];
export type SaleFieldPolicy = {
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	channelListings?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleAddCataloguesKeySpecifier = ('discountErrors' | 'errors' | 'sale' | SaleAddCataloguesKeySpecifier)[];
export type SaleAddCataloguesFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleBulkDeleteKeySpecifier = ('count' | 'discountErrors' | 'errors' | SaleBulkDeleteKeySpecifier)[];
export type SaleBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleChannelListingKeySpecifier = ('channel' | 'currency' | 'discountValue' | 'id' | SaleChannelListingKeySpecifier)[];
export type SaleChannelListingFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleChannelListingUpdateKeySpecifier = ('discountErrors' | 'errors' | 'sale' | SaleChannelListingUpdateKeySpecifier)[];
export type SaleChannelListingUpdateFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SaleCountableConnectionKeySpecifier)[];
export type SaleCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleCountableEdgeKeySpecifier = ('cursor' | 'node' | SaleCountableEdgeKeySpecifier)[];
export type SaleCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleCreateKeySpecifier = ('discountErrors' | 'errors' | 'sale' | SaleCreateKeySpecifier)[];
export type SaleCreateFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleCreatedKeySpecifier = ('sale' | SaleCreatedKeySpecifier)[];
export type SaleCreatedFieldPolicy = {
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleDeleteKeySpecifier = ('discountErrors' | 'errors' | 'sale' | SaleDeleteKeySpecifier)[];
export type SaleDeleteFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleDeletedKeySpecifier = ('sale' | SaleDeletedKeySpecifier)[];
export type SaleDeletedFieldPolicy = {
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleRemoveCataloguesKeySpecifier = ('discountErrors' | 'errors' | 'sale' | SaleRemoveCataloguesKeySpecifier)[];
export type SaleRemoveCataloguesFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleTranslatableContentKeySpecifier = ('id' | 'name' | 'sale' | 'translation' | SaleTranslatableContentKeySpecifier)[];
export type SaleTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleTranslateKeySpecifier = ('errors' | 'sale' | 'translationErrors' | SaleTranslateKeySpecifier)[];
export type SaleTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleTranslationKeySpecifier = ('id' | 'language' | 'name' | SaleTranslationKeySpecifier)[];
export type SaleTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleUpdateKeySpecifier = ('discountErrors' | 'errors' | 'sale' | SaleUpdateKeySpecifier)[];
export type SaleUpdateFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleUpdatedKeySpecifier = ('sale' | SaleUpdatedKeySpecifier)[];
export type SaleUpdatedFieldPolicy = {
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedAttributeKeySpecifier = ('attribute' | 'values' | SelectedAttributeKeySpecifier)[];
export type SelectedAttributeFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetPasswordKeySpecifier = ('accountErrors' | 'csrfToken' | 'errors' | 'refreshToken' | 'token' | 'user' | SetPasswordKeySpecifier)[];
export type SetPasswordFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingErrorKeySpecifier = ('channels' | 'code' | 'field' | 'message' | 'warehouses' | ShippingErrorKeySpecifier)[];
export type ShippingErrorFieldPolicy = {
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodKeySpecifier = ('active' | 'description' | 'id' | 'maximumDeliveryDays' | 'maximumOrderPrice' | 'maximumOrderWeight' | 'message' | 'metadata' | 'metafield' | 'metafields' | 'minimumDeliveryDays' | 'minimumOrderPrice' | 'minimumOrderWeight' | 'name' | 'price' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'translation' | 'type' | ShippingMethodKeySpecifier)[];
export type ShippingMethodFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumDeliveryDays?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumOrderPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumOrderWeight?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumDeliveryDays?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumOrderPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumOrderWeight?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodChannelListingKeySpecifier = ('channel' | 'id' | 'maximumOrderPrice' | 'minimumOrderPrice' | 'price' | ShippingMethodChannelListingKeySpecifier)[];
export type ShippingMethodChannelListingFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumOrderPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumOrderPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodChannelListingUpdateKeySpecifier = ('errors' | 'shippingErrors' | 'shippingMethod' | ShippingMethodChannelListingUpdateKeySpecifier)[];
export type ShippingMethodChannelListingUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodPostalCodeRuleKeySpecifier = ('end' | 'id' | 'inclusionType' | 'start' | ShippingMethodPostalCodeRuleKeySpecifier)[];
export type ShippingMethodPostalCodeRuleFieldPolicy = {
	end?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inclusionType?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodTranslatableContentKeySpecifier = ('description' | 'id' | 'name' | 'shippingMethod' | 'translation' | ShippingMethodTranslatableContentKeySpecifier)[];
export type ShippingMethodTranslatableContentFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodTranslationKeySpecifier = ('description' | 'id' | 'language' | 'name' | ShippingMethodTranslationKeySpecifier)[];
export type ShippingMethodTranslationFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodTypeKeySpecifier = ('channelListings' | 'description' | 'excludedProducts' | 'id' | 'maximumDeliveryDays' | 'maximumOrderPrice' | 'maximumOrderWeight' | 'metadata' | 'metafield' | 'metafields' | 'minimumDeliveryDays' | 'minimumOrderPrice' | 'minimumOrderWeight' | 'name' | 'postalCodeRules' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'translation' | 'type' | ShippingMethodTypeKeySpecifier)[];
export type ShippingMethodTypeFieldPolicy = {
	channelListings?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	excludedProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumDeliveryDays?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumOrderPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumOrderWeight?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumDeliveryDays?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumOrderPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumOrderWeight?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCodeRules?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceBulkDeleteKeySpecifier = ('count' | 'errors' | 'shippingErrors' | ShippingPriceBulkDeleteKeySpecifier)[];
export type ShippingPriceBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceCreateKeySpecifier = ('errors' | 'shippingErrors' | 'shippingMethod' | 'shippingZone' | ShippingPriceCreateKeySpecifier)[];
export type ShippingPriceCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceCreatedKeySpecifier = ('shippingMethod' | 'shippingZone' | ShippingPriceCreatedKeySpecifier)[];
export type ShippingPriceCreatedFieldPolicy = {
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceDeleteKeySpecifier = ('errors' | 'shippingErrors' | 'shippingMethod' | 'shippingZone' | ShippingPriceDeleteKeySpecifier)[];
export type ShippingPriceDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceDeletedKeySpecifier = ('shippingMethod' | 'shippingZone' | ShippingPriceDeletedKeySpecifier)[];
export type ShippingPriceDeletedFieldPolicy = {
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceExcludeProductsKeySpecifier = ('errors' | 'shippingErrors' | 'shippingMethod' | ShippingPriceExcludeProductsKeySpecifier)[];
export type ShippingPriceExcludeProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceRemoveProductFromExcludeKeySpecifier = ('errors' | 'shippingErrors' | 'shippingMethod' | ShippingPriceRemoveProductFromExcludeKeySpecifier)[];
export type ShippingPriceRemoveProductFromExcludeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceTranslateKeySpecifier = ('errors' | 'shippingMethod' | 'translationErrors' | ShippingPriceTranslateKeySpecifier)[];
export type ShippingPriceTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceUpdateKeySpecifier = ('errors' | 'shippingErrors' | 'shippingMethod' | 'shippingZone' | ShippingPriceUpdateKeySpecifier)[];
export type ShippingPriceUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceUpdatedKeySpecifier = ('shippingMethod' | 'shippingZone' | ShippingPriceUpdatedKeySpecifier)[];
export type ShippingPriceUpdatedFieldPolicy = {
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneKeySpecifier = ('channels' | 'countries' | 'default' | 'description' | 'id' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'priceRange' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'shippingMethods' | 'warehouses' | ShippingZoneKeySpecifier)[];
export type ShippingZoneFieldPolicy = {
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	default?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRange?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneBulkDeleteKeySpecifier = ('count' | 'errors' | 'shippingErrors' | ShippingZoneBulkDeleteKeySpecifier)[];
export type ShippingZoneBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ShippingZoneCountableConnectionKeySpecifier)[];
export type ShippingZoneCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneCountableEdgeKeySpecifier = ('cursor' | 'node' | ShippingZoneCountableEdgeKeySpecifier)[];
export type ShippingZoneCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneCreateKeySpecifier = ('errors' | 'shippingErrors' | 'shippingZone' | ShippingZoneCreateKeySpecifier)[];
export type ShippingZoneCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneCreatedKeySpecifier = ('shippingZone' | ShippingZoneCreatedKeySpecifier)[];
export type ShippingZoneCreatedFieldPolicy = {
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneDeleteKeySpecifier = ('errors' | 'shippingErrors' | 'shippingZone' | ShippingZoneDeleteKeySpecifier)[];
export type ShippingZoneDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneDeletedKeySpecifier = ('shippingZone' | ShippingZoneDeletedKeySpecifier)[];
export type ShippingZoneDeletedFieldPolicy = {
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneUpdateKeySpecifier = ('errors' | 'shippingErrors' | 'shippingZone' | ShippingZoneUpdateKeySpecifier)[];
export type ShippingZoneUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneUpdatedKeySpecifier = ('shippingZone' | ShippingZoneUpdatedKeySpecifier)[];
export type ShippingZoneUpdatedFieldPolicy = {
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopKeySpecifier = ('automaticFulfillmentDigitalProducts' | 'availableExternalAuthentications' | 'availablePaymentGateways' | 'availableShippingMethods' | 'channelCurrencies' | 'chargeTaxesOnShipping' | 'companyAddress' | 'countries' | 'customerSetPasswordUrl' | 'defaultCountry' | 'defaultDigitalMaxDownloads' | 'defaultDigitalUrlValidDays' | 'defaultMailSenderAddress' | 'defaultMailSenderName' | 'defaultWeightUnit' | 'description' | 'displayGrossPrices' | 'domain' | 'fulfillmentAllowUnpaid' | 'fulfillmentAutoApprove' | 'headerText' | 'includeTaxesInPrices' | 'languages' | 'limitQuantityPerCheckout' | 'limits' | 'name' | 'permissions' | 'phonePrefixes' | 'reserveStockDurationAnonymousUser' | 'reserveStockDurationAuthenticatedUser' | 'staffNotificationRecipients' | 'trackInventoryByDefault' | 'translation' | 'version' | ShopKeySpecifier)[];
export type ShopFieldPolicy = {
	automaticFulfillmentDigitalProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	availableExternalAuthentications?: FieldPolicy<any> | FieldReadFunction<any>,
	availablePaymentGateways?: FieldPolicy<any> | FieldReadFunction<any>,
	availableShippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	channelCurrencies?: FieldPolicy<any> | FieldReadFunction<any>,
	chargeTaxesOnShipping?: FieldPolicy<any> | FieldReadFunction<any>,
	companyAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	customerSetPasswordUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultCountry?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultDigitalMaxDownloads?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultDigitalUrlValidDays?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultMailSenderAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultMailSenderName?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultWeightUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayGrossPrices?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillmentAllowUnpaid?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillmentAutoApprove?: FieldPolicy<any> | FieldReadFunction<any>,
	headerText?: FieldPolicy<any> | FieldReadFunction<any>,
	includeTaxesInPrices?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	limitQuantityPerCheckout?: FieldPolicy<any> | FieldReadFunction<any>,
	limits?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	phonePrefixes?: FieldPolicy<any> | FieldReadFunction<any>,
	reserveStockDurationAnonymousUser?: FieldPolicy<any> | FieldReadFunction<any>,
	reserveStockDurationAuthenticatedUser?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipients?: FieldPolicy<any> | FieldReadFunction<any>,
	trackInventoryByDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopAddressUpdateKeySpecifier = ('errors' | 'shop' | 'shopErrors' | ShopAddressUpdateKeySpecifier)[];
export type ShopAddressUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopDomainUpdateKeySpecifier = ('errors' | 'shop' | 'shopErrors' | ShopDomainUpdateKeySpecifier)[];
export type ShopDomainUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopErrorKeySpecifier = ('code' | 'field' | 'message' | ShopErrorKeySpecifier)[];
export type ShopErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopFetchTaxRatesKeySpecifier = ('errors' | 'shop' | 'shopErrors' | ShopFetchTaxRatesKeySpecifier)[];
export type ShopFetchTaxRatesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopSettingsTranslateKeySpecifier = ('errors' | 'shop' | 'translationErrors' | ShopSettingsTranslateKeySpecifier)[];
export type ShopSettingsTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopSettingsUpdateKeySpecifier = ('errors' | 'shop' | 'shopErrors' | ShopSettingsUpdateKeySpecifier)[];
export type ShopSettingsUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopTranslationKeySpecifier = ('description' | 'headerText' | 'id' | 'language' | ShopTranslationKeySpecifier)[];
export type ShopTranslationFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	headerText?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffBulkDeleteKeySpecifier = ('count' | 'errors' | 'staffErrors' | StaffBulkDeleteKeySpecifier)[];
export type StaffBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffCreateKeySpecifier = ('errors' | 'staffErrors' | 'user' | StaffCreateKeySpecifier)[];
export type StaffCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffDeleteKeySpecifier = ('errors' | 'staffErrors' | 'user' | StaffDeleteKeySpecifier)[];
export type StaffDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffErrorKeySpecifier = ('addressType' | 'code' | 'field' | 'groups' | 'message' | 'permissions' | 'users' | StaffErrorKeySpecifier)[];
export type StaffErrorFieldPolicy = {
	addressType?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffNotificationRecipientKeySpecifier = ('active' | 'email' | 'id' | 'user' | StaffNotificationRecipientKeySpecifier)[];
export type StaffNotificationRecipientFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffNotificationRecipientCreateKeySpecifier = ('errors' | 'shopErrors' | 'staffNotificationRecipient' | StaffNotificationRecipientCreateKeySpecifier)[];
export type StaffNotificationRecipientCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffNotificationRecipientDeleteKeySpecifier = ('errors' | 'shopErrors' | 'staffNotificationRecipient' | StaffNotificationRecipientDeleteKeySpecifier)[];
export type StaffNotificationRecipientDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffNotificationRecipientUpdateKeySpecifier = ('errors' | 'shopErrors' | 'staffNotificationRecipient' | StaffNotificationRecipientUpdateKeySpecifier)[];
export type StaffNotificationRecipientUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffUpdateKeySpecifier = ('errors' | 'staffErrors' | 'user' | StaffUpdateKeySpecifier)[];
export type StaffUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockKeySpecifier = ('id' | 'productVariant' | 'quantity' | 'quantityAllocated' | 'quantityReserved' | 'warehouse' | StockKeySpecifier)[];
export type StockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityAllocated?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityReserved?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | StockCountableConnectionKeySpecifier)[];
export type StockCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockCountableEdgeKeySpecifier = ('cursor' | 'node' | StockCountableEdgeKeySpecifier)[];
export type StockCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockErrorKeySpecifier = ('code' | 'field' | 'message' | StockErrorKeySpecifier)[];
export type StockErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('event' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	event?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxTypeKeySpecifier = ('description' | 'taxCode' | TaxTypeKeySpecifier)[];
export type TaxTypeFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	taxCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxedMoneyKeySpecifier = ('currency' | 'gross' | 'net' | 'tax' | TaxedMoneyKeySpecifier)[];
export type TaxedMoneyFieldPolicy = {
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	gross?: FieldPolicy<any> | FieldReadFunction<any>,
	net?: FieldPolicy<any> | FieldReadFunction<any>,
	tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxedMoneyRangeKeySpecifier = ('start' | 'stop' | TaxedMoneyRangeKeySpecifier)[];
export type TaxedMoneyRangeFieldPolicy = {
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	stop?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimePeriodKeySpecifier = ('amount' | 'type' | TimePeriodKeySpecifier)[];
export type TimePeriodFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionKeySpecifier = ('amount' | 'created' | 'error' | 'gatewayResponse' | 'id' | 'isSuccess' | 'kind' | 'payment' | 'token' | TransactionKeySpecifier)[];
export type TransactionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	gatewayResponse?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isSuccess?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TranslatableItemConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | TranslatableItemConnectionKeySpecifier)[];
export type TranslatableItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TranslatableItemEdgeKeySpecifier = ('cursor' | 'node' | TranslatableItemEdgeKeySpecifier)[];
export type TranslatableItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TranslationCreatedKeySpecifier = ('translation' | TranslationCreatedKeySpecifier)[];
export type TranslationCreatedFieldPolicy = {
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TranslationErrorKeySpecifier = ('code' | 'field' | 'message' | TranslationErrorKeySpecifier)[];
export type TranslationErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TranslationUpdatedKeySpecifier = ('translation' | TranslationUpdatedKeySpecifier)[];
export type TranslationUpdatedFieldPolicy = {
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateMetadataKeySpecifier = ('errors' | 'item' | 'metadataErrors' | UpdateMetadataKeySpecifier)[];
export type UpdateMetadataFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePrivateMetadataKeySpecifier = ('errors' | 'item' | 'metadataErrors' | UpdatePrivateMetadataKeySpecifier)[];
export type UpdatePrivateMetadataFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadErrorKeySpecifier = ('code' | 'field' | 'message' | UploadErrorKeySpecifier)[];
export type UploadErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('addresses' | 'avatar' | 'checkout' | 'checkoutTokens' | 'dateJoined' | 'defaultBillingAddress' | 'defaultShippingAddress' | 'editableGroups' | 'email' | 'events' | 'firstName' | 'giftCards' | 'id' | 'isActive' | 'isStaff' | 'languageCode' | 'lastLogin' | 'lastName' | 'metadata' | 'metafield' | 'metafields' | 'note' | 'orders' | 'permissionGroups' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'storedPaymentSources' | 'updatedAt' | 'userPermissions' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	dateJoined?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultBillingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultShippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	editableGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	isStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	languageCode?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	storedPaymentSources?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userPermissions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAvatarDeleteKeySpecifier = ('accountErrors' | 'errors' | 'user' | UserAvatarDeleteKeySpecifier)[];
export type UserAvatarDeleteFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAvatarUpdateKeySpecifier = ('accountErrors' | 'errors' | 'user' | UserAvatarUpdateKeySpecifier)[];
export type UserAvatarUpdateFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserBulkSetActiveKeySpecifier = ('accountErrors' | 'count' | 'errors' | UserBulkSetActiveKeySpecifier)[];
export type UserBulkSetActiveFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | UserCountableConnectionKeySpecifier)[];
export type UserCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountableEdgeKeySpecifier = ('cursor' | 'node' | UserCountableEdgeKeySpecifier)[];
export type UserCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermissionKeySpecifier = ('code' | 'name' | 'sourcePermissionGroups' | UserPermissionKeySpecifier)[];
export type UserPermissionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sourcePermissionGroups?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VATKeySpecifier = ('countryCode' | 'reducedRates' | 'standardRate' | VATKeySpecifier)[];
export type VATFieldPolicy = {
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	reducedRates?: FieldPolicy<any> | FieldReadFunction<any>,
	standardRate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantMediaAssignKeySpecifier = ('errors' | 'media' | 'productErrors' | 'productVariant' | VariantMediaAssignKeySpecifier)[];
export type VariantMediaAssignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantMediaUnassignKeySpecifier = ('errors' | 'media' | 'productErrors' | 'productVariant' | VariantMediaUnassignKeySpecifier)[];
export type VariantMediaUnassignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantPricingInfoKeySpecifier = ('discount' | 'discountLocalCurrency' | 'onSale' | 'price' | 'priceLocalCurrency' | 'priceUndiscounted' | VariantPricingInfoKeySpecifier)[];
export type VariantPricingInfoFieldPolicy = {
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountLocalCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	onSale?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	priceLocalCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	priceUndiscounted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyTokenKeySpecifier = ('accountErrors' | 'errors' | 'isValid' | 'payload' | 'user' | VerifyTokenKeySpecifier)[];
export type VerifyTokenFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherKeySpecifier = ('applyOncePerCustomer' | 'applyOncePerOrder' | 'categories' | 'channelListings' | 'code' | 'collections' | 'countries' | 'currency' | 'discountValue' | 'discountValueType' | 'endDate' | 'id' | 'metadata' | 'metafield' | 'metafields' | 'minCheckoutItemsQuantity' | 'minSpent' | 'name' | 'onlyForStaff' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'products' | 'startDate' | 'translation' | 'type' | 'usageLimit' | 'used' | 'variants' | VoucherKeySpecifier)[];
export type VoucherFieldPolicy = {
	applyOncePerCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	applyOncePerOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	channelListings?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValueType?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	minCheckoutItemsQuantity?: FieldPolicy<any> | FieldReadFunction<any>,
	minSpent?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	onlyForStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	usageLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	used?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherAddCataloguesKeySpecifier = ('discountErrors' | 'errors' | 'voucher' | VoucherAddCataloguesKeySpecifier)[];
export type VoucherAddCataloguesFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherBulkDeleteKeySpecifier = ('count' | 'discountErrors' | 'errors' | VoucherBulkDeleteKeySpecifier)[];
export type VoucherBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherChannelListingKeySpecifier = ('channel' | 'currency' | 'discountValue' | 'id' | 'minSpent' | VoucherChannelListingKeySpecifier)[];
export type VoucherChannelListingFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	minSpent?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherChannelListingUpdateKeySpecifier = ('discountErrors' | 'errors' | 'voucher' | VoucherChannelListingUpdateKeySpecifier)[];
export type VoucherChannelListingUpdateFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | VoucherCountableConnectionKeySpecifier)[];
export type VoucherCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherCountableEdgeKeySpecifier = ('cursor' | 'node' | VoucherCountableEdgeKeySpecifier)[];
export type VoucherCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherCreateKeySpecifier = ('discountErrors' | 'errors' | 'voucher' | VoucherCreateKeySpecifier)[];
export type VoucherCreateFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherDeleteKeySpecifier = ('discountErrors' | 'errors' | 'voucher' | VoucherDeleteKeySpecifier)[];
export type VoucherDeleteFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherRemoveCataloguesKeySpecifier = ('discountErrors' | 'errors' | 'voucher' | VoucherRemoveCataloguesKeySpecifier)[];
export type VoucherRemoveCataloguesFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherTranslatableContentKeySpecifier = ('id' | 'name' | 'translation' | 'voucher' | VoucherTranslatableContentKeySpecifier)[];
export type VoucherTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherTranslateKeySpecifier = ('errors' | 'translationErrors' | 'voucher' | VoucherTranslateKeySpecifier)[];
export type VoucherTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherTranslationKeySpecifier = ('id' | 'language' | 'name' | VoucherTranslationKeySpecifier)[];
export type VoucherTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherUpdateKeySpecifier = ('discountErrors' | 'errors' | 'voucher' | VoucherUpdateKeySpecifier)[];
export type VoucherUpdateFieldPolicy = {
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseKeySpecifier = ('address' | 'clickAndCollectOption' | 'companyName' | 'email' | 'id' | 'isPrivate' | 'metadata' | 'metafield' | 'metafields' | 'name' | 'privateMetadata' | 'privateMetafield' | 'privateMetafields' | 'shippingZones' | 'slug' | WarehouseKeySpecifier)[];
export type WarehouseFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	clickAndCollectOption?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafield?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetafields?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZones?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | WarehouseCountableConnectionKeySpecifier)[];
export type WarehouseCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseCountableEdgeKeySpecifier = ('cursor' | 'node' | WarehouseCountableEdgeKeySpecifier)[];
export type WarehouseCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseCreateKeySpecifier = ('errors' | 'warehouse' | 'warehouseErrors' | WarehouseCreateKeySpecifier)[];
export type WarehouseCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseDeleteKeySpecifier = ('errors' | 'warehouse' | 'warehouseErrors' | WarehouseDeleteKeySpecifier)[];
export type WarehouseDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseErrorKeySpecifier = ('code' | 'field' | 'message' | WarehouseErrorKeySpecifier)[];
export type WarehouseErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseShippingZoneAssignKeySpecifier = ('errors' | 'warehouse' | 'warehouseErrors' | WarehouseShippingZoneAssignKeySpecifier)[];
export type WarehouseShippingZoneAssignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseShippingZoneUnassignKeySpecifier = ('errors' | 'warehouse' | 'warehouseErrors' | WarehouseShippingZoneUnassignKeySpecifier)[];
export type WarehouseShippingZoneUnassignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseUpdateKeySpecifier = ('errors' | 'warehouse' | 'warehouseErrors' | WarehouseUpdateKeySpecifier)[];
export type WarehouseUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookKeySpecifier = ('app' | 'asyncEvents' | 'eventDeliveries' | 'events' | 'id' | 'isActive' | 'name' | 'secretKey' | 'subscriptionQuery' | 'syncEvents' | 'targetUrl' | WebhookKeySpecifier)[];
export type WebhookFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	asyncEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	eventDeliveries?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	secretKey?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionQuery?: FieldPolicy<any> | FieldReadFunction<any>,
	syncEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	targetUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookCreateKeySpecifier = ('errors' | 'webhook' | 'webhookErrors' | WebhookCreateKeySpecifier)[];
export type WebhookCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookDeleteKeySpecifier = ('errors' | 'webhook' | 'webhookErrors' | WebhookDeleteKeySpecifier)[];
export type WebhookDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookErrorKeySpecifier = ('code' | 'field' | 'message' | WebhookErrorKeySpecifier)[];
export type WebhookErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookEventKeySpecifier = ('eventType' | 'name' | WebhookEventKeySpecifier)[];
export type WebhookEventFieldPolicy = {
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookEventAsyncKeySpecifier = ('eventType' | 'name' | WebhookEventAsyncKeySpecifier)[];
export type WebhookEventAsyncFieldPolicy = {
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookEventSyncKeySpecifier = ('eventType' | 'name' | WebhookEventSyncKeySpecifier)[];
export type WebhookEventSyncFieldPolicy = {
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookUpdateKeySpecifier = ('errors' | 'webhook' | 'webhookErrors' | WebhookUpdateKeySpecifier)[];
export type WebhookUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WeightKeySpecifier = ('unit' | 'value' | WeightKeySpecifier)[];
export type WeightFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ServiceKeySpecifier = ('sdl' | _ServiceKeySpecifier)[];
export type _ServiceFieldPolicy = {
	sdl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AccountAddressCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountAddressCreateKeySpecifier | (() => undefined | AccountAddressCreateKeySpecifier),
		fields?: AccountAddressCreateFieldPolicy,
	},
	AccountAddressDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountAddressDeleteKeySpecifier | (() => undefined | AccountAddressDeleteKeySpecifier),
		fields?: AccountAddressDeleteFieldPolicy,
	},
	AccountAddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountAddressUpdateKeySpecifier | (() => undefined | AccountAddressUpdateKeySpecifier),
		fields?: AccountAddressUpdateFieldPolicy,
	},
	AccountDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountDeleteKeySpecifier | (() => undefined | AccountDeleteKeySpecifier),
		fields?: AccountDeleteFieldPolicy,
	},
	AccountError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountErrorKeySpecifier | (() => undefined | AccountErrorKeySpecifier),
		fields?: AccountErrorFieldPolicy,
	},
	AccountRegister?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountRegisterKeySpecifier | (() => undefined | AccountRegisterKeySpecifier),
		fields?: AccountRegisterFieldPolicy,
	},
	AccountRequestDeletion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountRequestDeletionKeySpecifier | (() => undefined | AccountRequestDeletionKeySpecifier),
		fields?: AccountRequestDeletionFieldPolicy,
	},
	AccountSetDefaultAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountSetDefaultAddressKeySpecifier | (() => undefined | AccountSetDefaultAddressKeySpecifier),
		fields?: AccountSetDefaultAddressFieldPolicy,
	},
	AccountUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountUpdateKeySpecifier | (() => undefined | AccountUpdateKeySpecifier),
		fields?: AccountUpdateFieldPolicy,
	},
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	AddressCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressCreateKeySpecifier | (() => undefined | AddressCreateKeySpecifier),
		fields?: AddressCreateFieldPolicy,
	},
	AddressDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressDeleteKeySpecifier | (() => undefined | AddressDeleteKeySpecifier),
		fields?: AddressDeleteFieldPolicy,
	},
	AddressSetDefault?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressSetDefaultKeySpecifier | (() => undefined | AddressSetDefaultKeySpecifier),
		fields?: AddressSetDefaultFieldPolicy,
	},
	AddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressUpdateKeySpecifier | (() => undefined | AddressUpdateKeySpecifier),
		fields?: AddressUpdateFieldPolicy,
	},
	AddressValidationData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressValidationDataKeySpecifier | (() => undefined | AddressValidationDataKeySpecifier),
		fields?: AddressValidationDataFieldPolicy,
	},
	Allocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllocationKeySpecifier | (() => undefined | AllocationKeySpecifier),
		fields?: AllocationFieldPolicy,
	},
	App?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppKeySpecifier | (() => undefined | AppKeySpecifier),
		fields?: AppFieldPolicy,
	},
	AppActivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppActivateKeySpecifier | (() => undefined | AppActivateKeySpecifier),
		fields?: AppActivateFieldPolicy,
	},
	AppCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppCountableConnectionKeySpecifier | (() => undefined | AppCountableConnectionKeySpecifier),
		fields?: AppCountableConnectionFieldPolicy,
	},
	AppCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppCountableEdgeKeySpecifier | (() => undefined | AppCountableEdgeKeySpecifier),
		fields?: AppCountableEdgeFieldPolicy,
	},
	AppCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppCreateKeySpecifier | (() => undefined | AppCreateKeySpecifier),
		fields?: AppCreateFieldPolicy,
	},
	AppDeactivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppDeactivateKeySpecifier | (() => undefined | AppDeactivateKeySpecifier),
		fields?: AppDeactivateFieldPolicy,
	},
	AppDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppDeleteKeySpecifier | (() => undefined | AppDeleteKeySpecifier),
		fields?: AppDeleteFieldPolicy,
	},
	AppDeleteFailedInstallation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppDeleteFailedInstallationKeySpecifier | (() => undefined | AppDeleteFailedInstallationKeySpecifier),
		fields?: AppDeleteFailedInstallationFieldPolicy,
	},
	AppError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppErrorKeySpecifier | (() => undefined | AppErrorKeySpecifier),
		fields?: AppErrorFieldPolicy,
	},
	AppExtension?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppExtensionKeySpecifier | (() => undefined | AppExtensionKeySpecifier),
		fields?: AppExtensionFieldPolicy,
	},
	AppExtensionCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppExtensionCountableConnectionKeySpecifier | (() => undefined | AppExtensionCountableConnectionKeySpecifier),
		fields?: AppExtensionCountableConnectionFieldPolicy,
	},
	AppExtensionCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppExtensionCountableEdgeKeySpecifier | (() => undefined | AppExtensionCountableEdgeKeySpecifier),
		fields?: AppExtensionCountableEdgeFieldPolicy,
	},
	AppFetchManifest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppFetchManifestKeySpecifier | (() => undefined | AppFetchManifestKeySpecifier),
		fields?: AppFetchManifestFieldPolicy,
	},
	AppInstall?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppInstallKeySpecifier | (() => undefined | AppInstallKeySpecifier),
		fields?: AppInstallFieldPolicy,
	},
	AppInstallation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppInstallationKeySpecifier | (() => undefined | AppInstallationKeySpecifier),
		fields?: AppInstallationFieldPolicy,
	},
	AppManifestExtension?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppManifestExtensionKeySpecifier | (() => undefined | AppManifestExtensionKeySpecifier),
		fields?: AppManifestExtensionFieldPolicy,
	},
	AppRetryInstall?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppRetryInstallKeySpecifier | (() => undefined | AppRetryInstallKeySpecifier),
		fields?: AppRetryInstallFieldPolicy,
	},
	AppToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenKeySpecifier | (() => undefined | AppTokenKeySpecifier),
		fields?: AppTokenFieldPolicy,
	},
	AppTokenCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenCreateKeySpecifier | (() => undefined | AppTokenCreateKeySpecifier),
		fields?: AppTokenCreateFieldPolicy,
	},
	AppTokenDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenDeleteKeySpecifier | (() => undefined | AppTokenDeleteKeySpecifier),
		fields?: AppTokenDeleteFieldPolicy,
	},
	AppTokenVerify?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenVerifyKeySpecifier | (() => undefined | AppTokenVerifyKeySpecifier),
		fields?: AppTokenVerifyFieldPolicy,
	},
	AppUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppUpdateKeySpecifier | (() => undefined | AppUpdateKeySpecifier),
		fields?: AppUpdateFieldPolicy,
	},
	AssignNavigation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignNavigationKeySpecifier | (() => undefined | AssignNavigationKeySpecifier),
		fields?: AssignNavigationFieldPolicy,
	},
	AssignedVariantAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedVariantAttributeKeySpecifier | (() => undefined | AssignedVariantAttributeKeySpecifier),
		fields?: AssignedVariantAttributeFieldPolicy,
	},
	Attribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeKeySpecifier | (() => undefined | AttributeKeySpecifier),
		fields?: AttributeFieldPolicy,
	},
	AttributeBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeBulkDeleteKeySpecifier | (() => undefined | AttributeBulkDeleteKeySpecifier),
		fields?: AttributeBulkDeleteFieldPolicy,
	},
	AttributeCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeCountableConnectionKeySpecifier | (() => undefined | AttributeCountableConnectionKeySpecifier),
		fields?: AttributeCountableConnectionFieldPolicy,
	},
	AttributeCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeCountableEdgeKeySpecifier | (() => undefined | AttributeCountableEdgeKeySpecifier),
		fields?: AttributeCountableEdgeFieldPolicy,
	},
	AttributeCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeCreateKeySpecifier | (() => undefined | AttributeCreateKeySpecifier),
		fields?: AttributeCreateFieldPolicy,
	},
	AttributeDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeDeleteKeySpecifier | (() => undefined | AttributeDeleteKeySpecifier),
		fields?: AttributeDeleteFieldPolicy,
	},
	AttributeError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeErrorKeySpecifier | (() => undefined | AttributeErrorKeySpecifier),
		fields?: AttributeErrorFieldPolicy,
	},
	AttributeReorderValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeReorderValuesKeySpecifier | (() => undefined | AttributeReorderValuesKeySpecifier),
		fields?: AttributeReorderValuesFieldPolicy,
	},
	AttributeTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeTranslatableContentKeySpecifier | (() => undefined | AttributeTranslatableContentKeySpecifier),
		fields?: AttributeTranslatableContentFieldPolicy,
	},
	AttributeTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeTranslateKeySpecifier | (() => undefined | AttributeTranslateKeySpecifier),
		fields?: AttributeTranslateFieldPolicy,
	},
	AttributeTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeTranslationKeySpecifier | (() => undefined | AttributeTranslationKeySpecifier),
		fields?: AttributeTranslationFieldPolicy,
	},
	AttributeUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeUpdateKeySpecifier | (() => undefined | AttributeUpdateKeySpecifier),
		fields?: AttributeUpdateFieldPolicy,
	},
	AttributeValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueKeySpecifier | (() => undefined | AttributeValueKeySpecifier),
		fields?: AttributeValueFieldPolicy,
	},
	AttributeValueBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueBulkDeleteKeySpecifier | (() => undefined | AttributeValueBulkDeleteKeySpecifier),
		fields?: AttributeValueBulkDeleteFieldPolicy,
	},
	AttributeValueCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueCountableConnectionKeySpecifier | (() => undefined | AttributeValueCountableConnectionKeySpecifier),
		fields?: AttributeValueCountableConnectionFieldPolicy,
	},
	AttributeValueCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueCountableEdgeKeySpecifier | (() => undefined | AttributeValueCountableEdgeKeySpecifier),
		fields?: AttributeValueCountableEdgeFieldPolicy,
	},
	AttributeValueCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueCreateKeySpecifier | (() => undefined | AttributeValueCreateKeySpecifier),
		fields?: AttributeValueCreateFieldPolicy,
	},
	AttributeValueDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueDeleteKeySpecifier | (() => undefined | AttributeValueDeleteKeySpecifier),
		fields?: AttributeValueDeleteFieldPolicy,
	},
	AttributeValueTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueTranslatableContentKeySpecifier | (() => undefined | AttributeValueTranslatableContentKeySpecifier),
		fields?: AttributeValueTranslatableContentFieldPolicy,
	},
	AttributeValueTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueTranslateKeySpecifier | (() => undefined | AttributeValueTranslateKeySpecifier),
		fields?: AttributeValueTranslateFieldPolicy,
	},
	AttributeValueTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueTranslationKeySpecifier | (() => undefined | AttributeValueTranslationKeySpecifier),
		fields?: AttributeValueTranslationFieldPolicy,
	},
	AttributeValueUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueUpdateKeySpecifier | (() => undefined | AttributeValueUpdateKeySpecifier),
		fields?: AttributeValueUpdateFieldPolicy,
	},
	BulkProductError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BulkProductErrorKeySpecifier | (() => undefined | BulkProductErrorKeySpecifier),
		fields?: BulkProductErrorFieldPolicy,
	},
	BulkStockError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BulkStockErrorKeySpecifier | (() => undefined | BulkStockErrorKeySpecifier),
		fields?: BulkStockErrorFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	CategoryBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryBulkDeleteKeySpecifier | (() => undefined | CategoryBulkDeleteKeySpecifier),
		fields?: CategoryBulkDeleteFieldPolicy,
	},
	CategoryCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCountableConnectionKeySpecifier | (() => undefined | CategoryCountableConnectionKeySpecifier),
		fields?: CategoryCountableConnectionFieldPolicy,
	},
	CategoryCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCountableEdgeKeySpecifier | (() => undefined | CategoryCountableEdgeKeySpecifier),
		fields?: CategoryCountableEdgeFieldPolicy,
	},
	CategoryCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCreateKeySpecifier | (() => undefined | CategoryCreateKeySpecifier),
		fields?: CategoryCreateFieldPolicy,
	},
	CategoryCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCreatedKeySpecifier | (() => undefined | CategoryCreatedKeySpecifier),
		fields?: CategoryCreatedFieldPolicy,
	},
	CategoryDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryDeleteKeySpecifier | (() => undefined | CategoryDeleteKeySpecifier),
		fields?: CategoryDeleteFieldPolicy,
	},
	CategoryDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryDeletedKeySpecifier | (() => undefined | CategoryDeletedKeySpecifier),
		fields?: CategoryDeletedFieldPolicy,
	},
	CategoryTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryTranslatableContentKeySpecifier | (() => undefined | CategoryTranslatableContentKeySpecifier),
		fields?: CategoryTranslatableContentFieldPolicy,
	},
	CategoryTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryTranslateKeySpecifier | (() => undefined | CategoryTranslateKeySpecifier),
		fields?: CategoryTranslateFieldPolicy,
	},
	CategoryTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryTranslationKeySpecifier | (() => undefined | CategoryTranslationKeySpecifier),
		fields?: CategoryTranslationFieldPolicy,
	},
	CategoryUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryUpdateKeySpecifier | (() => undefined | CategoryUpdateKeySpecifier),
		fields?: CategoryUpdateFieldPolicy,
	},
	CategoryUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryUpdatedKeySpecifier | (() => undefined | CategoryUpdatedKeySpecifier),
		fields?: CategoryUpdatedFieldPolicy,
	},
	Channel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelKeySpecifier | (() => undefined | ChannelKeySpecifier),
		fields?: ChannelFieldPolicy,
	},
	ChannelActivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelActivateKeySpecifier | (() => undefined | ChannelActivateKeySpecifier),
		fields?: ChannelActivateFieldPolicy,
	},
	ChannelCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelCreateKeySpecifier | (() => undefined | ChannelCreateKeySpecifier),
		fields?: ChannelCreateFieldPolicy,
	},
	ChannelCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelCreatedKeySpecifier | (() => undefined | ChannelCreatedKeySpecifier),
		fields?: ChannelCreatedFieldPolicy,
	},
	ChannelDeactivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelDeactivateKeySpecifier | (() => undefined | ChannelDeactivateKeySpecifier),
		fields?: ChannelDeactivateFieldPolicy,
	},
	ChannelDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelDeleteKeySpecifier | (() => undefined | ChannelDeleteKeySpecifier),
		fields?: ChannelDeleteFieldPolicy,
	},
	ChannelDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelDeletedKeySpecifier | (() => undefined | ChannelDeletedKeySpecifier),
		fields?: ChannelDeletedFieldPolicy,
	},
	ChannelError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelErrorKeySpecifier | (() => undefined | ChannelErrorKeySpecifier),
		fields?: ChannelErrorFieldPolicy,
	},
	ChannelStatusChanged?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelStatusChangedKeySpecifier | (() => undefined | ChannelStatusChangedKeySpecifier),
		fields?: ChannelStatusChangedFieldPolicy,
	},
	ChannelUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelUpdateKeySpecifier | (() => undefined | ChannelUpdateKeySpecifier),
		fields?: ChannelUpdateFieldPolicy,
	},
	ChannelUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelUpdatedKeySpecifier | (() => undefined | ChannelUpdatedKeySpecifier),
		fields?: ChannelUpdatedFieldPolicy,
	},
	Checkout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutKeySpecifier | (() => undefined | CheckoutKeySpecifier),
		fields?: CheckoutFieldPolicy,
	},
	CheckoutAddPromoCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutAddPromoCodeKeySpecifier | (() => undefined | CheckoutAddPromoCodeKeySpecifier),
		fields?: CheckoutAddPromoCodeFieldPolicy,
	},
	CheckoutBillingAddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutBillingAddressUpdateKeySpecifier | (() => undefined | CheckoutBillingAddressUpdateKeySpecifier),
		fields?: CheckoutBillingAddressUpdateFieldPolicy,
	},
	CheckoutComplete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCompleteKeySpecifier | (() => undefined | CheckoutCompleteKeySpecifier),
		fields?: CheckoutCompleteFieldPolicy,
	},
	CheckoutCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCountableConnectionKeySpecifier | (() => undefined | CheckoutCountableConnectionKeySpecifier),
		fields?: CheckoutCountableConnectionFieldPolicy,
	},
	CheckoutCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCountableEdgeKeySpecifier | (() => undefined | CheckoutCountableEdgeKeySpecifier),
		fields?: CheckoutCountableEdgeFieldPolicy,
	},
	CheckoutCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCreateKeySpecifier | (() => undefined | CheckoutCreateKeySpecifier),
		fields?: CheckoutCreateFieldPolicy,
	},
	CheckoutCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCreatedKeySpecifier | (() => undefined | CheckoutCreatedKeySpecifier),
		fields?: CheckoutCreatedFieldPolicy,
	},
	CheckoutCustomerAttach?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCustomerAttachKeySpecifier | (() => undefined | CheckoutCustomerAttachKeySpecifier),
		fields?: CheckoutCustomerAttachFieldPolicy,
	},
	CheckoutCustomerDetach?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCustomerDetachKeySpecifier | (() => undefined | CheckoutCustomerDetachKeySpecifier),
		fields?: CheckoutCustomerDetachFieldPolicy,
	},
	CheckoutDeliveryMethodUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutDeliveryMethodUpdateKeySpecifier | (() => undefined | CheckoutDeliveryMethodUpdateKeySpecifier),
		fields?: CheckoutDeliveryMethodUpdateFieldPolicy,
	},
	CheckoutEmailUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutEmailUpdateKeySpecifier | (() => undefined | CheckoutEmailUpdateKeySpecifier),
		fields?: CheckoutEmailUpdateFieldPolicy,
	},
	CheckoutError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutErrorKeySpecifier | (() => undefined | CheckoutErrorKeySpecifier),
		fields?: CheckoutErrorFieldPolicy,
	},
	CheckoutLanguageCodeUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLanguageCodeUpdateKeySpecifier | (() => undefined | CheckoutLanguageCodeUpdateKeySpecifier),
		fields?: CheckoutLanguageCodeUpdateFieldPolicy,
	},
	CheckoutLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineKeySpecifier | (() => undefined | CheckoutLineKeySpecifier),
		fields?: CheckoutLineFieldPolicy,
	},
	CheckoutLineCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineCountableConnectionKeySpecifier | (() => undefined | CheckoutLineCountableConnectionKeySpecifier),
		fields?: CheckoutLineCountableConnectionFieldPolicy,
	},
	CheckoutLineCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineCountableEdgeKeySpecifier | (() => undefined | CheckoutLineCountableEdgeKeySpecifier),
		fields?: CheckoutLineCountableEdgeFieldPolicy,
	},
	CheckoutLineDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineDeleteKeySpecifier | (() => undefined | CheckoutLineDeleteKeySpecifier),
		fields?: CheckoutLineDeleteFieldPolicy,
	},
	CheckoutLinesAdd?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLinesAddKeySpecifier | (() => undefined | CheckoutLinesAddKeySpecifier),
		fields?: CheckoutLinesAddFieldPolicy,
	},
	CheckoutLinesDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLinesDeleteKeySpecifier | (() => undefined | CheckoutLinesDeleteKeySpecifier),
		fields?: CheckoutLinesDeleteFieldPolicy,
	},
	CheckoutLinesUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLinesUpdateKeySpecifier | (() => undefined | CheckoutLinesUpdateKeySpecifier),
		fields?: CheckoutLinesUpdateFieldPolicy,
	},
	CheckoutPaymentCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutPaymentCreateKeySpecifier | (() => undefined | CheckoutPaymentCreateKeySpecifier),
		fields?: CheckoutPaymentCreateFieldPolicy,
	},
	CheckoutRemovePromoCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutRemovePromoCodeKeySpecifier | (() => undefined | CheckoutRemovePromoCodeKeySpecifier),
		fields?: CheckoutRemovePromoCodeFieldPolicy,
	},
	CheckoutShippingAddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutShippingAddressUpdateKeySpecifier | (() => undefined | CheckoutShippingAddressUpdateKeySpecifier),
		fields?: CheckoutShippingAddressUpdateFieldPolicy,
	},
	CheckoutShippingMethodUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutShippingMethodUpdateKeySpecifier | (() => undefined | CheckoutShippingMethodUpdateKeySpecifier),
		fields?: CheckoutShippingMethodUpdateFieldPolicy,
	},
	CheckoutUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutUpdatedKeySpecifier | (() => undefined | CheckoutUpdatedKeySpecifier),
		fields?: CheckoutUpdatedFieldPolicy,
	},
	ChoiceValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChoiceValueKeySpecifier | (() => undefined | ChoiceValueKeySpecifier),
		fields?: ChoiceValueFieldPolicy,
	},
	Collection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionKeySpecifier | (() => undefined | CollectionKeySpecifier),
		fields?: CollectionFieldPolicy,
	},
	CollectionAddProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionAddProductsKeySpecifier | (() => undefined | CollectionAddProductsKeySpecifier),
		fields?: CollectionAddProductsFieldPolicy,
	},
	CollectionBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionBulkDeleteKeySpecifier | (() => undefined | CollectionBulkDeleteKeySpecifier),
		fields?: CollectionBulkDeleteFieldPolicy,
	},
	CollectionChannelListing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionChannelListingKeySpecifier | (() => undefined | CollectionChannelListingKeySpecifier),
		fields?: CollectionChannelListingFieldPolicy,
	},
	CollectionChannelListingError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionChannelListingErrorKeySpecifier | (() => undefined | CollectionChannelListingErrorKeySpecifier),
		fields?: CollectionChannelListingErrorFieldPolicy,
	},
	CollectionChannelListingUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionChannelListingUpdateKeySpecifier | (() => undefined | CollectionChannelListingUpdateKeySpecifier),
		fields?: CollectionChannelListingUpdateFieldPolicy,
	},
	CollectionCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionCountableConnectionKeySpecifier | (() => undefined | CollectionCountableConnectionKeySpecifier),
		fields?: CollectionCountableConnectionFieldPolicy,
	},
	CollectionCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionCountableEdgeKeySpecifier | (() => undefined | CollectionCountableEdgeKeySpecifier),
		fields?: CollectionCountableEdgeFieldPolicy,
	},
	CollectionCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionCreateKeySpecifier | (() => undefined | CollectionCreateKeySpecifier),
		fields?: CollectionCreateFieldPolicy,
	},
	CollectionCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionCreatedKeySpecifier | (() => undefined | CollectionCreatedKeySpecifier),
		fields?: CollectionCreatedFieldPolicy,
	},
	CollectionDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionDeleteKeySpecifier | (() => undefined | CollectionDeleteKeySpecifier),
		fields?: CollectionDeleteFieldPolicy,
	},
	CollectionDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionDeletedKeySpecifier | (() => undefined | CollectionDeletedKeySpecifier),
		fields?: CollectionDeletedFieldPolicy,
	},
	CollectionError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionErrorKeySpecifier | (() => undefined | CollectionErrorKeySpecifier),
		fields?: CollectionErrorFieldPolicy,
	},
	CollectionRemoveProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionRemoveProductsKeySpecifier | (() => undefined | CollectionRemoveProductsKeySpecifier),
		fields?: CollectionRemoveProductsFieldPolicy,
	},
	CollectionReorderProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionReorderProductsKeySpecifier | (() => undefined | CollectionReorderProductsKeySpecifier),
		fields?: CollectionReorderProductsFieldPolicy,
	},
	CollectionTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionTranslatableContentKeySpecifier | (() => undefined | CollectionTranslatableContentKeySpecifier),
		fields?: CollectionTranslatableContentFieldPolicy,
	},
	CollectionTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionTranslateKeySpecifier | (() => undefined | CollectionTranslateKeySpecifier),
		fields?: CollectionTranslateFieldPolicy,
	},
	CollectionTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionTranslationKeySpecifier | (() => undefined | CollectionTranslationKeySpecifier),
		fields?: CollectionTranslationFieldPolicy,
	},
	CollectionUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionUpdateKeySpecifier | (() => undefined | CollectionUpdateKeySpecifier),
		fields?: CollectionUpdateFieldPolicy,
	},
	CollectionUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionUpdatedKeySpecifier | (() => undefined | CollectionUpdatedKeySpecifier),
		fields?: CollectionUpdatedFieldPolicy,
	},
	ConfigurationItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurationItemKeySpecifier | (() => undefined | ConfigurationItemKeySpecifier),
		fields?: ConfigurationItemFieldPolicy,
	},
	ConfirmAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfirmAccountKeySpecifier | (() => undefined | ConfirmAccountKeySpecifier),
		fields?: ConfirmAccountFieldPolicy,
	},
	ConfirmEmailChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfirmEmailChangeKeySpecifier | (() => undefined | ConfirmEmailChangeKeySpecifier),
		fields?: ConfirmEmailChangeFieldPolicy,
	},
	CountryDisplay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryDisplayKeySpecifier | (() => undefined | CountryDisplayKeySpecifier),
		fields?: CountryDisplayFieldPolicy,
	},
	CreateToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTokenKeySpecifier | (() => undefined | CreateTokenKeySpecifier),
		fields?: CreateTokenFieldPolicy,
	},
	CreditCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditCardKeySpecifier | (() => undefined | CreditCardKeySpecifier),
		fields?: CreditCardFieldPolicy,
	},
	CustomerBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerBulkDeleteKeySpecifier | (() => undefined | CustomerBulkDeleteKeySpecifier),
		fields?: CustomerBulkDeleteFieldPolicy,
	},
	CustomerCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerCreateKeySpecifier | (() => undefined | CustomerCreateKeySpecifier),
		fields?: CustomerCreateFieldPolicy,
	},
	CustomerCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerCreatedKeySpecifier | (() => undefined | CustomerCreatedKeySpecifier),
		fields?: CustomerCreatedFieldPolicy,
	},
	CustomerDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerDeleteKeySpecifier | (() => undefined | CustomerDeleteKeySpecifier),
		fields?: CustomerDeleteFieldPolicy,
	},
	CustomerEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerEventKeySpecifier | (() => undefined | CustomerEventKeySpecifier),
		fields?: CustomerEventFieldPolicy,
	},
	CustomerUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerUpdateKeySpecifier | (() => undefined | CustomerUpdateKeySpecifier),
		fields?: CustomerUpdateFieldPolicy,
	},
	CustomerUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerUpdatedKeySpecifier | (() => undefined | CustomerUpdatedKeySpecifier),
		fields?: CustomerUpdatedFieldPolicy,
	},
	DeactivateAllUserTokens?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeactivateAllUserTokensKeySpecifier | (() => undefined | DeactivateAllUserTokensKeySpecifier),
		fields?: DeactivateAllUserTokensFieldPolicy,
	},
	DeleteMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteMetadataKeySpecifier | (() => undefined | DeleteMetadataKeySpecifier),
		fields?: DeleteMetadataFieldPolicy,
	},
	DeletePrivateMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePrivateMetadataKeySpecifier | (() => undefined | DeletePrivateMetadataKeySpecifier),
		fields?: DeletePrivateMetadataFieldPolicy,
	},
	DigitalContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentKeySpecifier | (() => undefined | DigitalContentKeySpecifier),
		fields?: DigitalContentFieldPolicy,
	},
	DigitalContentCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentCountableConnectionKeySpecifier | (() => undefined | DigitalContentCountableConnectionKeySpecifier),
		fields?: DigitalContentCountableConnectionFieldPolicy,
	},
	DigitalContentCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentCountableEdgeKeySpecifier | (() => undefined | DigitalContentCountableEdgeKeySpecifier),
		fields?: DigitalContentCountableEdgeFieldPolicy,
	},
	DigitalContentCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentCreateKeySpecifier | (() => undefined | DigitalContentCreateKeySpecifier),
		fields?: DigitalContentCreateFieldPolicy,
	},
	DigitalContentDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentDeleteKeySpecifier | (() => undefined | DigitalContentDeleteKeySpecifier),
		fields?: DigitalContentDeleteFieldPolicy,
	},
	DigitalContentUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentUpdateKeySpecifier | (() => undefined | DigitalContentUpdateKeySpecifier),
		fields?: DigitalContentUpdateFieldPolicy,
	},
	DigitalContentUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentUrlKeySpecifier | (() => undefined | DigitalContentUrlKeySpecifier),
		fields?: DigitalContentUrlFieldPolicy,
	},
	DigitalContentUrlCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentUrlCreateKeySpecifier | (() => undefined | DigitalContentUrlCreateKeySpecifier),
		fields?: DigitalContentUrlCreateFieldPolicy,
	},
	DiscountError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountErrorKeySpecifier | (() => undefined | DiscountErrorKeySpecifier),
		fields?: DiscountErrorFieldPolicy,
	},
	Domain?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DomainKeySpecifier | (() => undefined | DomainKeySpecifier),
		fields?: DomainFieldPolicy,
	},
	DraftOrderBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderBulkDeleteKeySpecifier | (() => undefined | DraftOrderBulkDeleteKeySpecifier),
		fields?: DraftOrderBulkDeleteFieldPolicy,
	},
	DraftOrderComplete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderCompleteKeySpecifier | (() => undefined | DraftOrderCompleteKeySpecifier),
		fields?: DraftOrderCompleteFieldPolicy,
	},
	DraftOrderCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderCreateKeySpecifier | (() => undefined | DraftOrderCreateKeySpecifier),
		fields?: DraftOrderCreateFieldPolicy,
	},
	DraftOrderCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderCreatedKeySpecifier | (() => undefined | DraftOrderCreatedKeySpecifier),
		fields?: DraftOrderCreatedFieldPolicy,
	},
	DraftOrderDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderDeleteKeySpecifier | (() => undefined | DraftOrderDeleteKeySpecifier),
		fields?: DraftOrderDeleteFieldPolicy,
	},
	DraftOrderDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderDeletedKeySpecifier | (() => undefined | DraftOrderDeletedKeySpecifier),
		fields?: DraftOrderDeletedFieldPolicy,
	},
	DraftOrderLinesBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderLinesBulkDeleteKeySpecifier | (() => undefined | DraftOrderLinesBulkDeleteKeySpecifier),
		fields?: DraftOrderLinesBulkDeleteFieldPolicy,
	},
	DraftOrderUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderUpdateKeySpecifier | (() => undefined | DraftOrderUpdateKeySpecifier),
		fields?: DraftOrderUpdateFieldPolicy,
	},
	DraftOrderUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderUpdatedKeySpecifier | (() => undefined | DraftOrderUpdatedKeySpecifier),
		fields?: DraftOrderUpdatedFieldPolicy,
	},
	EventDelivery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventDeliveryKeySpecifier | (() => undefined | EventDeliveryKeySpecifier),
		fields?: EventDeliveryFieldPolicy,
	},
	EventDeliveryAttempt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventDeliveryAttemptKeySpecifier | (() => undefined | EventDeliveryAttemptKeySpecifier),
		fields?: EventDeliveryAttemptFieldPolicy,
	},
	EventDeliveryAttemptCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventDeliveryAttemptCountableConnectionKeySpecifier | (() => undefined | EventDeliveryAttemptCountableConnectionKeySpecifier),
		fields?: EventDeliveryAttemptCountableConnectionFieldPolicy,
	},
	EventDeliveryAttemptCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventDeliveryAttemptCountableEdgeKeySpecifier | (() => undefined | EventDeliveryAttemptCountableEdgeKeySpecifier),
		fields?: EventDeliveryAttemptCountableEdgeFieldPolicy,
	},
	EventDeliveryCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventDeliveryCountableConnectionKeySpecifier | (() => undefined | EventDeliveryCountableConnectionKeySpecifier),
		fields?: EventDeliveryCountableConnectionFieldPolicy,
	},
	EventDeliveryCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventDeliveryCountableEdgeKeySpecifier | (() => undefined | EventDeliveryCountableEdgeKeySpecifier),
		fields?: EventDeliveryCountableEdgeFieldPolicy,
	},
	EventDeliveryRetry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventDeliveryRetryKeySpecifier | (() => undefined | EventDeliveryRetryKeySpecifier),
		fields?: EventDeliveryRetryFieldPolicy,
	},
	ExportError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportErrorKeySpecifier | (() => undefined | ExportErrorKeySpecifier),
		fields?: ExportErrorFieldPolicy,
	},
	ExportEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportEventKeySpecifier | (() => undefined | ExportEventKeySpecifier),
		fields?: ExportEventFieldPolicy,
	},
	ExportFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportFileKeySpecifier | (() => undefined | ExportFileKeySpecifier),
		fields?: ExportFileFieldPolicy,
	},
	ExportFileCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportFileCountableConnectionKeySpecifier | (() => undefined | ExportFileCountableConnectionKeySpecifier),
		fields?: ExportFileCountableConnectionFieldPolicy,
	},
	ExportFileCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportFileCountableEdgeKeySpecifier | (() => undefined | ExportFileCountableEdgeKeySpecifier),
		fields?: ExportFileCountableEdgeFieldPolicy,
	},
	ExportGiftCards?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportGiftCardsKeySpecifier | (() => undefined | ExportGiftCardsKeySpecifier),
		fields?: ExportGiftCardsFieldPolicy,
	},
	ExportProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportProductsKeySpecifier | (() => undefined | ExportProductsKeySpecifier),
		fields?: ExportProductsFieldPolicy,
	},
	ExternalAuthentication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalAuthenticationKeySpecifier | (() => undefined | ExternalAuthenticationKeySpecifier),
		fields?: ExternalAuthenticationFieldPolicy,
	},
	ExternalAuthenticationUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalAuthenticationUrlKeySpecifier | (() => undefined | ExternalAuthenticationUrlKeySpecifier),
		fields?: ExternalAuthenticationUrlFieldPolicy,
	},
	ExternalLogout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalLogoutKeySpecifier | (() => undefined | ExternalLogoutKeySpecifier),
		fields?: ExternalLogoutFieldPolicy,
	},
	ExternalNotificationError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalNotificationErrorKeySpecifier | (() => undefined | ExternalNotificationErrorKeySpecifier),
		fields?: ExternalNotificationErrorFieldPolicy,
	},
	ExternalNotificationTrigger?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalNotificationTriggerKeySpecifier | (() => undefined | ExternalNotificationTriggerKeySpecifier),
		fields?: ExternalNotificationTriggerFieldPolicy,
	},
	ExternalObtainAccessTokens?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalObtainAccessTokensKeySpecifier | (() => undefined | ExternalObtainAccessTokensKeySpecifier),
		fields?: ExternalObtainAccessTokensFieldPolicy,
	},
	ExternalRefresh?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalRefreshKeySpecifier | (() => undefined | ExternalRefreshKeySpecifier),
		fields?: ExternalRefreshFieldPolicy,
	},
	ExternalVerify?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalVerifyKeySpecifier | (() => undefined | ExternalVerifyKeySpecifier),
		fields?: ExternalVerifyFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	FileUpload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileUploadKeySpecifier | (() => undefined | FileUploadKeySpecifier),
		fields?: FileUploadFieldPolicy,
	},
	Fulfillment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentKeySpecifier | (() => undefined | FulfillmentKeySpecifier),
		fields?: FulfillmentFieldPolicy,
	},
	FulfillmentApprove?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentApproveKeySpecifier | (() => undefined | FulfillmentApproveKeySpecifier),
		fields?: FulfillmentApproveFieldPolicy,
	},
	FulfillmentCancel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentCancelKeySpecifier | (() => undefined | FulfillmentCancelKeySpecifier),
		fields?: FulfillmentCancelFieldPolicy,
	},
	FulfillmentCanceled?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentCanceledKeySpecifier | (() => undefined | FulfillmentCanceledKeySpecifier),
		fields?: FulfillmentCanceledFieldPolicy,
	},
	FulfillmentCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentCreatedKeySpecifier | (() => undefined | FulfillmentCreatedKeySpecifier),
		fields?: FulfillmentCreatedFieldPolicy,
	},
	FulfillmentLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentLineKeySpecifier | (() => undefined | FulfillmentLineKeySpecifier),
		fields?: FulfillmentLineFieldPolicy,
	},
	FulfillmentRefundProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentRefundProductsKeySpecifier | (() => undefined | FulfillmentRefundProductsKeySpecifier),
		fields?: FulfillmentRefundProductsFieldPolicy,
	},
	FulfillmentReturnProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentReturnProductsKeySpecifier | (() => undefined | FulfillmentReturnProductsKeySpecifier),
		fields?: FulfillmentReturnProductsFieldPolicy,
	},
	FulfillmentUpdateTracking?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentUpdateTrackingKeySpecifier | (() => undefined | FulfillmentUpdateTrackingKeySpecifier),
		fields?: FulfillmentUpdateTrackingFieldPolicy,
	},
	GatewayConfigLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GatewayConfigLineKeySpecifier | (() => undefined | GatewayConfigLineKeySpecifier),
		fields?: GatewayConfigLineFieldPolicy,
	},
	GiftCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardKeySpecifier | (() => undefined | GiftCardKeySpecifier),
		fields?: GiftCardFieldPolicy,
	},
	GiftCardActivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardActivateKeySpecifier | (() => undefined | GiftCardActivateKeySpecifier),
		fields?: GiftCardActivateFieldPolicy,
	},
	GiftCardAddNote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardAddNoteKeySpecifier | (() => undefined | GiftCardAddNoteKeySpecifier),
		fields?: GiftCardAddNoteFieldPolicy,
	},
	GiftCardBulkActivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardBulkActivateKeySpecifier | (() => undefined | GiftCardBulkActivateKeySpecifier),
		fields?: GiftCardBulkActivateFieldPolicy,
	},
	GiftCardBulkCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardBulkCreateKeySpecifier | (() => undefined | GiftCardBulkCreateKeySpecifier),
		fields?: GiftCardBulkCreateFieldPolicy,
	},
	GiftCardBulkDeactivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardBulkDeactivateKeySpecifier | (() => undefined | GiftCardBulkDeactivateKeySpecifier),
		fields?: GiftCardBulkDeactivateFieldPolicy,
	},
	GiftCardBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardBulkDeleteKeySpecifier | (() => undefined | GiftCardBulkDeleteKeySpecifier),
		fields?: GiftCardBulkDeleteFieldPolicy,
	},
	GiftCardCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardCountableConnectionKeySpecifier | (() => undefined | GiftCardCountableConnectionKeySpecifier),
		fields?: GiftCardCountableConnectionFieldPolicy,
	},
	GiftCardCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardCountableEdgeKeySpecifier | (() => undefined | GiftCardCountableEdgeKeySpecifier),
		fields?: GiftCardCountableEdgeFieldPolicy,
	},
	GiftCardCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardCreateKeySpecifier | (() => undefined | GiftCardCreateKeySpecifier),
		fields?: GiftCardCreateFieldPolicy,
	},
	GiftCardCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardCreatedKeySpecifier | (() => undefined | GiftCardCreatedKeySpecifier),
		fields?: GiftCardCreatedFieldPolicy,
	},
	GiftCardDeactivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardDeactivateKeySpecifier | (() => undefined | GiftCardDeactivateKeySpecifier),
		fields?: GiftCardDeactivateFieldPolicy,
	},
	GiftCardDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardDeleteKeySpecifier | (() => undefined | GiftCardDeleteKeySpecifier),
		fields?: GiftCardDeleteFieldPolicy,
	},
	GiftCardDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardDeletedKeySpecifier | (() => undefined | GiftCardDeletedKeySpecifier),
		fields?: GiftCardDeletedFieldPolicy,
	},
	GiftCardError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardErrorKeySpecifier | (() => undefined | GiftCardErrorKeySpecifier),
		fields?: GiftCardErrorFieldPolicy,
	},
	GiftCardEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardEventKeySpecifier | (() => undefined | GiftCardEventKeySpecifier),
		fields?: GiftCardEventFieldPolicy,
	},
	GiftCardEventBalance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardEventBalanceKeySpecifier | (() => undefined | GiftCardEventBalanceKeySpecifier),
		fields?: GiftCardEventBalanceFieldPolicy,
	},
	GiftCardResend?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardResendKeySpecifier | (() => undefined | GiftCardResendKeySpecifier),
		fields?: GiftCardResendFieldPolicy,
	},
	GiftCardSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardSettingsKeySpecifier | (() => undefined | GiftCardSettingsKeySpecifier),
		fields?: GiftCardSettingsFieldPolicy,
	},
	GiftCardSettingsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardSettingsErrorKeySpecifier | (() => undefined | GiftCardSettingsErrorKeySpecifier),
		fields?: GiftCardSettingsErrorFieldPolicy,
	},
	GiftCardSettingsUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardSettingsUpdateKeySpecifier | (() => undefined | GiftCardSettingsUpdateKeySpecifier),
		fields?: GiftCardSettingsUpdateFieldPolicy,
	},
	GiftCardStatusChanged?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardStatusChangedKeySpecifier | (() => undefined | GiftCardStatusChangedKeySpecifier),
		fields?: GiftCardStatusChangedFieldPolicy,
	},
	GiftCardTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardTagKeySpecifier | (() => undefined | GiftCardTagKeySpecifier),
		fields?: GiftCardTagFieldPolicy,
	},
	GiftCardTagCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardTagCountableConnectionKeySpecifier | (() => undefined | GiftCardTagCountableConnectionKeySpecifier),
		fields?: GiftCardTagCountableConnectionFieldPolicy,
	},
	GiftCardTagCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardTagCountableEdgeKeySpecifier | (() => undefined | GiftCardTagCountableEdgeKeySpecifier),
		fields?: GiftCardTagCountableEdgeFieldPolicy,
	},
	GiftCardUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardUpdateKeySpecifier | (() => undefined | GiftCardUpdateKeySpecifier),
		fields?: GiftCardUpdateFieldPolicy,
	},
	GiftCardUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardUpdatedKeySpecifier | (() => undefined | GiftCardUpdatedKeySpecifier),
		fields?: GiftCardUpdatedFieldPolicy,
	},
	Group?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupKeySpecifier | (() => undefined | GroupKeySpecifier),
		fields?: GroupFieldPolicy,
	},
	GroupCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupCountableConnectionKeySpecifier | (() => undefined | GroupCountableConnectionKeySpecifier),
		fields?: GroupCountableConnectionFieldPolicy,
	},
	GroupCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupCountableEdgeKeySpecifier | (() => undefined | GroupCountableEdgeKeySpecifier),
		fields?: GroupCountableEdgeFieldPolicy,
	},
	Image?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageKeySpecifier | (() => undefined | ImageKeySpecifier),
		fields?: ImageFieldPolicy,
	},
	Invoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceKeySpecifier | (() => undefined | InvoiceKeySpecifier),
		fields?: InvoiceFieldPolicy,
	},
	InvoiceCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceCreateKeySpecifier | (() => undefined | InvoiceCreateKeySpecifier),
		fields?: InvoiceCreateFieldPolicy,
	},
	InvoiceDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceDeleteKeySpecifier | (() => undefined | InvoiceDeleteKeySpecifier),
		fields?: InvoiceDeleteFieldPolicy,
	},
	InvoiceDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceDeletedKeySpecifier | (() => undefined | InvoiceDeletedKeySpecifier),
		fields?: InvoiceDeletedFieldPolicy,
	},
	InvoiceError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceErrorKeySpecifier | (() => undefined | InvoiceErrorKeySpecifier),
		fields?: InvoiceErrorFieldPolicy,
	},
	InvoiceRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceRequestKeySpecifier | (() => undefined | InvoiceRequestKeySpecifier),
		fields?: InvoiceRequestFieldPolicy,
	},
	InvoiceRequestDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceRequestDeleteKeySpecifier | (() => undefined | InvoiceRequestDeleteKeySpecifier),
		fields?: InvoiceRequestDeleteFieldPolicy,
	},
	InvoiceRequested?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceRequestedKeySpecifier | (() => undefined | InvoiceRequestedKeySpecifier),
		fields?: InvoiceRequestedFieldPolicy,
	},
	InvoiceSendNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceSendNotificationKeySpecifier | (() => undefined | InvoiceSendNotificationKeySpecifier),
		fields?: InvoiceSendNotificationFieldPolicy,
	},
	InvoiceSent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceSentKeySpecifier | (() => undefined | InvoiceSentKeySpecifier),
		fields?: InvoiceSentFieldPolicy,
	},
	InvoiceUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceUpdateKeySpecifier | (() => undefined | InvoiceUpdateKeySpecifier),
		fields?: InvoiceUpdateFieldPolicy,
	},
	Job?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobKeySpecifier | (() => undefined | JobKeySpecifier),
		fields?: JobFieldPolicy,
	},
	LanguageDisplay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageDisplayKeySpecifier | (() => undefined | LanguageDisplayKeySpecifier),
		fields?: LanguageDisplayFieldPolicy,
	},
	LimitInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LimitInfoKeySpecifier | (() => undefined | LimitInfoKeySpecifier),
		fields?: LimitInfoFieldPolicy,
	},
	Limits?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LimitsKeySpecifier | (() => undefined | LimitsKeySpecifier),
		fields?: LimitsFieldPolicy,
	},
	Manifest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ManifestKeySpecifier | (() => undefined | ManifestKeySpecifier),
		fields?: ManifestFieldPolicy,
	},
	Margin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarginKeySpecifier | (() => undefined | MarginKeySpecifier),
		fields?: MarginFieldPolicy,
	},
	Menu?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuKeySpecifier | (() => undefined | MenuKeySpecifier),
		fields?: MenuFieldPolicy,
	},
	MenuBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuBulkDeleteKeySpecifier | (() => undefined | MenuBulkDeleteKeySpecifier),
		fields?: MenuBulkDeleteFieldPolicy,
	},
	MenuCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuCountableConnectionKeySpecifier | (() => undefined | MenuCountableConnectionKeySpecifier),
		fields?: MenuCountableConnectionFieldPolicy,
	},
	MenuCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuCountableEdgeKeySpecifier | (() => undefined | MenuCountableEdgeKeySpecifier),
		fields?: MenuCountableEdgeFieldPolicy,
	},
	MenuCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuCreateKeySpecifier | (() => undefined | MenuCreateKeySpecifier),
		fields?: MenuCreateFieldPolicy,
	},
	MenuDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuDeleteKeySpecifier | (() => undefined | MenuDeleteKeySpecifier),
		fields?: MenuDeleteFieldPolicy,
	},
	MenuError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuErrorKeySpecifier | (() => undefined | MenuErrorKeySpecifier),
		fields?: MenuErrorFieldPolicy,
	},
	MenuItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemKeySpecifier | (() => undefined | MenuItemKeySpecifier),
		fields?: MenuItemFieldPolicy,
	},
	MenuItemBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemBulkDeleteKeySpecifier | (() => undefined | MenuItemBulkDeleteKeySpecifier),
		fields?: MenuItemBulkDeleteFieldPolicy,
	},
	MenuItemCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemCountableConnectionKeySpecifier | (() => undefined | MenuItemCountableConnectionKeySpecifier),
		fields?: MenuItemCountableConnectionFieldPolicy,
	},
	MenuItemCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemCountableEdgeKeySpecifier | (() => undefined | MenuItemCountableEdgeKeySpecifier),
		fields?: MenuItemCountableEdgeFieldPolicy,
	},
	MenuItemCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemCreateKeySpecifier | (() => undefined | MenuItemCreateKeySpecifier),
		fields?: MenuItemCreateFieldPolicy,
	},
	MenuItemDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemDeleteKeySpecifier | (() => undefined | MenuItemDeleteKeySpecifier),
		fields?: MenuItemDeleteFieldPolicy,
	},
	MenuItemMove?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemMoveKeySpecifier | (() => undefined | MenuItemMoveKeySpecifier),
		fields?: MenuItemMoveFieldPolicy,
	},
	MenuItemTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemTranslatableContentKeySpecifier | (() => undefined | MenuItemTranslatableContentKeySpecifier),
		fields?: MenuItemTranslatableContentFieldPolicy,
	},
	MenuItemTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemTranslateKeySpecifier | (() => undefined | MenuItemTranslateKeySpecifier),
		fields?: MenuItemTranslateFieldPolicy,
	},
	MenuItemTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemTranslationKeySpecifier | (() => undefined | MenuItemTranslationKeySpecifier),
		fields?: MenuItemTranslationFieldPolicy,
	},
	MenuItemUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemUpdateKeySpecifier | (() => undefined | MenuItemUpdateKeySpecifier),
		fields?: MenuItemUpdateFieldPolicy,
	},
	MenuUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuUpdateKeySpecifier | (() => undefined | MenuUpdateKeySpecifier),
		fields?: MenuUpdateFieldPolicy,
	},
	MetadataError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataErrorKeySpecifier | (() => undefined | MetadataErrorKeySpecifier),
		fields?: MetadataErrorFieldPolicy,
	},
	MetadataItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataItemKeySpecifier | (() => undefined | MetadataItemKeySpecifier),
		fields?: MetadataItemFieldPolicy,
	},
	Money?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyKeySpecifier | (() => undefined | MoneyKeySpecifier),
		fields?: MoneyFieldPolicy,
	},
	MoneyRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyRangeKeySpecifier | (() => undefined | MoneyRangeKeySpecifier),
		fields?: MoneyRangeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	ObjectWithMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ObjectWithMetadataKeySpecifier | (() => undefined | ObjectWithMetadataKeySpecifier),
		fields?: ObjectWithMetadataFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderAddNote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderAddNoteKeySpecifier | (() => undefined | OrderAddNoteKeySpecifier),
		fields?: OrderAddNoteFieldPolicy,
	},
	OrderBulkCancel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderBulkCancelKeySpecifier | (() => undefined | OrderBulkCancelKeySpecifier),
		fields?: OrderBulkCancelFieldPolicy,
	},
	OrderCancel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCancelKeySpecifier | (() => undefined | OrderCancelKeySpecifier),
		fields?: OrderCancelFieldPolicy,
	},
	OrderCancelled?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCancelledKeySpecifier | (() => undefined | OrderCancelledKeySpecifier),
		fields?: OrderCancelledFieldPolicy,
	},
	OrderCapture?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCaptureKeySpecifier | (() => undefined | OrderCaptureKeySpecifier),
		fields?: OrderCaptureFieldPolicy,
	},
	OrderConfirm?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderConfirmKeySpecifier | (() => undefined | OrderConfirmKeySpecifier),
		fields?: OrderConfirmFieldPolicy,
	},
	OrderConfirmed?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderConfirmedKeySpecifier | (() => undefined | OrderConfirmedKeySpecifier),
		fields?: OrderConfirmedFieldPolicy,
	},
	OrderCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCountableConnectionKeySpecifier | (() => undefined | OrderCountableConnectionKeySpecifier),
		fields?: OrderCountableConnectionFieldPolicy,
	},
	OrderCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCountableEdgeKeySpecifier | (() => undefined | OrderCountableEdgeKeySpecifier),
		fields?: OrderCountableEdgeFieldPolicy,
	},
	OrderCreateFromCheckout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCreateFromCheckoutKeySpecifier | (() => undefined | OrderCreateFromCheckoutKeySpecifier),
		fields?: OrderCreateFromCheckoutFieldPolicy,
	},
	OrderCreateFromCheckoutError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCreateFromCheckoutErrorKeySpecifier | (() => undefined | OrderCreateFromCheckoutErrorKeySpecifier),
		fields?: OrderCreateFromCheckoutErrorFieldPolicy,
	},
	OrderCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCreatedKeySpecifier | (() => undefined | OrderCreatedKeySpecifier),
		fields?: OrderCreatedFieldPolicy,
	},
	OrderDiscount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderDiscountKeySpecifier | (() => undefined | OrderDiscountKeySpecifier),
		fields?: OrderDiscountFieldPolicy,
	},
	OrderDiscountAdd?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderDiscountAddKeySpecifier | (() => undefined | OrderDiscountAddKeySpecifier),
		fields?: OrderDiscountAddFieldPolicy,
	},
	OrderDiscountDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderDiscountDeleteKeySpecifier | (() => undefined | OrderDiscountDeleteKeySpecifier),
		fields?: OrderDiscountDeleteFieldPolicy,
	},
	OrderDiscountUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderDiscountUpdateKeySpecifier | (() => undefined | OrderDiscountUpdateKeySpecifier),
		fields?: OrderDiscountUpdateFieldPolicy,
	},
	OrderError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderErrorKeySpecifier | (() => undefined | OrderErrorKeySpecifier),
		fields?: OrderErrorFieldPolicy,
	},
	OrderEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEventKeySpecifier | (() => undefined | OrderEventKeySpecifier),
		fields?: OrderEventFieldPolicy,
	},
	OrderEventCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEventCountableConnectionKeySpecifier | (() => undefined | OrderEventCountableConnectionKeySpecifier),
		fields?: OrderEventCountableConnectionFieldPolicy,
	},
	OrderEventCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEventCountableEdgeKeySpecifier | (() => undefined | OrderEventCountableEdgeKeySpecifier),
		fields?: OrderEventCountableEdgeFieldPolicy,
	},
	OrderEventDiscountObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEventDiscountObjectKeySpecifier | (() => undefined | OrderEventDiscountObjectKeySpecifier),
		fields?: OrderEventDiscountObjectFieldPolicy,
	},
	OrderEventOrderLineObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEventOrderLineObjectKeySpecifier | (() => undefined | OrderEventOrderLineObjectKeySpecifier),
		fields?: OrderEventOrderLineObjectFieldPolicy,
	},
	OrderFulfill?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderFulfillKeySpecifier | (() => undefined | OrderFulfillKeySpecifier),
		fields?: OrderFulfillFieldPolicy,
	},
	OrderFulfilled?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderFulfilledKeySpecifier | (() => undefined | OrderFulfilledKeySpecifier),
		fields?: OrderFulfilledFieldPolicy,
	},
	OrderFullyPaid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderFullyPaidKeySpecifier | (() => undefined | OrderFullyPaidKeySpecifier),
		fields?: OrderFullyPaidFieldPolicy,
	},
	OrderLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineKeySpecifier | (() => undefined | OrderLineKeySpecifier),
		fields?: OrderLineFieldPolicy,
	},
	OrderLineDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineDeleteKeySpecifier | (() => undefined | OrderLineDeleteKeySpecifier),
		fields?: OrderLineDeleteFieldPolicy,
	},
	OrderLineDiscountRemove?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineDiscountRemoveKeySpecifier | (() => undefined | OrderLineDiscountRemoveKeySpecifier),
		fields?: OrderLineDiscountRemoveFieldPolicy,
	},
	OrderLineDiscountUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineDiscountUpdateKeySpecifier | (() => undefined | OrderLineDiscountUpdateKeySpecifier),
		fields?: OrderLineDiscountUpdateFieldPolicy,
	},
	OrderLineUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineUpdateKeySpecifier | (() => undefined | OrderLineUpdateKeySpecifier),
		fields?: OrderLineUpdateFieldPolicy,
	},
	OrderLinesCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLinesCreateKeySpecifier | (() => undefined | OrderLinesCreateKeySpecifier),
		fields?: OrderLinesCreateFieldPolicy,
	},
	OrderMarkAsPaid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderMarkAsPaidKeySpecifier | (() => undefined | OrderMarkAsPaidKeySpecifier),
		fields?: OrderMarkAsPaidFieldPolicy,
	},
	OrderRefund?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderRefundKeySpecifier | (() => undefined | OrderRefundKeySpecifier),
		fields?: OrderRefundFieldPolicy,
	},
	OrderSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderSettingsKeySpecifier | (() => undefined | OrderSettingsKeySpecifier),
		fields?: OrderSettingsFieldPolicy,
	},
	OrderSettingsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderSettingsErrorKeySpecifier | (() => undefined | OrderSettingsErrorKeySpecifier),
		fields?: OrderSettingsErrorFieldPolicy,
	},
	OrderSettingsUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderSettingsUpdateKeySpecifier | (() => undefined | OrderSettingsUpdateKeySpecifier),
		fields?: OrderSettingsUpdateFieldPolicy,
	},
	OrderUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderUpdateKeySpecifier | (() => undefined | OrderUpdateKeySpecifier),
		fields?: OrderUpdateFieldPolicy,
	},
	OrderUpdateShipping?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderUpdateShippingKeySpecifier | (() => undefined | OrderUpdateShippingKeySpecifier),
		fields?: OrderUpdateShippingFieldPolicy,
	},
	OrderUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderUpdatedKeySpecifier | (() => undefined | OrderUpdatedKeySpecifier),
		fields?: OrderUpdatedFieldPolicy,
	},
	OrderVoid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderVoidKeySpecifier | (() => undefined | OrderVoidKeySpecifier),
		fields?: OrderVoidFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	PageAttributeAssign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageAttributeAssignKeySpecifier | (() => undefined | PageAttributeAssignKeySpecifier),
		fields?: PageAttributeAssignFieldPolicy,
	},
	PageAttributeUnassign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageAttributeUnassignKeySpecifier | (() => undefined | PageAttributeUnassignKeySpecifier),
		fields?: PageAttributeUnassignFieldPolicy,
	},
	PageBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageBulkDeleteKeySpecifier | (() => undefined | PageBulkDeleteKeySpecifier),
		fields?: PageBulkDeleteFieldPolicy,
	},
	PageBulkPublish?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageBulkPublishKeySpecifier | (() => undefined | PageBulkPublishKeySpecifier),
		fields?: PageBulkPublishFieldPolicy,
	},
	PageCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageCountableConnectionKeySpecifier | (() => undefined | PageCountableConnectionKeySpecifier),
		fields?: PageCountableConnectionFieldPolicy,
	},
	PageCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageCountableEdgeKeySpecifier | (() => undefined | PageCountableEdgeKeySpecifier),
		fields?: PageCountableEdgeFieldPolicy,
	},
	PageCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageCreateKeySpecifier | (() => undefined | PageCreateKeySpecifier),
		fields?: PageCreateFieldPolicy,
	},
	PageCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageCreatedKeySpecifier | (() => undefined | PageCreatedKeySpecifier),
		fields?: PageCreatedFieldPolicy,
	},
	PageDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageDeleteKeySpecifier | (() => undefined | PageDeleteKeySpecifier),
		fields?: PageDeleteFieldPolicy,
	},
	PageDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageDeletedKeySpecifier | (() => undefined | PageDeletedKeySpecifier),
		fields?: PageDeletedFieldPolicy,
	},
	PageError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageErrorKeySpecifier | (() => undefined | PageErrorKeySpecifier),
		fields?: PageErrorFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PageReorderAttributeValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageReorderAttributeValuesKeySpecifier | (() => undefined | PageReorderAttributeValuesKeySpecifier),
		fields?: PageReorderAttributeValuesFieldPolicy,
	},
	PageTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTranslatableContentKeySpecifier | (() => undefined | PageTranslatableContentKeySpecifier),
		fields?: PageTranslatableContentFieldPolicy,
	},
	PageTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTranslateKeySpecifier | (() => undefined | PageTranslateKeySpecifier),
		fields?: PageTranslateFieldPolicy,
	},
	PageTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTranslationKeySpecifier | (() => undefined | PageTranslationKeySpecifier),
		fields?: PageTranslationFieldPolicy,
	},
	PageType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTypeKeySpecifier | (() => undefined | PageTypeKeySpecifier),
		fields?: PageTypeFieldPolicy,
	},
	PageTypeBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTypeBulkDeleteKeySpecifier | (() => undefined | PageTypeBulkDeleteKeySpecifier),
		fields?: PageTypeBulkDeleteFieldPolicy,
	},
	PageTypeCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTypeCountableConnectionKeySpecifier | (() => undefined | PageTypeCountableConnectionKeySpecifier),
		fields?: PageTypeCountableConnectionFieldPolicy,
	},
	PageTypeCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTypeCountableEdgeKeySpecifier | (() => undefined | PageTypeCountableEdgeKeySpecifier),
		fields?: PageTypeCountableEdgeFieldPolicy,
	},
	PageTypeCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTypeCreateKeySpecifier | (() => undefined | PageTypeCreateKeySpecifier),
		fields?: PageTypeCreateFieldPolicy,
	},
	PageTypeDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTypeDeleteKeySpecifier | (() => undefined | PageTypeDeleteKeySpecifier),
		fields?: PageTypeDeleteFieldPolicy,
	},
	PageTypeReorderAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTypeReorderAttributesKeySpecifier | (() => undefined | PageTypeReorderAttributesKeySpecifier),
		fields?: PageTypeReorderAttributesFieldPolicy,
	},
	PageTypeUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTypeUpdateKeySpecifier | (() => undefined | PageTypeUpdateKeySpecifier),
		fields?: PageTypeUpdateFieldPolicy,
	},
	PageUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageUpdateKeySpecifier | (() => undefined | PageUpdateKeySpecifier),
		fields?: PageUpdateFieldPolicy,
	},
	PageUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageUpdatedKeySpecifier | (() => undefined | PageUpdatedKeySpecifier),
		fields?: PageUpdatedFieldPolicy,
	},
	PasswordChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordChangeKeySpecifier | (() => undefined | PasswordChangeKeySpecifier),
		fields?: PasswordChangeFieldPolicy,
	},
	Payment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentKeySpecifier | (() => undefined | PaymentKeySpecifier),
		fields?: PaymentFieldPolicy,
	},
	PaymentCapture?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentCaptureKeySpecifier | (() => undefined | PaymentCaptureKeySpecifier),
		fields?: PaymentCaptureFieldPolicy,
	},
	PaymentCheckBalance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentCheckBalanceKeySpecifier | (() => undefined | PaymentCheckBalanceKeySpecifier),
		fields?: PaymentCheckBalanceFieldPolicy,
	},
	PaymentCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentCountableConnectionKeySpecifier | (() => undefined | PaymentCountableConnectionKeySpecifier),
		fields?: PaymentCountableConnectionFieldPolicy,
	},
	PaymentCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentCountableEdgeKeySpecifier | (() => undefined | PaymentCountableEdgeKeySpecifier),
		fields?: PaymentCountableEdgeFieldPolicy,
	},
	PaymentError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentErrorKeySpecifier | (() => undefined | PaymentErrorKeySpecifier),
		fields?: PaymentErrorFieldPolicy,
	},
	PaymentGateway?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentGatewayKeySpecifier | (() => undefined | PaymentGatewayKeySpecifier),
		fields?: PaymentGatewayFieldPolicy,
	},
	PaymentInitialize?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentInitializeKeySpecifier | (() => undefined | PaymentInitializeKeySpecifier),
		fields?: PaymentInitializeFieldPolicy,
	},
	PaymentInitialized?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentInitializedKeySpecifier | (() => undefined | PaymentInitializedKeySpecifier),
		fields?: PaymentInitializedFieldPolicy,
	},
	PaymentRefund?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentRefundKeySpecifier | (() => undefined | PaymentRefundKeySpecifier),
		fields?: PaymentRefundFieldPolicy,
	},
	PaymentSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentSourceKeySpecifier | (() => undefined | PaymentSourceKeySpecifier),
		fields?: PaymentSourceFieldPolicy,
	},
	PaymentVoid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentVoidKeySpecifier | (() => undefined | PaymentVoidKeySpecifier),
		fields?: PaymentVoidFieldPolicy,
	},
	Permission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionKeySpecifier | (() => undefined | PermissionKeySpecifier),
		fields?: PermissionFieldPolicy,
	},
	PermissionGroupCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupCreateKeySpecifier | (() => undefined | PermissionGroupCreateKeySpecifier),
		fields?: PermissionGroupCreateFieldPolicy,
	},
	PermissionGroupDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupDeleteKeySpecifier | (() => undefined | PermissionGroupDeleteKeySpecifier),
		fields?: PermissionGroupDeleteFieldPolicy,
	},
	PermissionGroupError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupErrorKeySpecifier | (() => undefined | PermissionGroupErrorKeySpecifier),
		fields?: PermissionGroupErrorFieldPolicy,
	},
	PermissionGroupUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupUpdateKeySpecifier | (() => undefined | PermissionGroupUpdateKeySpecifier),
		fields?: PermissionGroupUpdateFieldPolicy,
	},
	Plugin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginKeySpecifier | (() => undefined | PluginKeySpecifier),
		fields?: PluginFieldPolicy,
	},
	PluginConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginConfigurationKeySpecifier | (() => undefined | PluginConfigurationKeySpecifier),
		fields?: PluginConfigurationFieldPolicy,
	},
	PluginCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginCountableConnectionKeySpecifier | (() => undefined | PluginCountableConnectionKeySpecifier),
		fields?: PluginCountableConnectionFieldPolicy,
	},
	PluginCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginCountableEdgeKeySpecifier | (() => undefined | PluginCountableEdgeKeySpecifier),
		fields?: PluginCountableEdgeFieldPolicy,
	},
	PluginError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginErrorKeySpecifier | (() => undefined | PluginErrorKeySpecifier),
		fields?: PluginErrorFieldPolicy,
	},
	PluginUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginUpdateKeySpecifier | (() => undefined | PluginUpdateKeySpecifier),
		fields?: PluginUpdateFieldPolicy,
	},
	PreorderData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreorderDataKeySpecifier | (() => undefined | PreorderDataKeySpecifier),
		fields?: PreorderDataFieldPolicy,
	},
	PreorderThreshold?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreorderThresholdKeySpecifier | (() => undefined | PreorderThresholdKeySpecifier),
		fields?: PreorderThresholdFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductAttributeAssign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductAttributeAssignKeySpecifier | (() => undefined | ProductAttributeAssignKeySpecifier),
		fields?: ProductAttributeAssignFieldPolicy,
	},
	ProductAttributeAssignmentUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductAttributeAssignmentUpdateKeySpecifier | (() => undefined | ProductAttributeAssignmentUpdateKeySpecifier),
		fields?: ProductAttributeAssignmentUpdateFieldPolicy,
	},
	ProductAttributeUnassign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductAttributeUnassignKeySpecifier | (() => undefined | ProductAttributeUnassignKeySpecifier),
		fields?: ProductAttributeUnassignFieldPolicy,
	},
	ProductBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductBulkDeleteKeySpecifier | (() => undefined | ProductBulkDeleteKeySpecifier),
		fields?: ProductBulkDeleteFieldPolicy,
	},
	ProductChannelListing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductChannelListingKeySpecifier | (() => undefined | ProductChannelListingKeySpecifier),
		fields?: ProductChannelListingFieldPolicy,
	},
	ProductChannelListingError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductChannelListingErrorKeySpecifier | (() => undefined | ProductChannelListingErrorKeySpecifier),
		fields?: ProductChannelListingErrorFieldPolicy,
	},
	ProductChannelListingUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductChannelListingUpdateKeySpecifier | (() => undefined | ProductChannelListingUpdateKeySpecifier),
		fields?: ProductChannelListingUpdateFieldPolicy,
	},
	ProductCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCountableConnectionKeySpecifier | (() => undefined | ProductCountableConnectionKeySpecifier),
		fields?: ProductCountableConnectionFieldPolicy,
	},
	ProductCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCountableEdgeKeySpecifier | (() => undefined | ProductCountableEdgeKeySpecifier),
		fields?: ProductCountableEdgeFieldPolicy,
	},
	ProductCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCreateKeySpecifier | (() => undefined | ProductCreateKeySpecifier),
		fields?: ProductCreateFieldPolicy,
	},
	ProductCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCreatedKeySpecifier | (() => undefined | ProductCreatedKeySpecifier),
		fields?: ProductCreatedFieldPolicy,
	},
	ProductDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDeleteKeySpecifier | (() => undefined | ProductDeleteKeySpecifier),
		fields?: ProductDeleteFieldPolicy,
	},
	ProductDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDeletedKeySpecifier | (() => undefined | ProductDeletedKeySpecifier),
		fields?: ProductDeletedFieldPolicy,
	},
	ProductError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductErrorKeySpecifier | (() => undefined | ProductErrorKeySpecifier),
		fields?: ProductErrorFieldPolicy,
	},
	ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier),
		fields?: ProductImageFieldPolicy,
	},
	ProductMedia?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaKeySpecifier | (() => undefined | ProductMediaKeySpecifier),
		fields?: ProductMediaFieldPolicy,
	},
	ProductMediaBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaBulkDeleteKeySpecifier | (() => undefined | ProductMediaBulkDeleteKeySpecifier),
		fields?: ProductMediaBulkDeleteFieldPolicy,
	},
	ProductMediaCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaCreateKeySpecifier | (() => undefined | ProductMediaCreateKeySpecifier),
		fields?: ProductMediaCreateFieldPolicy,
	},
	ProductMediaDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaDeleteKeySpecifier | (() => undefined | ProductMediaDeleteKeySpecifier),
		fields?: ProductMediaDeleteFieldPolicy,
	},
	ProductMediaReorder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaReorderKeySpecifier | (() => undefined | ProductMediaReorderKeySpecifier),
		fields?: ProductMediaReorderFieldPolicy,
	},
	ProductMediaUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaUpdateKeySpecifier | (() => undefined | ProductMediaUpdateKeySpecifier),
		fields?: ProductMediaUpdateFieldPolicy,
	},
	ProductPricingInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPricingInfoKeySpecifier | (() => undefined | ProductPricingInfoKeySpecifier),
		fields?: ProductPricingInfoFieldPolicy,
	},
	ProductReorderAttributeValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReorderAttributeValuesKeySpecifier | (() => undefined | ProductReorderAttributeValuesKeySpecifier),
		fields?: ProductReorderAttributeValuesFieldPolicy,
	},
	ProductTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTranslatableContentKeySpecifier | (() => undefined | ProductTranslatableContentKeySpecifier),
		fields?: ProductTranslatableContentFieldPolicy,
	},
	ProductTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTranslateKeySpecifier | (() => undefined | ProductTranslateKeySpecifier),
		fields?: ProductTranslateFieldPolicy,
	},
	ProductTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTranslationKeySpecifier | (() => undefined | ProductTranslationKeySpecifier),
		fields?: ProductTranslationFieldPolicy,
	},
	ProductType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeKeySpecifier | (() => undefined | ProductTypeKeySpecifier),
		fields?: ProductTypeFieldPolicy,
	},
	ProductTypeBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeBulkDeleteKeySpecifier | (() => undefined | ProductTypeBulkDeleteKeySpecifier),
		fields?: ProductTypeBulkDeleteFieldPolicy,
	},
	ProductTypeCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeCountableConnectionKeySpecifier | (() => undefined | ProductTypeCountableConnectionKeySpecifier),
		fields?: ProductTypeCountableConnectionFieldPolicy,
	},
	ProductTypeCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeCountableEdgeKeySpecifier | (() => undefined | ProductTypeCountableEdgeKeySpecifier),
		fields?: ProductTypeCountableEdgeFieldPolicy,
	},
	ProductTypeCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeCreateKeySpecifier | (() => undefined | ProductTypeCreateKeySpecifier),
		fields?: ProductTypeCreateFieldPolicy,
	},
	ProductTypeDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeDeleteKeySpecifier | (() => undefined | ProductTypeDeleteKeySpecifier),
		fields?: ProductTypeDeleteFieldPolicy,
	},
	ProductTypeReorderAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeReorderAttributesKeySpecifier | (() => undefined | ProductTypeReorderAttributesKeySpecifier),
		fields?: ProductTypeReorderAttributesFieldPolicy,
	},
	ProductTypeUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeUpdateKeySpecifier | (() => undefined | ProductTypeUpdateKeySpecifier),
		fields?: ProductTypeUpdateFieldPolicy,
	},
	ProductUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductUpdateKeySpecifier | (() => undefined | ProductUpdateKeySpecifier),
		fields?: ProductUpdateFieldPolicy,
	},
	ProductUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductUpdatedKeySpecifier | (() => undefined | ProductUpdatedKeySpecifier),
		fields?: ProductUpdatedFieldPolicy,
	},
	ProductVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantKeySpecifier | (() => undefined | ProductVariantKeySpecifier),
		fields?: ProductVariantFieldPolicy,
	},
	ProductVariantBackInStock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantBackInStockKeySpecifier | (() => undefined | ProductVariantBackInStockKeySpecifier),
		fields?: ProductVariantBackInStockFieldPolicy,
	},
	ProductVariantBulkCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantBulkCreateKeySpecifier | (() => undefined | ProductVariantBulkCreateKeySpecifier),
		fields?: ProductVariantBulkCreateFieldPolicy,
	},
	ProductVariantBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantBulkDeleteKeySpecifier | (() => undefined | ProductVariantBulkDeleteKeySpecifier),
		fields?: ProductVariantBulkDeleteFieldPolicy,
	},
	ProductVariantChannelListing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantChannelListingKeySpecifier | (() => undefined | ProductVariantChannelListingKeySpecifier),
		fields?: ProductVariantChannelListingFieldPolicy,
	},
	ProductVariantChannelListingUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantChannelListingUpdateKeySpecifier | (() => undefined | ProductVariantChannelListingUpdateKeySpecifier),
		fields?: ProductVariantChannelListingUpdateFieldPolicy,
	},
	ProductVariantCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantCountableConnectionKeySpecifier | (() => undefined | ProductVariantCountableConnectionKeySpecifier),
		fields?: ProductVariantCountableConnectionFieldPolicy,
	},
	ProductVariantCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantCountableEdgeKeySpecifier | (() => undefined | ProductVariantCountableEdgeKeySpecifier),
		fields?: ProductVariantCountableEdgeFieldPolicy,
	},
	ProductVariantCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantCreateKeySpecifier | (() => undefined | ProductVariantCreateKeySpecifier),
		fields?: ProductVariantCreateFieldPolicy,
	},
	ProductVariantCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantCreatedKeySpecifier | (() => undefined | ProductVariantCreatedKeySpecifier),
		fields?: ProductVariantCreatedFieldPolicy,
	},
	ProductVariantDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantDeleteKeySpecifier | (() => undefined | ProductVariantDeleteKeySpecifier),
		fields?: ProductVariantDeleteFieldPolicy,
	},
	ProductVariantDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantDeletedKeySpecifier | (() => undefined | ProductVariantDeletedKeySpecifier),
		fields?: ProductVariantDeletedFieldPolicy,
	},
	ProductVariantOutOfStock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantOutOfStockKeySpecifier | (() => undefined | ProductVariantOutOfStockKeySpecifier),
		fields?: ProductVariantOutOfStockFieldPolicy,
	},
	ProductVariantPreorderDeactivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantPreorderDeactivateKeySpecifier | (() => undefined | ProductVariantPreorderDeactivateKeySpecifier),
		fields?: ProductVariantPreorderDeactivateFieldPolicy,
	},
	ProductVariantReorder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantReorderKeySpecifier | (() => undefined | ProductVariantReorderKeySpecifier),
		fields?: ProductVariantReorderFieldPolicy,
	},
	ProductVariantReorderAttributeValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantReorderAttributeValuesKeySpecifier | (() => undefined | ProductVariantReorderAttributeValuesKeySpecifier),
		fields?: ProductVariantReorderAttributeValuesFieldPolicy,
	},
	ProductVariantSetDefault?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantSetDefaultKeySpecifier | (() => undefined | ProductVariantSetDefaultKeySpecifier),
		fields?: ProductVariantSetDefaultFieldPolicy,
	},
	ProductVariantStocksCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantStocksCreateKeySpecifier | (() => undefined | ProductVariantStocksCreateKeySpecifier),
		fields?: ProductVariantStocksCreateFieldPolicy,
	},
	ProductVariantStocksDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantStocksDeleteKeySpecifier | (() => undefined | ProductVariantStocksDeleteKeySpecifier),
		fields?: ProductVariantStocksDeleteFieldPolicy,
	},
	ProductVariantStocksUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantStocksUpdateKeySpecifier | (() => undefined | ProductVariantStocksUpdateKeySpecifier),
		fields?: ProductVariantStocksUpdateFieldPolicy,
	},
	ProductVariantTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantTranslatableContentKeySpecifier | (() => undefined | ProductVariantTranslatableContentKeySpecifier),
		fields?: ProductVariantTranslatableContentFieldPolicy,
	},
	ProductVariantTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantTranslateKeySpecifier | (() => undefined | ProductVariantTranslateKeySpecifier),
		fields?: ProductVariantTranslateFieldPolicy,
	},
	ProductVariantTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantTranslationKeySpecifier | (() => undefined | ProductVariantTranslationKeySpecifier),
		fields?: ProductVariantTranslationFieldPolicy,
	},
	ProductVariantUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantUpdateKeySpecifier | (() => undefined | ProductVariantUpdateKeySpecifier),
		fields?: ProductVariantUpdateFieldPolicy,
	},
	ProductVariantUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantUpdatedKeySpecifier | (() => undefined | ProductVariantUpdatedKeySpecifier),
		fields?: ProductVariantUpdatedFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ReducedRate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReducedRateKeySpecifier | (() => undefined | ReducedRateKeySpecifier),
		fields?: ReducedRateFieldPolicy,
	},
	RefreshToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefreshTokenKeySpecifier | (() => undefined | RefreshTokenKeySpecifier),
		fields?: RefreshTokenFieldPolicy,
	},
	RequestEmailChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestEmailChangeKeySpecifier | (() => undefined | RequestEmailChangeKeySpecifier),
		fields?: RequestEmailChangeFieldPolicy,
	},
	RequestPasswordReset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestPasswordResetKeySpecifier | (() => undefined | RequestPasswordResetKeySpecifier),
		fields?: RequestPasswordResetFieldPolicy,
	},
	Sale?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleKeySpecifier | (() => undefined | SaleKeySpecifier),
		fields?: SaleFieldPolicy,
	},
	SaleAddCatalogues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleAddCataloguesKeySpecifier | (() => undefined | SaleAddCataloguesKeySpecifier),
		fields?: SaleAddCataloguesFieldPolicy,
	},
	SaleBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleBulkDeleteKeySpecifier | (() => undefined | SaleBulkDeleteKeySpecifier),
		fields?: SaleBulkDeleteFieldPolicy,
	},
	SaleChannelListing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleChannelListingKeySpecifier | (() => undefined | SaleChannelListingKeySpecifier),
		fields?: SaleChannelListingFieldPolicy,
	},
	SaleChannelListingUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleChannelListingUpdateKeySpecifier | (() => undefined | SaleChannelListingUpdateKeySpecifier),
		fields?: SaleChannelListingUpdateFieldPolicy,
	},
	SaleCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleCountableConnectionKeySpecifier | (() => undefined | SaleCountableConnectionKeySpecifier),
		fields?: SaleCountableConnectionFieldPolicy,
	},
	SaleCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleCountableEdgeKeySpecifier | (() => undefined | SaleCountableEdgeKeySpecifier),
		fields?: SaleCountableEdgeFieldPolicy,
	},
	SaleCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleCreateKeySpecifier | (() => undefined | SaleCreateKeySpecifier),
		fields?: SaleCreateFieldPolicy,
	},
	SaleCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleCreatedKeySpecifier | (() => undefined | SaleCreatedKeySpecifier),
		fields?: SaleCreatedFieldPolicy,
	},
	SaleDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleDeleteKeySpecifier | (() => undefined | SaleDeleteKeySpecifier),
		fields?: SaleDeleteFieldPolicy,
	},
	SaleDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleDeletedKeySpecifier | (() => undefined | SaleDeletedKeySpecifier),
		fields?: SaleDeletedFieldPolicy,
	},
	SaleRemoveCatalogues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleRemoveCataloguesKeySpecifier | (() => undefined | SaleRemoveCataloguesKeySpecifier),
		fields?: SaleRemoveCataloguesFieldPolicy,
	},
	SaleTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleTranslatableContentKeySpecifier | (() => undefined | SaleTranslatableContentKeySpecifier),
		fields?: SaleTranslatableContentFieldPolicy,
	},
	SaleTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleTranslateKeySpecifier | (() => undefined | SaleTranslateKeySpecifier),
		fields?: SaleTranslateFieldPolicy,
	},
	SaleTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleTranslationKeySpecifier | (() => undefined | SaleTranslationKeySpecifier),
		fields?: SaleTranslationFieldPolicy,
	},
	SaleUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleUpdateKeySpecifier | (() => undefined | SaleUpdateKeySpecifier),
		fields?: SaleUpdateFieldPolicy,
	},
	SaleUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleUpdatedKeySpecifier | (() => undefined | SaleUpdatedKeySpecifier),
		fields?: SaleUpdatedFieldPolicy,
	},
	SelectedAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedAttributeKeySpecifier | (() => undefined | SelectedAttributeKeySpecifier),
		fields?: SelectedAttributeFieldPolicy,
	},
	SetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetPasswordKeySpecifier | (() => undefined | SetPasswordKeySpecifier),
		fields?: SetPasswordFieldPolicy,
	},
	ShippingError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingErrorKeySpecifier | (() => undefined | ShippingErrorKeySpecifier),
		fields?: ShippingErrorFieldPolicy,
	},
	ShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodKeySpecifier | (() => undefined | ShippingMethodKeySpecifier),
		fields?: ShippingMethodFieldPolicy,
	},
	ShippingMethodChannelListing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodChannelListingKeySpecifier | (() => undefined | ShippingMethodChannelListingKeySpecifier),
		fields?: ShippingMethodChannelListingFieldPolicy,
	},
	ShippingMethodChannelListingUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodChannelListingUpdateKeySpecifier | (() => undefined | ShippingMethodChannelListingUpdateKeySpecifier),
		fields?: ShippingMethodChannelListingUpdateFieldPolicy,
	},
	ShippingMethodPostalCodeRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodPostalCodeRuleKeySpecifier | (() => undefined | ShippingMethodPostalCodeRuleKeySpecifier),
		fields?: ShippingMethodPostalCodeRuleFieldPolicy,
	},
	ShippingMethodTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodTranslatableContentKeySpecifier | (() => undefined | ShippingMethodTranslatableContentKeySpecifier),
		fields?: ShippingMethodTranslatableContentFieldPolicy,
	},
	ShippingMethodTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodTranslationKeySpecifier | (() => undefined | ShippingMethodTranslationKeySpecifier),
		fields?: ShippingMethodTranslationFieldPolicy,
	},
	ShippingMethodType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodTypeKeySpecifier | (() => undefined | ShippingMethodTypeKeySpecifier),
		fields?: ShippingMethodTypeFieldPolicy,
	},
	ShippingPriceBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceBulkDeleteKeySpecifier | (() => undefined | ShippingPriceBulkDeleteKeySpecifier),
		fields?: ShippingPriceBulkDeleteFieldPolicy,
	},
	ShippingPriceCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceCreateKeySpecifier | (() => undefined | ShippingPriceCreateKeySpecifier),
		fields?: ShippingPriceCreateFieldPolicy,
	},
	ShippingPriceCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceCreatedKeySpecifier | (() => undefined | ShippingPriceCreatedKeySpecifier),
		fields?: ShippingPriceCreatedFieldPolicy,
	},
	ShippingPriceDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceDeleteKeySpecifier | (() => undefined | ShippingPriceDeleteKeySpecifier),
		fields?: ShippingPriceDeleteFieldPolicy,
	},
	ShippingPriceDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceDeletedKeySpecifier | (() => undefined | ShippingPriceDeletedKeySpecifier),
		fields?: ShippingPriceDeletedFieldPolicy,
	},
	ShippingPriceExcludeProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceExcludeProductsKeySpecifier | (() => undefined | ShippingPriceExcludeProductsKeySpecifier),
		fields?: ShippingPriceExcludeProductsFieldPolicy,
	},
	ShippingPriceRemoveProductFromExclude?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceRemoveProductFromExcludeKeySpecifier | (() => undefined | ShippingPriceRemoveProductFromExcludeKeySpecifier),
		fields?: ShippingPriceRemoveProductFromExcludeFieldPolicy,
	},
	ShippingPriceTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceTranslateKeySpecifier | (() => undefined | ShippingPriceTranslateKeySpecifier),
		fields?: ShippingPriceTranslateFieldPolicy,
	},
	ShippingPriceUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceUpdateKeySpecifier | (() => undefined | ShippingPriceUpdateKeySpecifier),
		fields?: ShippingPriceUpdateFieldPolicy,
	},
	ShippingPriceUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceUpdatedKeySpecifier | (() => undefined | ShippingPriceUpdatedKeySpecifier),
		fields?: ShippingPriceUpdatedFieldPolicy,
	},
	ShippingZone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneKeySpecifier | (() => undefined | ShippingZoneKeySpecifier),
		fields?: ShippingZoneFieldPolicy,
	},
	ShippingZoneBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneBulkDeleteKeySpecifier | (() => undefined | ShippingZoneBulkDeleteKeySpecifier),
		fields?: ShippingZoneBulkDeleteFieldPolicy,
	},
	ShippingZoneCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneCountableConnectionKeySpecifier | (() => undefined | ShippingZoneCountableConnectionKeySpecifier),
		fields?: ShippingZoneCountableConnectionFieldPolicy,
	},
	ShippingZoneCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneCountableEdgeKeySpecifier | (() => undefined | ShippingZoneCountableEdgeKeySpecifier),
		fields?: ShippingZoneCountableEdgeFieldPolicy,
	},
	ShippingZoneCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneCreateKeySpecifier | (() => undefined | ShippingZoneCreateKeySpecifier),
		fields?: ShippingZoneCreateFieldPolicy,
	},
	ShippingZoneCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneCreatedKeySpecifier | (() => undefined | ShippingZoneCreatedKeySpecifier),
		fields?: ShippingZoneCreatedFieldPolicy,
	},
	ShippingZoneDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneDeleteKeySpecifier | (() => undefined | ShippingZoneDeleteKeySpecifier),
		fields?: ShippingZoneDeleteFieldPolicy,
	},
	ShippingZoneDeleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneDeletedKeySpecifier | (() => undefined | ShippingZoneDeletedKeySpecifier),
		fields?: ShippingZoneDeletedFieldPolicy,
	},
	ShippingZoneUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneUpdateKeySpecifier | (() => undefined | ShippingZoneUpdateKeySpecifier),
		fields?: ShippingZoneUpdateFieldPolicy,
	},
	ShippingZoneUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneUpdatedKeySpecifier | (() => undefined | ShippingZoneUpdatedKeySpecifier),
		fields?: ShippingZoneUpdatedFieldPolicy,
	},
	Shop?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopKeySpecifier | (() => undefined | ShopKeySpecifier),
		fields?: ShopFieldPolicy,
	},
	ShopAddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopAddressUpdateKeySpecifier | (() => undefined | ShopAddressUpdateKeySpecifier),
		fields?: ShopAddressUpdateFieldPolicy,
	},
	ShopDomainUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopDomainUpdateKeySpecifier | (() => undefined | ShopDomainUpdateKeySpecifier),
		fields?: ShopDomainUpdateFieldPolicy,
	},
	ShopError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopErrorKeySpecifier | (() => undefined | ShopErrorKeySpecifier),
		fields?: ShopErrorFieldPolicy,
	},
	ShopFetchTaxRates?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopFetchTaxRatesKeySpecifier | (() => undefined | ShopFetchTaxRatesKeySpecifier),
		fields?: ShopFetchTaxRatesFieldPolicy,
	},
	ShopSettingsTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopSettingsTranslateKeySpecifier | (() => undefined | ShopSettingsTranslateKeySpecifier),
		fields?: ShopSettingsTranslateFieldPolicy,
	},
	ShopSettingsUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopSettingsUpdateKeySpecifier | (() => undefined | ShopSettingsUpdateKeySpecifier),
		fields?: ShopSettingsUpdateFieldPolicy,
	},
	ShopTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopTranslationKeySpecifier | (() => undefined | ShopTranslationKeySpecifier),
		fields?: ShopTranslationFieldPolicy,
	},
	StaffBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffBulkDeleteKeySpecifier | (() => undefined | StaffBulkDeleteKeySpecifier),
		fields?: StaffBulkDeleteFieldPolicy,
	},
	StaffCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffCreateKeySpecifier | (() => undefined | StaffCreateKeySpecifier),
		fields?: StaffCreateFieldPolicy,
	},
	StaffDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffDeleteKeySpecifier | (() => undefined | StaffDeleteKeySpecifier),
		fields?: StaffDeleteFieldPolicy,
	},
	StaffError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffErrorKeySpecifier | (() => undefined | StaffErrorKeySpecifier),
		fields?: StaffErrorFieldPolicy,
	},
	StaffNotificationRecipient?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffNotificationRecipientKeySpecifier | (() => undefined | StaffNotificationRecipientKeySpecifier),
		fields?: StaffNotificationRecipientFieldPolicy,
	},
	StaffNotificationRecipientCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffNotificationRecipientCreateKeySpecifier | (() => undefined | StaffNotificationRecipientCreateKeySpecifier),
		fields?: StaffNotificationRecipientCreateFieldPolicy,
	},
	StaffNotificationRecipientDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffNotificationRecipientDeleteKeySpecifier | (() => undefined | StaffNotificationRecipientDeleteKeySpecifier),
		fields?: StaffNotificationRecipientDeleteFieldPolicy,
	},
	StaffNotificationRecipientUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffNotificationRecipientUpdateKeySpecifier | (() => undefined | StaffNotificationRecipientUpdateKeySpecifier),
		fields?: StaffNotificationRecipientUpdateFieldPolicy,
	},
	StaffUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffUpdateKeySpecifier | (() => undefined | StaffUpdateKeySpecifier),
		fields?: StaffUpdateFieldPolicy,
	},
	Stock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockKeySpecifier | (() => undefined | StockKeySpecifier),
		fields?: StockFieldPolicy,
	},
	StockCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockCountableConnectionKeySpecifier | (() => undefined | StockCountableConnectionKeySpecifier),
		fields?: StockCountableConnectionFieldPolicy,
	},
	StockCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockCountableEdgeKeySpecifier | (() => undefined | StockCountableEdgeKeySpecifier),
		fields?: StockCountableEdgeFieldPolicy,
	},
	StockError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockErrorKeySpecifier | (() => undefined | StockErrorKeySpecifier),
		fields?: StockErrorFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	TaxType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxTypeKeySpecifier | (() => undefined | TaxTypeKeySpecifier),
		fields?: TaxTypeFieldPolicy,
	},
	TaxedMoney?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxedMoneyKeySpecifier | (() => undefined | TaxedMoneyKeySpecifier),
		fields?: TaxedMoneyFieldPolicy,
	},
	TaxedMoneyRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxedMoneyRangeKeySpecifier | (() => undefined | TaxedMoneyRangeKeySpecifier),
		fields?: TaxedMoneyRangeFieldPolicy,
	},
	TimePeriod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimePeriodKeySpecifier | (() => undefined | TimePeriodKeySpecifier),
		fields?: TimePeriodFieldPolicy,
	},
	Transaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionKeySpecifier | (() => undefined | TransactionKeySpecifier),
		fields?: TransactionFieldPolicy,
	},
	TranslatableItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TranslatableItemConnectionKeySpecifier | (() => undefined | TranslatableItemConnectionKeySpecifier),
		fields?: TranslatableItemConnectionFieldPolicy,
	},
	TranslatableItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TranslatableItemEdgeKeySpecifier | (() => undefined | TranslatableItemEdgeKeySpecifier),
		fields?: TranslatableItemEdgeFieldPolicy,
	},
	TranslationCreated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TranslationCreatedKeySpecifier | (() => undefined | TranslationCreatedKeySpecifier),
		fields?: TranslationCreatedFieldPolicy,
	},
	TranslationError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TranslationErrorKeySpecifier | (() => undefined | TranslationErrorKeySpecifier),
		fields?: TranslationErrorFieldPolicy,
	},
	TranslationUpdated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TranslationUpdatedKeySpecifier | (() => undefined | TranslationUpdatedKeySpecifier),
		fields?: TranslationUpdatedFieldPolicy,
	},
	UpdateMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateMetadataKeySpecifier | (() => undefined | UpdateMetadataKeySpecifier),
		fields?: UpdateMetadataFieldPolicy,
	},
	UpdatePrivateMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePrivateMetadataKeySpecifier | (() => undefined | UpdatePrivateMetadataKeySpecifier),
		fields?: UpdatePrivateMetadataFieldPolicy,
	},
	UploadError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadErrorKeySpecifier | (() => undefined | UploadErrorKeySpecifier),
		fields?: UploadErrorFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAvatarDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAvatarDeleteKeySpecifier | (() => undefined | UserAvatarDeleteKeySpecifier),
		fields?: UserAvatarDeleteFieldPolicy,
	},
	UserAvatarUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAvatarUpdateKeySpecifier | (() => undefined | UserAvatarUpdateKeySpecifier),
		fields?: UserAvatarUpdateFieldPolicy,
	},
	UserBulkSetActive?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserBulkSetActiveKeySpecifier | (() => undefined | UserBulkSetActiveKeySpecifier),
		fields?: UserBulkSetActiveFieldPolicy,
	},
	UserCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountableConnectionKeySpecifier | (() => undefined | UserCountableConnectionKeySpecifier),
		fields?: UserCountableConnectionFieldPolicy,
	},
	UserCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountableEdgeKeySpecifier | (() => undefined | UserCountableEdgeKeySpecifier),
		fields?: UserCountableEdgeFieldPolicy,
	},
	UserPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermissionKeySpecifier | (() => undefined | UserPermissionKeySpecifier),
		fields?: UserPermissionFieldPolicy,
	},
	VAT?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VATKeySpecifier | (() => undefined | VATKeySpecifier),
		fields?: VATFieldPolicy,
	},
	VariantMediaAssign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantMediaAssignKeySpecifier | (() => undefined | VariantMediaAssignKeySpecifier),
		fields?: VariantMediaAssignFieldPolicy,
	},
	VariantMediaUnassign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantMediaUnassignKeySpecifier | (() => undefined | VariantMediaUnassignKeySpecifier),
		fields?: VariantMediaUnassignFieldPolicy,
	},
	VariantPricingInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantPricingInfoKeySpecifier | (() => undefined | VariantPricingInfoKeySpecifier),
		fields?: VariantPricingInfoFieldPolicy,
	},
	VerifyToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifyTokenKeySpecifier | (() => undefined | VerifyTokenKeySpecifier),
		fields?: VerifyTokenFieldPolicy,
	},
	Voucher?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherKeySpecifier | (() => undefined | VoucherKeySpecifier),
		fields?: VoucherFieldPolicy,
	},
	VoucherAddCatalogues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherAddCataloguesKeySpecifier | (() => undefined | VoucherAddCataloguesKeySpecifier),
		fields?: VoucherAddCataloguesFieldPolicy,
	},
	VoucherBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherBulkDeleteKeySpecifier | (() => undefined | VoucherBulkDeleteKeySpecifier),
		fields?: VoucherBulkDeleteFieldPolicy,
	},
	VoucherChannelListing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherChannelListingKeySpecifier | (() => undefined | VoucherChannelListingKeySpecifier),
		fields?: VoucherChannelListingFieldPolicy,
	},
	VoucherChannelListingUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherChannelListingUpdateKeySpecifier | (() => undefined | VoucherChannelListingUpdateKeySpecifier),
		fields?: VoucherChannelListingUpdateFieldPolicy,
	},
	VoucherCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherCountableConnectionKeySpecifier | (() => undefined | VoucherCountableConnectionKeySpecifier),
		fields?: VoucherCountableConnectionFieldPolicy,
	},
	VoucherCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherCountableEdgeKeySpecifier | (() => undefined | VoucherCountableEdgeKeySpecifier),
		fields?: VoucherCountableEdgeFieldPolicy,
	},
	VoucherCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherCreateKeySpecifier | (() => undefined | VoucherCreateKeySpecifier),
		fields?: VoucherCreateFieldPolicy,
	},
	VoucherDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherDeleteKeySpecifier | (() => undefined | VoucherDeleteKeySpecifier),
		fields?: VoucherDeleteFieldPolicy,
	},
	VoucherRemoveCatalogues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherRemoveCataloguesKeySpecifier | (() => undefined | VoucherRemoveCataloguesKeySpecifier),
		fields?: VoucherRemoveCataloguesFieldPolicy,
	},
	VoucherTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherTranslatableContentKeySpecifier | (() => undefined | VoucherTranslatableContentKeySpecifier),
		fields?: VoucherTranslatableContentFieldPolicy,
	},
	VoucherTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherTranslateKeySpecifier | (() => undefined | VoucherTranslateKeySpecifier),
		fields?: VoucherTranslateFieldPolicy,
	},
	VoucherTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherTranslationKeySpecifier | (() => undefined | VoucherTranslationKeySpecifier),
		fields?: VoucherTranslationFieldPolicy,
	},
	VoucherUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherUpdateKeySpecifier | (() => undefined | VoucherUpdateKeySpecifier),
		fields?: VoucherUpdateFieldPolicy,
	},
	Warehouse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseKeySpecifier | (() => undefined | WarehouseKeySpecifier),
		fields?: WarehouseFieldPolicy,
	},
	WarehouseCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseCountableConnectionKeySpecifier | (() => undefined | WarehouseCountableConnectionKeySpecifier),
		fields?: WarehouseCountableConnectionFieldPolicy,
	},
	WarehouseCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseCountableEdgeKeySpecifier | (() => undefined | WarehouseCountableEdgeKeySpecifier),
		fields?: WarehouseCountableEdgeFieldPolicy,
	},
	WarehouseCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseCreateKeySpecifier | (() => undefined | WarehouseCreateKeySpecifier),
		fields?: WarehouseCreateFieldPolicy,
	},
	WarehouseDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseDeleteKeySpecifier | (() => undefined | WarehouseDeleteKeySpecifier),
		fields?: WarehouseDeleteFieldPolicy,
	},
	WarehouseError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseErrorKeySpecifier | (() => undefined | WarehouseErrorKeySpecifier),
		fields?: WarehouseErrorFieldPolicy,
	},
	WarehouseShippingZoneAssign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseShippingZoneAssignKeySpecifier | (() => undefined | WarehouseShippingZoneAssignKeySpecifier),
		fields?: WarehouseShippingZoneAssignFieldPolicy,
	},
	WarehouseShippingZoneUnassign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseShippingZoneUnassignKeySpecifier | (() => undefined | WarehouseShippingZoneUnassignKeySpecifier),
		fields?: WarehouseShippingZoneUnassignFieldPolicy,
	},
	WarehouseUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseUpdateKeySpecifier | (() => undefined | WarehouseUpdateKeySpecifier),
		fields?: WarehouseUpdateFieldPolicy,
	},
	Webhook?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookKeySpecifier | (() => undefined | WebhookKeySpecifier),
		fields?: WebhookFieldPolicy,
	},
	WebhookCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookCreateKeySpecifier | (() => undefined | WebhookCreateKeySpecifier),
		fields?: WebhookCreateFieldPolicy,
	},
	WebhookDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookDeleteKeySpecifier | (() => undefined | WebhookDeleteKeySpecifier),
		fields?: WebhookDeleteFieldPolicy,
	},
	WebhookError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookErrorKeySpecifier | (() => undefined | WebhookErrorKeySpecifier),
		fields?: WebhookErrorFieldPolicy,
	},
	WebhookEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookEventKeySpecifier | (() => undefined | WebhookEventKeySpecifier),
		fields?: WebhookEventFieldPolicy,
	},
	WebhookEventAsync?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookEventAsyncKeySpecifier | (() => undefined | WebhookEventAsyncKeySpecifier),
		fields?: WebhookEventAsyncFieldPolicy,
	},
	WebhookEventSync?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookEventSyncKeySpecifier | (() => undefined | WebhookEventSyncKeySpecifier),
		fields?: WebhookEventSyncFieldPolicy,
	},
	WebhookUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookUpdateKeySpecifier | (() => undefined | WebhookUpdateKeySpecifier),
		fields?: WebhookUpdateFieldPolicy,
	},
	Weight?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WeightKeySpecifier | (() => undefined | WeightKeySpecifier),
		fields?: WeightFieldPolicy,
	},
	_Service?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ServiceKeySpecifier | (() => undefined | _ServiceKeySpecifier),
		fields?: _ServiceFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;