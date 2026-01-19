"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row
          id="mc_embed_signup_scroll"
          fillWidth
          maxWidth={24}
          s={{ direction: "column" }}
          gap="8"
          horizontal="center"
        >
          <div className="clear">
            <Row height="48" vertical="center">
              <Button 
                id="mc-embedded-subscribe" 
                size="m" 
                onClick={() => {
                  window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=jonathansupriadi@gmail.com&su=Portfolio Contact&body=Hello, I would like to connect with you.`,
                    '_blank'
                  );
                }}
              >
                Contact
              </Button>
            </Row>
          </div>
        </Row>
      </div>
    </Column>
  );
};
