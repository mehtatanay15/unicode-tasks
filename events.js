async function fdata (link)
{
    const data = await fetch(link);
    return data.json; 
}

async function fetchevents()
{
    const events = await fdata('https://se-tasks.vercel.app/events')
    displayevents(events);
}

async function fetchdetails(id)
{
    const details = await fdata(`https://se-tasks.vercel.app/events/${id}`)
    displaydetails(details);
}


function displayevents(events)
{

}

function displaydetails(details)
{
    
}



