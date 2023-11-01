---
sidebar_position: 1
---

# Instruction

## Overview

The backend system is designed for a simulated automated parcel delivery point/locker system,
catering to Consumer users, Delivery truck drivers, and a Parcel generator "robot".

## Backend Technologies

* The backend will use Java or JavaScript for programming.
* A SQL or NoSQL database will be implemented based on requirements.
* Communication between frontend and backend will be via RESTful API.

# Core Components

1. User Management Service
	* Manages Consumer and Driver user accounts.
	* Key endpoints include user registration, authentication, and deletion.

2. Parcel Management Service
	* Handles parcel information, history, and statuses.
	* Provides endpoints for fetching user parcel history, creating new parcels, and updating parcel information.

3. Locker Management Service
	* Manages parcel lockers and their cabinets.
	* Endpoints allow for fetching locker information, free cabinets, and opening cabinets.

4. Notification Service
	* Sends email notifications to users.
	* Includes an endpoint for sending email notifications.

5. Parcel Generator Robot
	* A backend script that generates parcels at defined intervals.

## Testing

1. Unit Tests
	* Focuses on testing individual functions or methods.

2. Integration Tests
	* Tests API endpoints and their integration with the database.

3. Load Tests
	* Ensures the system can handle concurrent users.

4. Security Tests
	* Tests for vulnerabilities in user authentication and data privacy.
