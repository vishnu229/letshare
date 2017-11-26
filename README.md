Activity log by the User
===========================
Step 1 - When user clicks on "Add Activity" page/button, user will be shown with the list of schools 
that he is registered before by the admin. List of schools may be shown as drop-down

APP/Web-UI will do GET on /users/{userId} which would return JSON containing the list of schoolIds that
he is associated with.

Step 2 - When user selects the school from the drop-down list, APP/Web-UI will do HTTP GET on /schools/{schoolId} 
that would return JSON. Json contains the field activities that will have the array of activityId associated to the school.

List of goals may be shown as drop-down list to the user

Step  3 - When user selects the activiy, APP/Web-UI will do HTTP GET on /activities/{activityId} that would return Json containing the 
field names and the type of the value allowed.

Step 4 - When user click on submit button, it sends HTTP POST on /activities/{activityId} with the json.





