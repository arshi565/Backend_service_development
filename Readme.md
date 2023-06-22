# Backend Service Developer 
Step 1: Choose a Technology Stack
You can choose either Golang or Node.js as the backend programming language. Additionally, select a web framework based on your chosen language. For example, you can use Go with the Gin framework or Node.js with Express.js.

Select a suitable database for storing the data. You can use PostgreSQL, MySQL, or any other database that you're comfortable with.

Decide on the hosting option: either host the application on AWS or GCP and expose the endpoint, or containerize the application using Docker.

Step 2: Set Up the Project
Initialize a new project using your chosen programming language and framework. Set up the necessary dependencies, configurations, and project structure.

Step 3: Define Data Models
Define the data models for seats, seat pricing, and bookings. Map these models to database tables. You can use an ORM (Object-Relational Mapping) library to simplify the database operations.

Step 4: Implement API Endpoints
Implement the following API endpoints:

GET /seats
Return all the seats, ordered by seat class, along with the is_booked status for each seat.

GET /seats/:id
Return the seat details along with the pricing based on the bookings previously made for that seat class. Determine the pricing based on the percentage of seats booked as mentioned in the assignment specifications.

POST /booking
Create a booking for the selected seats. Accept an array of seat IDs, name, and phone number of the user. Check if the seats are available and not previously booked. If any seats are already booked, return the relevant error message. Upon successful booking, return the booking ID and the total amount of the booking.

GET /bookings
Retrieve all bookings created by the user. Allow searching by email or phone number. Return an error if no user identifier is provided.

Step 5: Implement Bonus Features (Optional)
If you have time, you can implement the bonus features mentioned in the assignment:

Notification Integration: Integrate with a third-party service provider (e.g., Twilio, Sendgrid, etc.) to send booking confirmation notifications via email or SMS.
Write a script to upload the default data by reading the CSV file.
Step 6: Test the Application
Use a REST client like Postman to test the implemented API endpoints. Ensure that the responses are correct and the error handling is working as expected.

Step 7: Documentation
Write a README.md file for your project, explaining how to set up and run the application. Include any necessary instructions for running the script to upload default data.

Step 8: Share Code and Postman Collection
Share your code repository (e.g., GitHub, Bitbucket, GitLab) with the completed project. Additionally, export the Postman collection of the REST APIs created and share it with the submission.
