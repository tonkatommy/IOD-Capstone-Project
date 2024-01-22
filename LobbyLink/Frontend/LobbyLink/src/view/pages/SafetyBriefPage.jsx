import Container from "react-bootstrap/esm/Container";
import AckButton from "../../model/components/Buttons/AckButton";
import "../../css/SafetyBrief.css";

const SafetyBriefPage = (params) => {
    return (
        <Container
            fluid
            className="safetyBriefPage-container">
            <Container
                fluid
                className="safetyBriefPage-inner-container">
                <h4 className="safetyBriefPage-ack-text">
                    You are required to read this brief at least once every 3
                    months.
                    <br />
                    Please familiarise yourself with the information below to
                    continue.
                </h4>
                <h1 className="safetyBriefPage-title">Health & Safety Brief</h1>
                <h2>Purpose</h2>
                <p>
                    The purpose of this brief is to provide you with important
                    information and instructions on how to work safely and
                    prevent injuries and illnesses at the workplace.
                </p>
                <h2>Scope</h2>
                <p>
                    This brief applies to all workers, contractors, visitors and
                    anyone else who may be affected by the work activities at
                    the site.
                </p>
                <h2>Responsibilities</h2>
                <p>
                    Everyone has a role to play in ensuring health and safety at
                    work. As a PCBU (Person Conducting a Business or
                    Undertaking), we have the primary duty to eliminate or
                    minimise the risks to health and safety so far as is
                    reasonably practicable1. As workers, you have the duty to
                    take reasonable care of your own health and safety and that
                    of others, and to follow any reasonable instructions,
                    policies and procedures given by us1. As visitors, you have
                    the duty to comply with any reasonable directions given by
                    us or our workers1.
                </p>
                <h2>Hazards and Risks</h2>
                <p>The main hazards and risks at the site are:</p>
                <ul>
                    <li>
                        Falls from heights: This can occur when working on
                        roofs, scaffolds, ladders, platforms or other elevated
                        areas. To prevent falls, you must use appropriate fall
                        protection equipment, such as harnesses, guardrails,
                        safety nets or fall arrest systems. You must also follow
                        the safe work method statements and instructions given
                        by your supervisor or the site manager.
                    </li>
                    <li>
                        Electric shocks: This can occur when working with or
                        near electrical equipment, wires, cables or power
                        sources. To prevent electric shocks, you must ensure
                        that the electrical equipment is properly maintained,
                        tested and tagged. You must also use insulated tools,
                        gloves and footwear, and avoid contact with wet or damp
                        surfaces. You must also follow the lockout/tagout
                        procedures and isolate the power supply before working
                        on or near electrical equipment.
                    </li>
                    <li>
                        Manual handling injuries: This can occur when lifting,
                        carrying, pushing, pulling or moving objects or
                        materials. To prevent manual handling injuries, you must
                        use mechanical aids, such as trolleys, hoists or cranes,
                        whenever possible. You must also use correct lifting
                        techniques, such as bending your knees, keeping your
                        back straight and holding the load close to your body.
                        You must also avoid twisting, overreaching or
                        overloading yourself.
                    </li>
                    <li>
                        Noise-induced hearing loss: This can occur when exposed
                        to loud or continuous noise, such as from machinery,
                        tools or vehicles. To prevent noise-induced hearing
                        loss, you must wear appropriate hearing protection, such
                        as ear plugs or ear muffs, whenever the noise level
                        exceeds 85 decibels. You must also limit your exposure
                        time and take regular breaks in quieter areas.
                    </li>
                </ul>
                <h2>Emergency Procedures</h2>
                <p>In case of an emergency, you must follow these steps:</p>
                <ul>
                    <li>
                        Alert: Notify your supervisor, the site manager or the
                        emergency services (dial 111) as soon as possible. Give
                        clear and accurate information about the location,
                        nature and severity of the emergency.
                    </li>
                    <li>
                        Assist: If it is safe to do so, provide first aid or
                        assistance to any injured or affected persons. Follow
                        the instructions given by the emergency services or the
                        site manager.
                    </li>
                    <li>
                        Evacuate: If instructed to do so, or if the situation
                        becomes unsafe, evacuate the site in an orderly manner.
                        Follow the emergency exit signs and the designated
                        evacuation routes. Do not use lifts or escalators.
                        Gather at the assembly point and wait for further
                        instructions.
                    </li>
                </ul>
                <h2>Icons and Diagrams</h2>
                <p>
                    Here are some icons and diagrams that can help you to
                    visually understand and remember the health and safety
                    information in this brief. Fall protection icon: This icon
                    indicates that you must use fall protection equipment when
                    working at heights. It shows a person wearing a harness and
                    attached to a lifeline. Electrical hazard icon: This icon
                    indicates that there is a risk of electric shock or
                    electrocution. It shows a lightning bolt and a warning sign.
                    Manual handling icon: This icon indicates that you must use
                    mechanical aids or correct lifting techniques when handling
                    heavy or awkward objects. It shows a person lifting a box
                    with a trolley. ![Manual handling icon] Noise hazard icon:
                    This icon indicates that there is a risk of noise-induced
                    hearing loss. It shows an ear and a sound wave. ![Noise
                    hazard icon] Emergency exit sign: This sign indicates the
                    nearest exit in case of an emergency. It shows a person
                    running towards a door with an arrow. ![Emergency exit sign]
                    Evacuation route diagram: This diagram shows the layout of
                    the site and the evacuation routes to follow in case of an
                    emergency. It also shows the location of the assembly point,
                    the fire extinguishers and the first aid kits. ![Evacuation
                    route diagram]
                </p>
                <h2>Conclusion</h2>
                <p>
                    Thank you for reading this Health & Safety brief. Please
                    make sure that you understand and follow the information and
                    instructions given in this document. If you have any
                    questions or concerns, please contact your supervisor or the
                    site manager. Remember, your health and safety is our
                    priority. Stay safe and work smart!
                </p>
                <h4 className="safetyBriefPage-ack-text">
                    By clicking Sign In you acknowledge that you have
                    <br /> READ AND UNDERSTOOD
                    <br /> this Health & Safety Brief.
                </h4>
                <AckButton className="safetyBriefPage-ack-btn" />
            </Container>
        </Container>
    );
};

export default SafetyBriefPage;
