# Bug Tracker

A web application for developers to track and manage bugs in thier projects.

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine.
```bash
git clone <repo-url>
```
2. Navigate to project directory.
3. Install dependencies
```bash
pip install -r backend/requirements.txt
```
4. Set up the database
```bash
python manage.py migrate
```
5. Run the server in the backend directory
```bash
python manage.py runserver
```
6. Run the development server in the frontend directory
```bash
npm run dev
```

## Dependencies
```bash
pip install -r backend/requirements.txt
```
- All dependencies are found in the `requirements.txt` file

## Usage

Here's how you can use the project:

1. Create a superuser to access the admin panel.
```bash
python manage.py createsuperuser
```
2. Run the development server. 
```bash
python manage.py runserver
```
3. Open the local host link found in the terminal. 
4. Start using the application by loggin in with your superuser credentials. 

## Configuration

The application settings can be configured by editing the 'settings.py' file in the 'backend/backend' directory. You can adjust settings such as database configurations, installed apps, middleware, and more. Also, you can adjust the api settings and behaviors in the 'backend/api' directory. 

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature, bug fix, or overall improvement.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Credits

- Tech With Tim - Initial webpage and project setup

### Version 1.0.0 (2024-02-02)

- Initial release

## Troubleshooting

If you encounter any issues with the project, try the following troubleshooting steps:

- Make sure all dependencies are installed correctly.
- Check the console for any error messages.
- Ensure you are using the latest version of Python 3.

## Support

For help and support, please contact [bhavnoorsaini@icloud.com](mailto:bhavnoorsaini@icloud.com).
