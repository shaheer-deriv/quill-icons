import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotWhiteLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotWhiteLogoWordmarkVerticalIcon',
  component: PartnersProductBinaryBotWhiteLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotWhiteLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotWhiteLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
