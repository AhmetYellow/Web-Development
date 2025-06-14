# mentor tracker

## Entities/Model

- User 
  name: String,
  email: String,
  role: String, // 'mentor' or 'mentee'
  subjects: [String], // for mentors
  gradeLevel: String, // for mentees
  goals: String,      // for mentees
  assignedMentor: ObjectId (ref: 'User'), // for mentees
  password: String, // if using authentication
  createdAt: Date

  prayers
    fajr: 
    dhuhr:
    asr: 
    maghrib: 
    isha:

    bookPagesRead
    quranPagesRead