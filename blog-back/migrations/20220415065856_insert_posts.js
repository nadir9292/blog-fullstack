/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex("users").insert({
    pseudo: "nadir92",
    email: "nadir92@gmail.com",
    passwordHash: "dpozadjzadjdfsq",
    passwordSalt: "oiazfnugtbgdjvwd",
  })
  await knex("posts").insert({
    title:
      "West Ham seal Europa League semi-final spot as goal flurry tames Lyon",
    content:
      "As Mark Noble prepared to enter the pitch with 14 minutes left he could have been forgiven if his mind had drifted back to the bad old days. Noble knows better than anyone that West Ham were a shambles not so long ago, until David Moyes arrived to instil stability and togetherness, and it is doubtful that the veteran midfielder ever imagined his final season as a professional would involve his boyhood club embarking on an adventure that could end with them cavorting around with the Europa League trophy in Seville next month.",
    is_published: "true",
    userId: 1,
  })

  await knex("posts").insert({
    title:
      "Chess: Teenagers top in Reykjavik while English hopes fade at the finish",
    content:
      "India’s Rameshbabu Praggnanandhaa, 16, widely forecast as a future world class grandmaster, added to his growing reputation on Tuesday when he won the €5,000 first prize at the Reykjavik Open with an unbeaten 7.5/9. Earlier in his career, the Chennai teenager was the youngest ever international master, among the youngest ever GMs and the second youngest to reach a 2600 Fide rating.",
    is_published: "true",
    userId: 1,
  })

  await knex("posts").insert({
    title:
      "Tyson Fury pre-fight Zoom conference ducks questions over Daniel Kinahan",
    content:
      "Earlier this week the biggest boxing news story of the year broke when the US Treasury announced that they had imposed harsh sanctions against Daniel Kinahan, one of the most powerful men in the sport, who has acted as a confidante and adviser to Fury and many other leading fighters in Britain and the United States. The US government also warned all fighters and promoters who have worked with Kinahan to cut ties with him owing to his alleged leadership of a criminal cartel.",
    is_published: "true",
    userId: 1,
  })
  await knex("posts").insert({
    title:
      "Tyson Fury pre-fight Zoom conference ducks questions over Daniel Kinahan",
    content:
      "Earlier this week the biggest boxing news story of the year broke when the US Treasury announced that they had imposed harsh sanctions against Daniel Kinahan, one of the most powerful men in the sport, who has acted as a confidante and adviser to Fury and many other leading fighters in Britain and the United States. The US government also warned all fighters and promoters who have worked with Kinahan to cut ties with him owing to his alleged leadership of a criminal cartel.",
    is_published: "true",
    userId: 1,
  })
  await knex("posts").insert({
    title:
      "Tyson Fury pre-fight Zoom conference ducks questions over Daniel Kinahan",
    content:
      "Earlier this week the biggest boxing news story of the year broke when the US Treasury announced that they had imposed harsh sanctions against Daniel Kinahan, one of the most powerful men in the sport, who has acted as a confidante and adviser to Fury and many other leading fighters in Britain and the United States. The US government also warned all fighters and promoters who have worked with Kinahan to cut ties with him owing to his alleged leadership of a criminal cartel.",
    is_published: "true",
    userId: 1,
  })
  await knex("comments").insert({
    content: "Nice post !",
    is_published: "true",
    userId: 1,
    postId: 1,
  })
  await knex("comments").insert({
    content: "Bouuh bad post !",
    is_published: "true",
    userId: 1,
    postId: 2,
  })
  await knex("comments").insert({
    content: "Lol so funny !",
    is_published: "true",
    userId: 1,
    postId: 1,
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  await knex.raw("TRUNCATE TABLE comments RESTART IDENTITY CASCADE")
  await knex.raw("TRUNCATE TABLE posts RESTART IDENTITY CASCADE")
  await knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
}
