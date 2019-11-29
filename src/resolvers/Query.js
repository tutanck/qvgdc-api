const { getUserId } = require("../utils");

async function games(parent, args, context, info) {
  const where = {
    open: args.open
  };

  const games = await context.prisma.games({
    where
  });

  return games;
}

async function questions(parent, args, context, info) {
  const userId = getUserId(context);

  const questions = await context.prisma.game({ id: args.gameId }).questions();

  return questions;
}

async function choices(parent, args, context, info) {
  const userId = getUserId(context);

  const choices = await context.prisma
    .question({ id: args.questionId })
    .choices();

  return choices;
}

async function game(parent, args, context, info) {
  const userId = getUserId(context);

  const game = await context.prisma.game({
    id: args.gameId
  });

  return game;
}

async function question(parent, args, context, info) {
  const userId = getUserId(context);

  const question = await context.prisma.question({
    id: args.questionId
  });

  return question;
}

async function me(parent, args, context, info) {
  const userId = getUserId(context);

  const user = await context.prisma.user({
    id: userId
  });

  return user;
}

module.exports = {
  games,
  game,
  me,
  questions,
  question,
  choices
};
