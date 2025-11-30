import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div className="parent"> 
        <div className="card">
            <div>
                <div className="top">
                    <img src="https://imgs.search.brave.com/xH9cnsATqKVrc-KDUr6UwVSiiGEK1l5GAS0NR0kty_4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzcwLzg3LzUx/LzM2MF9GXzE2NzA4/NzUxNjhfUmlsTWtn/UjRPbDVpZmF6SDM4/QzNoak0wSWR6cmtB/Tm8uanBn" alt="Amazon" />
                    <button>Save <Bookmark size={15}/></button>
                </div>
                <div className="center">
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div>
                        <h4>Part-Time</h4>
                        <h4>Senior Level</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <h2>$120/hr <span>Mumbai, India</span></h2>
                <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card