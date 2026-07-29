<template>
  <ActiveSection :section-name="'contacts'">
    <!--
        Conacts Info
      -->
    <div class="content contacts">
      <!-- title -->
      <div class="title">Contacto</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div class="map" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812492.512057462!2d-92.5715226550093!3d21.067181015073214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f540ff8aad604ed%3A0xcccc217531083d0a!2sYucatan!5e0!3m2!1sen!2smx!4v1739890303218!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="info-list">
            <ul>
              <li>
                <strong>Ubicación . . . . .</strong>
                <a href="https://www.google.com/maps/search/?api=1&query=Yucatán,+México" target="_blank" rel="noopener noreferrer">Yucatán, México</a>
              </li>
              <li>
                <strong>Teléfono . . . . .</strong>
                <a href="tel:+529991817834">+52 999 181 7834</a>
              </li>
              <li>
                <strong>Email . . . . .</strong>
                <a href="mailto:contacto@djcrespo.dev">contacto@djcrespo.dev</a>
              </li>
            </ul>
          </div>
          <!--
          <div class="info-list">
            <ul>
              <li><strong>Email . . . . .</strong> contacto@djcrespo.dev</li>
            </ul>
          </div>
          -->
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <!--
      Contact Form
    -->
    
    <!--
    <div class="content contacts">
      <div class="title">Contacto</div>

      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div class="contact_form">
            <form id="cform" method="post">
              <div class="row">
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input type="text" name="name" placeholder="Full Name" />
                  </div>
                </div>
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="col col-d-12 col-t-12 col-m-12">
                  <div class="group-val">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="align-left">
                <a href="#" class="button">
                  <span class="text">Send Message</span>
                  <span class="arrow"></span>
                </a>
              </div>
            </form>
            <div class="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    -->
  </ActiveSection>
</template>

<style scoped>
.info-list a {
  color: inherit;
  text-decoration: none;
}
.info-list a:hover {
  text-decoration: underline;
}
</style>
