export default function SkillsPanel() {
  return (
    <div className="custom-background">
      <h2 className="text-light">Skills</h2>
      <ul className="text-light custom-list">
        <li>
          Languages/Frameworks/Lib:{" "}
          <p>
            HTML/HTML5, PHP/Laravel, CSS (Bootstrap), JavaScript, jQuery, Node.js, CMS
            (Joomla)
          </p>
        </li>
        <li>
          Database: <p>MS-SQL, MySQL, MongoDB, PostgreSQL</p>
        </li>
        <li>
          Developer Tools:{" "}
          <p>
            XAMPP, Visual Studio Code, Adobe Photoshop, Crystal Report, Sublime,
            Workbench, HeidiSQL, DBeaver
          </p>
        </li>
        <li>
          Hardware: <p>PC troubleshooting, PC Basic Networks</p>
        </li>
        <li>
          Familiar Tools:{" "}
          <p>
            MVC Pattern, Unit Testing, Unity 3D C#, React, Redux, VueJS 3,
            Webpack, REST API, Git, Coreui
          </p>
        </li>
        <li>
          Others: <p>Core Banking Applications, Basic   Scripting</p>
        </li>
      </ul>
    </div>
  );
}
