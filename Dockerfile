# Use an official Python runtime as a base image
FROM python:3.12-slim

# Install necessary packages for building psycopg
RUN apt-get update && apt-get install -y libpq-dev gcc python3-dev

# Set the working directory in the container
WORKDIR /matchmaster

# Copy the current directory contents into the container
COPY . /matchmaster

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 8000 for the Django app
EXPOSE 8001

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]
