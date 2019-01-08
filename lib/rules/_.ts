import { Accepted } from './src/Accepted';
import { AfterDate } from './src/AfterDate';
import { BeforeDate } from './src/BeforeDate';
import { Base64Image } from './src/Base64Image';
import { In } from './src/In';
import { IsAmericanExpress } from './src/IsAmericanExpress';
import { IsBetween } from './src/IsBetween';
import { IsDiscoverCard } from './src/IsDiscoverCard';
import { IsEmail } from './src/IsEmail';
import { IsMasterCard } from './src/IsMasterCard';
import { IsNGMobile } from './src/IsNGMobile';
import { IsNumeric } from './src/IsNumeric';
import { IsPhone } from './src/IsPhone';
import { IsPhoneNational } from './src/IsPhoneNational';
import { IsRequired } from './src/IsRequired';
import { IsRequiredWith } from './src/IsRequiredWith';
import { IsUsername } from './src/IsUsername';
import { IsVisa } from './src/IsVisa';
import { Match } from './src/Match';
import { Max } from './src/Max';
import { MaxLength } from './src/MaxLength';
import { Min } from './src/Min';
import { MinLength } from './src/MinLength';
import { NotMatch } from './src/NotMatch';
import { Sometimes } from './src/Sometimes';

/**
 * Here we combine our rules into one file
 * and make them available to the calling file.
 */
export const Rules = {
    Accepted, AfterDate, BeforeDate, Base64Image, 
    In, IsAmericanExpress, IsDiscoverCard, IsVisa,
    IsMasterCard, IsBetween, IsEmail, IsNGMobile, IsNumeric,
    IsPhone, IsPhoneNational, IsRequired, IsRequiredWith, IsUsername,
    Match, Max, MaxLength, Min, MinLength, NotMatch, Sometimes
};

export default Rules;