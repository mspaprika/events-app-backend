import Event from './models/event.mjs';

// Retrieve all events
export async function index(req, res) {
    const events = await Event.find() ;
    res.send(events) ;
}

// Remove event by id
export async function remove(req, res) {
	try {
  	await findByIdAndRemove(req.params.id) ;
		res.send({ message: "Event removed" }) ;
	}
	catch {
		res.status(404).send({message: "Event not found"})
	}
}