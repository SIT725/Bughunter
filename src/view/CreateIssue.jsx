import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CreateIssue = () => {
    return(
        <section class="bg-white dark:bg-gray-900">
            <Header />
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Create A New Issue</h2>
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="bugname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bug Name</label>
                  <input type="text" name="bugname" id="bugname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Bug name" required=""></input>
              </div>
              <div class="w-full">
                  <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                  <input type="text" name="author" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Author" required=""></input>
              </div>
              <div class="w-full">
                  <label for="gitlink" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Git Link</label>
                  <input type="text" name="gitlink" id="gitlink" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Git Link" required=""></input>
              </div>
              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="Front-end">Front-end</option>
                      <option value="Back-end">Back-end</option>
                      <option value="Docker">Docker</option>
                      <option value="Hosting">Hosting</option>
                  </select>
              </div>
              <div>
              <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                  <select id="priority" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="Zero-day">Zero-day</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Minor">Minor</option>
                  </select>
              </div> 
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Submit Your Bug
            </button>
      </form>
    </div>
    <Footer />
    </section>
    );
};

export default CreateIssue