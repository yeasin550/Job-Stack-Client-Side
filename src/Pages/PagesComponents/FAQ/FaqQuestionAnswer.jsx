import React from "react";
import FAQAllQuestion from "./FAQAllQuestion";

const FaqQuestionAnswer = () => {
  return (
    <div>
      <div className="md:px-40 my-20 dark:text-black ">
        <FAQAllQuestion
          question={"1. What is Job-Stack?"}
          answer={
            "Job-Stack is an online platform designed to connect job seekers with employers. It serves as a bridge between individuals seeking employment and companies looking to hire talent."
          }
        />
        <FAQAllQuestion
          question={"2. How do I create an account on Job-Stack?"}
          answer={
            "To create an account, click the 'Sign Up' or 'Register' button on the homepage. Fill in your name, email address, and create a password. Follow the verification steps to complete your registration."
          }
        />
        <FAQAllQuestion
          question={"3. Is using Job-Stack free for job seekers?"}
          answer={
            "Yes, creating an account, searching for job listings, and applying for jobs are all free for job seekers. We also offer premium features for those looking for additional benefits."
          }
        />
        <FAQAllQuestion
          question={"4. How can I search for job listings on Job-Stack?"}
          answer={
            "You can search for job listings by entering keywords, location, job category, or company name in the search bar on the homepage. You can further refine your search using filters like job type and salary range."
          }
        />
        <FAQAllQuestion
          question={"5. How do I upload my resume to Job-Stack?"}
          answer={
            "After logging in, go to your profile and locate the Upload Resume or Edit Profile section. Follow the prompts to upload your resume from your device."
          }
        />
        <FAQAllQuestion
          question={"6. How do I apply for a job on Job-Stack?"}
          answer={
            "When you find a job listing that interests you, click on it to view the details. Then, click the Apply Now button. You may be asked to attach your resume and cover letter if required by the employer."
          }
        />
        <FAQAllQuestion
          question={"7. Can I edit my resume after uploading it to Job-Stack?"}
          answer={
            "Yes, you can edit your resume at any time. Simply go to your profile, find the Edit Profile section, and make the necessary changes to your resume."
          }
        />
        <FAQAllQuestion
          question={
            "8. How can I receive job alerts for new listings that match my preferences?"
          }
          answer={
            "You can set up job alerts in your profile settings. Specify your preferred job criteria, and we will send you email notifications when matching job listings are posted."
          }
        />
        <FAQAllQuestion
          question={"9. What should I do if I forget my password or username?"}
          answer={
            "If you forget your password or username, click on the Forgot Password or Forgot Username link on the login page. Follow the instructions to reset your password or retrieve your username via email."
          }
        />
        <FAQAllQuestion
          question={"10. How can employers post job openings on Job-Stack?"}
          answer={
            "Employers can create an account or log in, then access the Post a Job or Employer Dashboard section. They can follow the steps to input job details and publish openings."
          }
        />
        <FAQAllQuestion
          question={
            "11. Are there guidelines for creating an effective job posting on Job-Stack?"
          }
          answer={
            "Yes, we provide guidelines to help employers create compelling job postings. These guidelines include clear job descriptions, qualifications, and application instructions to attract the right candidates."
          }
        />
        <FAQAllQuestion
          question={
            "12. What kind of support does Job-Stack offer for job seekers and employers?"
          }
          answer={
            " We offer customer support through email and a dedicated support portal to assist with any questions or issues related to our job portal website."
          }
        />
      </div>
    </div>
  );
};

export default FaqQuestionAnswer;
