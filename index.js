


function fetchData() {

    fetch("https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2")
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.transactions);
            const html = data.transactions
                .map(user => {
                    if (`${user.direction}` == 1)                                         //direction 1 type 1
                    {
                        if (`${user.type}` == 1) {
                            if (`${user.status}` == 1)
                                return `
        
           
        <h2><span>${new Date(user.startDate).getUTCDate()}
            ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
            ${new Date(user.startDate).getFullYear()
                                    }</span>
        </h2>
        <div class ="userTwo">                                               
        <div class = "status">Pending</div>
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p> 
        <div class="tid">Transaction Id:${user.id}</div> 
        </div>
        <div class ="endDate">
        <p>${new Date(user.endDate).getUTCDate()}
        ${new Date(user.endDate).toLocaleString('default', { month: 'short' })}
            ${new Date(user.endDate).getFullYear()}, ${new Date(user.endDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>
        <div></div>
        
        `                                                                     //the direction is 1 so we have created new class for user i.e. usertwo
                            else if (`${user.status}` == 2)
                                return `
        
        
        <h2><span>
        ${new Date(user.startDate).getUTCDate()}
            ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
            ${new Date(user.startDate).getFullYear()
                                    }
            </span ></h2>
        <div class ="userTwo">
        <div class = "status">Confirmed</div>
            <p class = "amount" >₹${user.amount}</p>
            <p class = "desc">${user.description}</p> 
            <p class= "vpay"></p>
            <div class="tid">Transaction Id:${user.id}</div>     
        </div>
        <div class ="endDate">
            <p>${new Date(user.endDate).getUTCDate()}
            ${new Date(user.endDate).toLocaleString('default', { month: 'short' })}
                ${new Date(user.endDate).getFullYear()}, ${new Date(user.endDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>

            `                                                                      //repeated in every loop
                            else if (`${user.status} ` == 3)
                                return `
                < div class ="userTwo" >
        <div class = "status">expired</div>
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p> 
            <div class="tid">Transaction Id:${user.id}</div>  
        </div >
                <h2><span>${new Date(user.startDate).getUTCDate()}
                ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                ${new Date(user.startDate).getFullYear()
                                    }
                        </span></h2>

            `
                            else if (`${user.status} ` == 4)
                                return `< div class = "status" > reject</div >
        <div class ="userTwo">
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p>  
            <div class="tid">Transaction Id:${user.id}</div> 
        </div>
        <h2><span>${new Date(user.startDate).getUTCDate()}
        ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
        ${new Date(user.startDate).getFullYear()
                                    }
        </span></h2>
            `
                            else if (`${user.status} ` == 5)
                                return `< div class = "status" > cancel</div >
        <div class ="user">
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p>
            <div class="tid">Transaction Id:${user.id}</div>   
        </div>
        <h2><span>${new Date(user.startDate).getUTCDate()}
        ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
        ${new Date(user.startDate).getFullYear()
                                    }
        </span></h2>
            `
                        }
                        else if (`${user.type == 2} `) {                                  //direction 1 type 2

                            if (`${user.status} ` == 1)
                                return `
        <h2> <span>${new Date(user.startDate).getUTCDate()}
        ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
        ${new Date(user.startDate).getFullYear()
                                    }
        </span></h2>
          <div class ="userTwo">
          <div class = "status">Pending</div>
              <p class = "amount">₹${user.amount}</p>
              <p class = "desc">${user.description}</p> 
              <button class ="btn cancel">Cancel</button>  
              <div class="tid">Transaction Id:${user.id}</div>
          </div>
          <div class ="endDate">
          <p>${new Date(user.endDate).getUTCDate()}
          ${new Date(user.endDate).toLocaleString('default', { month: 'short' })}
              ${new Date(user.endDate).getFullYear()}, ${new Date(user.endDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
          </div>
          <div></div>

            `
                            else if (`${user.status} ` == 2)
                                return `
                <h2><span>${new Date(user.startDate).getUTCDate()}
                ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                ${new Date(user.startDate).getFullYear()
                                    }</span></h2 >
          <div class ="userTwo">
          <div class = "status">Confirmed</div>
              <p class = "amount">₹${user.amount}</p>
              <p class = "desc">${user.description}</p>  
              <button class ="btn cancel">Cancel</button>
              <div class="tid">Transaction Id:${user.id}</div>   
          </div>
          <div class ="endDate">
              <p>${new Date(user.endDate).getUTCDate()}
              ${new Date(user.endDate).toLocaleString('default', { month: 'short' })}
                  ${new Date(user.endDate).getFullYear()}, ${new Date(user.endDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
          </div>

            `
                            else if (`${user.status} ` == 3)
                                return `
                < div class ="userTwo" >
          <div class = "status">expired</div>
              <p class = "amount">₹${user.amount}</p>
              <p class = "desc">${user.description}</p>  
              <button class ="btn cancel">Cancel</button>
              <div class="tid">Transaction Id:${user.id}</div>   
          </div >
                <h2><span>${new Date(user.startDate).getUTCDate()}
                ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                ${new Date(user.startDate).getFullYear()
                                    }</span></h2>
            `
                            else if (`${user.status} ` == 4)
                                return `< div class = "status" > reject</div >
          <div class ="userTwo">
              <p class = "amount">₹${user.amount}</p>
              <p class = "desc">${user.description}</p> 
              <button class ="btn cancel">Cancel</button>
              <div class="tid">Transaction Id:${user.id}</div>    
          </div>
          <h2><span>${new Date(user.startDate).getUTCDate()}
          ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
          ${new Date(user.startDate).getFullYear()
                                    }</span></h2>
            `
                            else if (`${user.status} ` == 5)
                                return `< div class = "status" > cancel</div >
          <div class ="user">
              <p class = "amount">₹${user.amount}</p>
              <p class = "desc">${user.description}</p> 
              <button class ="btn cancel">Cancel</button>
              <div class="tid">Transaction Id:${user.id}</div>    
          </div>
          <h2><span>${new Date(user.startDate).getUTCDate()}
          ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
          ${new Date(user.startDate).getFullYear()
                                    }</span></h2>
            `

                        }


                    }


                    else if (`${user.direction} ` == 2)                       //direction 2 type 1
                    {
                        if (`${user.type} ` == 1) {
                            if (`${user.status} ` == 1)                          //here direction is 2 so we use new class for user i.e. user. All this done for left and right alignment of the chat box
                                return `
                <h2> <span>${new Date(user.startDate).getUTCDate()}
                ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                ${new Date(user.startDate).getFullYear()
                                    }</span></h2 >
        <div class ="user">
        <div class = "status">Pending</div>
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p> 
            <div class="tid">Transaction Id:${user.id}</div>  
        </div>
        <div class ="endDate">
            <p>${new Date(user.endDate).getUTCDate()}
            ${new Date(user.endDate).toLocaleString('default', { month: 'short' })}
                ${new Date(user.endDate).getFullYear()}, ${new Date(user.endDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>

            `
                            else if (`${user.status} ` == 2)                            //further repeated in every loop
                                return `
                <h2> <span>${new Date(user.startDate).getUTCDate()}
                ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                ${new Date(user.startDate).getFullYear()
                                    }</span></h2 >
        <div class ="user">
        <div class = "status">Confirmed</div>
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p> 
            <div class="tid">Transaction Id:${user.id}</div> 
             </div>
        <div class ="endDate">
            <p>${new Date(user.endDate).getUTCDate()}
            ${new Date(user.endDate).toLocaleString('default', { month: 'short' })}
                ${new Date(user.endDate).getFullYear()}, ${new Date(user.endDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>

            `
                            else if (`${user.status} ` == 3)
                                return `
                < div class ="user" >
        <div class = "status">expired</div>
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p> 
            <div class="tid">Transaction Id:${user.id}</div>   
        </div>
                <h2><span>${new Date(user.startDate).getUTCDate()}
                ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                ${new Date(user.startDate).getFullYear()
                                    }</span></h2>
            `
                            else if (`${user.status} ` == 4)
                                return `< div class = "status" > reject</div >
        <div class ="user">
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p>
            <div class="tid">Transaction Id:${user.id}</div> 
            </div>
        <h2><span>${new Date(user.startDate).getUTCDate()}
        ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
        ${new Date(user.startDate).getFullYear()
                                    }</span></h2>
            `
                            else if (`${user.status} ` == 5)
                                return `< div class = "status" > cancel</div >
        <div class ="user">
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p>
            <div class="tid">Transaction Id:${user.id}</div>   
        </div>
        <h2><span>${new Date(user.startDate).getUTCDate()}
        ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
        ${new Date(user.startDate).getFullYear()
                                    }</span></h2>
            `}
                        else if (`${user.type} ` == 2)                                      //direction 2 type 2
                        {
                            if (`${user.status} ` == 1)
                                return `
                <h2> <span>${new Date(user.startDate).getUTCDate()}
                ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                ${new Date(user.startDate).getFullYear()
                                    }</span></h2 >
        <div class ="user">
        <div class = "status">Pending</div>
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p>
            <button class ="btn pay">Pay</button>
            <button class ="btn decline">Reject</button>
            <div class="tid">Transaction Id:${user.id}</div> 
            </div>
            <div class ="endDate">
            <p>${new Date(user.endDate).getUTCDate()}
            ${new Date(user.endDate).toLocaleString('default', { month: 'short' })}
                ${new Date(user.endDate).getFullYear()}, ${new Date(user.endDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>

            `
                            else if (`${user.status} ` == 2)
                                return `
                <h2> <span>${new Date(user.startDate).getUTCDate()}
                ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                ${new Date(user.startDate).getFullYear()
                                    }</span></h2 >
        <div class ="user">
        <div class = "status">Confirmed</div>
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p>
            <button class ="btn pay">Pay</button>
        <button class ="btn decline">Decline</button>
        <div class="tid">Transaction Id:${user.id}</div>   
        </div>
        <div class ="endDate">
            <p>${new Date(user.endDate).getUTCDate()}
            ${new Date(user.endDate).toLocaleString('default', { month: 'short' })}
                ${new Date(user.endDate).getFullYear()}, ${new Date(user.endDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>

            `
                            else if (`${user.status} ` == 3)
                                return `
                < div class ="user" >
        <div class = "status">expired</div>
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p> 
            <button class ="btn pay">Pay</button>
            <button class ="btn decline">Decline</button>
            <div class="tid">Transaction Id:${user.id}</div>   
        </div >
                <h2><span>${new Date(user.startDate).getUTCDate()}
                ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                ${new Date(user.startDate).getFullYear()
                                    }</span></h2>
            `
                            else if (`${user.status} ` == 4)
                                return `< div class = "status" > reject</div >
        <div class ="user">
            <p class = "amount">₹${user.amount}</p>
            <p class = "desc">${user.description}</p>  
            <button class ="btn pay">Pay</button>
            <button class ="btn decline">Decline</button>
            <div class="tid">Transaction Id:${user.id}</div>  
        </div>
        <h2><span>${new Date(user.startDate).getUTCDate()}
        ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
        ${new Date(user.startDate).getFullYear()
                                    }</span></h2>
            `
                            else if (`${user.status} ` == 5)
                                return `< div class = "status" > cancel</div >
                <div class="user">
                    <p class="amount">₹${user.amount}<p>
                        <p class="desc">${user.description}</p>
                        <button class="btn pay">Pay</button>
                        <button class="btn decline">Decline</button>
                        <div class="tid">Transaction Id:${user.id}</div>
                    </div>
                        <h2><span>${new Date(user.startDate).getUTCDate()}
                        ${new Date(user.startDate).toLocaleString('default', { month: 'short' })
                                    }
                        ${new Date(user.startDate).getFullYear()
                                    }</span></h2>
        `}
                    }
                })


                .join("");
            console.log(html);
            document
                .querySelector("#app")
                .insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        })
}

fetchData();
