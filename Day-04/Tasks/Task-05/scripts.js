/** 
    Problem 5: Horoscope Sign Checker
        Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
*/


        

/// Start Coding.

    // Horoscope Sign Checker based on birth month without using Switch Case:

let month = prompt("Enter your birth month (1-12):");
month = parseInt(month);

let zodiacSign;

switch (month) {
    case 1:
        zodiacSign = "Capricorn or Aquarius";
        break;
    case 2:
        zodiacSign = "Aquarius or Pisces";
        break;
    case 3:
        zodiacSign = "Pisces or Aries";
        break;
    case 4:
        zodiacSign = "Aries or Taurus";
        break;
    case 5:
        zodiacSign = "Taurus or Gemini";
        break;
    case 6:
        zodiacSign = "Gemini or Cancer";
        break;
    case 7:
        zodiacSign = "Cancer or Leo";
        break;
    case 8:
        zodiacSign = "Leo or Virgo";
        break;
    case 9:
        zodiacSign = "Virgo or Libra";
        break;
    case 10:
        zodiacSign = "Libra or Scorpio";
        break;
    case 11:
        zodiacSign = "Scorpio or Sagittarius";
        break;
    case 12:
        zodiacSign = "Sagittarius or Capricorn";
        break;
    default:
        zodiacSign = "Invalid month!";
}

console.log("Your Zodiac sign is: " + zodiacSign);


/// End code.