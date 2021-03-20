function information(prenom, nom, age) 
{
  const majeur = 18;

  console.log("prenom: " + prenom);
  console.log(`nom: ${nom}`);
  console.log("age: " + age);
  
  let finalAge = age - majeur;
  
  if (finalAge > 0) {
    console.log("vous êtes majeur depuis " + finalAge + " ans");
  } else {
    finalAge = majeur - age
    console.log("vous serez majeur dans " + finalAge + " ans");
  }
}

information('Alice', 'Liddell', 7)