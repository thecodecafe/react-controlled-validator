"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Accepted_1 = require("./src/Accepted");
const AfterDate_1 = require("./src/AfterDate");
const BeforeDate_1 = require("./src/BeforeDate");
const Base64Image_1 = require("./src/Base64Image");
const In_1 = require("./src/In");
const IsAmericanExpress_1 = require("./src/IsAmericanExpress");
const IsBetween_1 = require("./src/IsBetween");
const IsDiscoverCard_1 = require("./src/IsDiscoverCard");
const IsEmail_1 = require("./src/IsEmail");
const IsMasterCard_1 = require("./src/IsMasterCard");
const IsNGMobile_1 = require("./src/IsNGMobile");
const IsNumeric_1 = require("./src/IsNumeric");
const IsPhone_1 = require("./src/IsPhone");
const IsRequired_1 = require("./src/IsRequired");
const IsRequiredWith_1 = require("./src/IsRequiredWith");
const IsUsername_1 = require("./src/IsUsername");
const IsVisa_1 = require("./src/IsVisa");
const Matches_1 = require("./src/Matches");
const Max_1 = require("./src/Max");
const MaxLength_1 = require("./src/MaxLength");
const Min_1 = require("./src/Min");
const MinLength_1 = require("./src/MinLength");
const DoesNotMatch_1 = require("./src/DoesNotMatch");
exports.Rules = {
    Accepted: Accepted_1.Accepted, AfterDate: AfterDate_1.AfterDate, BeforeDate: BeforeDate_1.BeforeDate, Base64Image: Base64Image_1.Base64Image,
    In: In_1.In, IsAmericanExpress: IsAmericanExpress_1.IsAmericanExpress, IsDiscoverCard: IsDiscoverCard_1.IsDiscoverCard, IsVisa: IsVisa_1.IsVisa,
    IsMasterCard: IsMasterCard_1.IsMasterCard, IsBetween: IsBetween_1.IsBetween, IsEmail: IsEmail_1.IsEmail, IsNGMobile: IsNGMobile_1.IsNGMobile, IsNumeric: IsNumeric_1.IsNumeric,
    IsPhone: IsPhone_1.IsPhone, IsRequired: IsRequired_1.IsRequired, IsRequiredWith: IsRequiredWith_1.IsRequiredWith, IsUsername: IsUsername_1.IsUsername,
    Matches: Matches_1.Matches, Max: Max_1.Max, MaxLength: MaxLength_1.MaxLength, Min: Min_1.Min, MinLength: MinLength_1.MinLength, DoesNotMatch: DoesNotMatch_1.DoesNotMatch
};
exports.default = exports.Rules;
