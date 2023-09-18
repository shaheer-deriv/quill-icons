import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderWhiteLogoWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderWhiteLogoWordmarkIcon',
  component: PartnersProductSmarttraderWhiteLogoWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderWhiteLogoWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderWhiteLogoWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
