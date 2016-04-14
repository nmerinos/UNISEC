from app import app

if __name__ == '__main__':
    import doctest
    doctest.testmod()
    app.run(host='0.0.0.0', port=8081, debug=True)
