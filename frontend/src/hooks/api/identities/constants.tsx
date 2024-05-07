import { IdentityAuthMethod } from "./enums";

export const identityAuthToNameMap: { [I in IdentityAuthMethod]: string } = {
  [IdentityAuthMethod.UNIVERSAL_AUTH]: "Universal Auth",
  [IdentityAuthMethod.AWS_IAM_AUTH]: "AWS IAM Auth"
};
