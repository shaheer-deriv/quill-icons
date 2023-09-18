import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivBotBrandLightLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivBotBrandLightLogoWordmarkVerticalIcon',
  component: DerivProductDerivBotBrandLightLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivBotBrandLightLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivBotBrandLightLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
