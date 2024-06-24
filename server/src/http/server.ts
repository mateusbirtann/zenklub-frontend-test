import fastify from 'fastify';

const app = fastify();

app.get('/calendar', () => {
  const currentDate = new Date();
  const daysOfWeek = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const times = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];
  const title = 'Agende sua sessão!';
  const timezone = 'Brasília (GMT-3)';

  return {
    calendarData: {
      currentDate,
      daysOfWeek,
      monthNames,
      times,
      title,
      timezone,
    },
  };
});

app.get('/userBusinessProfile', () => {
  const avatarImage =
    'data:image/jpeg;base64,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';
  const username = 'Sigmund Freud';
  const jobRole = 'Psicanalista';
  const address = 'Rua das Palmeiras, 123';
  const stars = 5;
  const reviews = 25;
  const description =
    'Sou Sigmund Freud, neurologista e fundador da psicanálise. Desenvolvi teorias sobre o inconsciente, os sonhos e a sexualidade, propondo que nossos comportamentos são influenciados por desejos e conflitos internos. Meu trabalho revolucionou a compreensão da mente humana e influenciou profundamente a psicologia moderna.';
  const price = 160;
  const minutesDuration = 50;

  return {
    userBusinessProfileData: {
      avatarImage,
      username,
      jobRole,
      address,
      stars,
      reviews,
      description,
      price,
      minutesDuration,
    },
  };
});

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on http://localhost:3333');
});
