// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mailgun from "mailgun-js"

export default function handler(req, res) {

    //Details received from the form 
    const { _for, services, name, phoneNumber, email, street, suburb, postCode } = req.body

    //Mail Body being composed with the data being provided by the user through form 
    const emailText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>

    <style>
        html{
            font-family: Poppins, Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        body{
            margin: 1rem;
            background-color: #eee;

            color: #333;

            text-align: center;
        }
        h1{
            font-size: 24px;
            font-weight: 600;
            color: #444;

            /*background-color: rgba(95,36,133,1);*/
        }
        table{
            margin: auto;
            background: rgb(196,195,224);
            background-color: #fff;

            color: #333;
            padding:5px;

            font-size: 16px;
            text-align: left;

            border-radius: 10px;

            box-shadow: 0 0 10px #44444455 ;
        }
        table tr:first-child{
            font-size: 18px;
            font-weight: 700;
        }
        table td{
            padding: 10px 16px 10px 16px;
        }
        .email-container{
            padding: 2px;
        }
    
    </style>
</head>
<body>
    <div class="email-container">
        <h1>New Client Request</h1>
        <table>
            <tr>
                <td>#</td>
                <td>Items</td>
                <td>Details</td>
            </tr>
            <tr>
                <td>1.</td>
                <td>Name of the requester</td>
                <td>${name}</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>For whome is this request for?</td>
                <td>${_for}</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Services</td>
                <td>${services}</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Phone Number</td>
                <td>${phoneNumber}</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Email address</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>6.</td>
                <td>Street</td>
                <td>${street}</td>
            </tr>
            <tr>
                <td>7.</td>
                <td>Suburb</td>
                <td>${phoneNumber}</td>
            </tr>
            <tr>
                <td>8.</td>
                <td>Postcode</td>
                <td>${postCode}</td>
            </tr>
        </table>
    </div>
</body>
</html>`

    //Creating the auth object
    const mailGun = () => mailgun({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
    })

    //sending the email
    mailGun().messages().send({
        from: "Interested Person <jhon@mg.yourdomain.com>", // sender address
        to: `${email}`, //email address of the receiver
        subject: "WoH Service Registration", // Subject line
        html: emailText // html body
    },
        (error, body) => {
            if (error)
                res.status(500).send({ message: "Error occured while sending the email." })
            else
                res.status(200).send({ message: "Email was successfully send." })
        })
}
