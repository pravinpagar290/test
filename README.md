<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Bootstrap Page</title>

    <!-- Bootstrap CSS -->
    <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
        rel="stylesheet"
    >
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">

            <a class="navbar-brand" href="#">
                My Website
            </a>

            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            Home
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            About
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Contact
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    </nav>

    <!-- Hero Section -->
    <div class="container text-center mt-5">

        <h1 class="text-primary">
            Welcome to Bootstrap
        </h1>

        <p class="lead">
            This is a simple Bootstrap webpage.
        </p>

        <button class="btn btn-success">
            Get Started
        </button>

    </div>

    <!-- Cards Section -->
    <div class="container mt-5">

        <div class="row">

            <div class="col-md-4">
                <div class="card shadow">

                    <div class="card-body">
                        <h3 class="card-title">
                            HTML
                        </h3>

                        <p class="card-text">
                            Structure of webpage.
                        </p>

                        <button class="btn btn-primary">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>

            <div class="col-md-4">
                <div class="card shadow">

                    <div class="card-body">
                        <h3 class="card-title">
                            CSS
                        </h3>

                        <p class="card-text">
                            Styling of webpage.
                        </p>

                        <button class="btn btn-danger">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>

            <div class="col-md-4">
                <div class="card shadow">

                    <div class="card-body">
                        <h3 class="card-title">
                            Bootstrap
                        </h3>

                        <p class="card-text">
                            Responsive frontend framework.
                        </p>

                        <button class="btn btn-dark">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>

        </div>

    </div>

    <!-- Bootstrap JS -->
    <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js">
    </script>

</body>
</html>
