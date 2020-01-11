function signup()
{
    var name,email,password,confirm,check,contact;
    name=document.getElementById("userName").value;
    email=document.getElementById("userEmail").value;
    cont=document.getElementById("userCont").value;
    address=document.getElementById("userAddress").value;
    if(!name || !email || !cont || !address){
        alert("Please fill all necessary fields");
    }
    else
    {
        
        
            if(cont.length==10)
            {
                alert("Account created successfully");
                document.getElementById("admissionForm").reset();
            }
            else
            {
                alert("Please enter 10 digit mobile number");
            }
        }
        
    }
