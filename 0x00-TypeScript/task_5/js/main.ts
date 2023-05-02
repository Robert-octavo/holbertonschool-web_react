/*
Create two interfaces MajorCredits and MinorCredits

  - Each interface defines a number named credits
  - Add a brand property to each interface in order to uniquely
  identify each of them

Create two functions named sumMajorCredits and sumMinorCredits

  - Each function takes two arguments subject1 and subject2
  - sumMajorCredits returns MajorCredits value and sumMinorCredits
  returns MinorCredits value
  - Each function sums the credits of the two subjects
*/

interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}
